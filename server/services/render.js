import axios from "axios" //allows to make requests from api
import { response } from "express"

// Route configurations

export const getAll = (req, res) => {

    // MAKE A GET REQUEST TO /api/numbers
    axios.get('http://localhost:8080/api/numbers')
        .then((response) => {
            res.render('index', {phones: response.data})
        })
        .catch(err=> {
            res.send(err)
        })


}

export const addNumber = (req, res) => {
    res.render('add_number')
}

export const updateNumber = (req, res) => {

    // MAKE REQUEST
    axios.get('http://localhost:8080/api/numbers', {params: {id: req.query.id}})
        .then((phonedata) => {
            res.render('update_number', {phone: phonedata.data})
        })
        .catch(err=> {
            res.send(err)
        })
}