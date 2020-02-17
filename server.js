const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3008 //if we load tp heroku
// let apples= {name:'apples',amount:4}
let fruits = [
    {
        name: 'orange',
        type: 'California'
    }
]

app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
//middleware for express to ready body of POST methods etc 
let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let apples = [
    {

        name: "honeycrisp",
        amount: 4
    }
]
// this is my get method
app.get('/data', (req, res) => res.json(apples))

app.get('/', (req, res) => res.send('hello there!'))
app.get('/index', (req, res) => res.sendFile('index.html', { root: __dirname }))
//app.get('/data',(req,res) => res.json({fruit:'Apple',amount:100}))

//app.get('/data') is a  API end point
app.get('/fruits/type', (req, res) => res.json(fruits))

// this is my post method
// using relational mapping to put values that the server gets back where I want them
app.post('/', function (req, res) {
    res.send('POST request to homepage')

    // as a request, this takes in my name and uses it as a value for a new object in my array database
    let name = req.body.name;
    apples.push({ name: `${name}` })
    // this sends back the value of name as a res 
    //res.send(name)
})



//app.get('/data',(req,res) => res.json(apples))
app.use(express.static('./')) // because style sheets are added
app.listen(port, () => console.log(`Example port on ${port}`))
