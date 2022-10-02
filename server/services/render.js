import axios from "axios" //allows to make requests from api
import { response } from "express"

// Route configurations
const url = 'https://contact-management-artikov.herokuapp.com/api/numbers'

export const getAll = (req, res) => {

    // MAKE A GET REQUEST TO /api/numbers
    axios.get(url)
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
    axios.get(url, {params: {id: req.query.id}})
        .then((phonedata) => {
            res.render('update_number', {phone: phonedata.data})
        })
        .catch(err=> {
            res.send(err)
        })
}