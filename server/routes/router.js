import express, { Router } from 'express'
import { getAll, addNumber, updateNumber } from '../services/render.js'
import { create, deletePhone, update, find } from '../controller/controller.js'

const router = express.Router()


// Routers 
router.get('/', getAll)

router.get('/add_number', addNumber)

router.get('/update_number', updateNumber)

// API 
router.post('/api/numbers', create)
router.get('/api/numbers', find)
router.put('/api/numbers/:id', update)
router.delete('/api/numbers/:id', deletePhone)

export default router