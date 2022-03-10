const express = require('express') //Libraries; React
const bodyParser = require('body-parser') //APIs - Application Programming Interface
const socket = require('socket.io') // Frameworks; Angular

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index')
})

app.post('/room', function(req, res) {
    let roomName = req.body.roomName
    let userName = req.body.userName
    res.redirect(`/room?username=${userName}&roomname=${roomName}`)
})

app.get('/room', (req, res) => {
    res.render('room')
})

// app.get('/calculate', (req, res) =>{
//     let a = parseInt(req.query.a)
//     let b = parseInt(req.query.b)
//     res.send(new String (a+b))
// })

const server = app.listen(3000, () => {
    console.log('Server strarted running...')
})

const io = socket(server)
let s = require('./utils/socket')
s.socket(io)