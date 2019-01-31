let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/status', function (req, res ){
  res.send('Hello nodejs server')
})

app.get('/hello/:person', function (req,res) {
  console.log('hello - ' + req.params.person)
  res.send('sey hello with ' + req.params.person)
})

app.post('/hello', function (req, res) {
  res.send('OK  you post - ' + req.body.name)
})

/* RESFUL Api for users management */
// create user
app.post('/user', function (req, res) {
  res.send('สร้างผู้ใช้')
})

// edit user, suspend, active
app.put('/user/:userId', function (req, res) {
  res.send('แก้ไขผู้ใช้')
})

// delete user
app.delete('/user/:userId', function (req, res) {
  res.send('ลบผู้ใช้งาน')
})

// get user by id
app.get('/user/:userId', function (req, res) {
  res.send('ดูข้อมูลผู้ใช้งาน')
})

// get all user
app.get('/users', function (req, res) {
  res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด')
})



let port = 8080

app.listen(port, function () {
  console.log('server running on ' + port)
})