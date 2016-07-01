var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(express.static('client'))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended:true}))

var knexConfig = require('./knexfile')
var env = process.env.NODE_ENV || 'development'
var knex = require('knex')(knexConfig[env])


app.get('/', function(req,res){
  res.send('index.html')
})

app.post('/add', function(req,res){
  console.log('this is req.body', req.body.country)
  knex('customers').insert({country:req.body.country})
    .then(function(data){
          res.render('thankYou')
    })
})

app.post('/query', function(req,res){
  knex('customers').insert({country:req.body.country})
    .then(function(data){
          res.render('thankYou')
    })
})

app.listen(3000, function(){
  console.log('We have lift off on port 3000')
})
