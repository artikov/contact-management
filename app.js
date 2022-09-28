import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
import {fileURLToPath} from 'url';

// setting up the path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 5000

// log requests (morgan module allows log requests on the console whenever we make requests)
app.use(morgan('tiny'))

// parse requests to body-parser
app.use(bodyParser.urlencoded({extended:true}))

// setting view engine
app.set("view engine", "ejs")

// asset loading
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))


// routers
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/add_number', (req, res) => {
    res.render('add_number')
})

app.get('/update_number', (req, res) => {
    res.render('update_number')
})



app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))