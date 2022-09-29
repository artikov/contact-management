$("#add_number").submit(function(event) {
    alert("Data added successfully!")
})

$("#update_number").submit(function(event) {
    event.preventDefault()

    let unindexed_array = $(this).serializeArray() // this method returns the serialized array of the data submitted
    let data = {}

    $.map(unindexed_array, (n, i) => {
        data[n['name']] = n['value']
    })

    let request = {
        "url": `http://localhost:8080/api/numbers/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data updated successfully")
    })

})

// HANDLE DELETE REQUEST
if (window.location.pathname=='/'){
    $ondelete=$(".table tbody td a.delete")
    $ondelete.click(function(){
        let id = $(this).attr("data-id")

        let request = {
            "url": `http://localhost:8080/api/numbers/${id}`,
            "method": "DELETE",
        }

        if(confirm("Delete this data?")){
            $.ajax(request).done(function(response){
                alert("Data deleted successfully")
                location.reload()
            })
        }

    })
}