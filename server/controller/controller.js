import Phonedb from "../model/model.js";


// ADD NEW PHONE
export const create = (req, res) => {
    // validating the request
    if(!req.body){
        return res
            .status(400)
            .send({message:"Content cannot be empty"})   
    }

    // new instance of phoneDB
    const phone = new Phonedb({
        // ID: uuidv4(),
        number: req.body.number,
        monthly_price: req.body.monthly,
        setup_price: req.body.setup,
        currency: req.body.currency
    })

    // save phone in DB
    phone
        .save(phone)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Error accured while adding a phone"
            })
        })

}

// FIND PHONE
export const find = (req, res) => {
    Phonedb.find()
        .then(phone=>{
            res.send(phone)
        })
        .catch(err =>{
            res.status(500).send({message:err.message || "Error occured while finding the phone"})
        })
}

// UPDATE PHONE
export const update = (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message:"Update data cannot be empty"})
    }

    const id = req.params.id

    Phonedb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({message: `Phone with the id of ${id} cannot be found`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error update user information"})
        })
}

// DELETE PHONE
export const deletePhone = (req, res) => {
    const id = req.params.id

    Phonedb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message: `Unable to delete the phone with id ${id}`})
            }else{
                res.send({
                    message:"Phone number was successfully deleted!"
                })
            }
        })
        .catch(err=> {
            res.status(500).send({
                message: "Unable to find number"
            })
        })
}

