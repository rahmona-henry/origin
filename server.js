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

app.get('/stats', function(req,res){
  res.render('statsRequest')
})


app.get('/stats/:id', function(req,res){
  knex('customers').where({country:req.body.country}).select('total')
    .then(function(data){
          res.render('statsReturned')
    })
})


app.post('/add', function(req,res){
  knex('customers').where({country:req.body.country}).increment('total',1)
    .then(function(data){
          res.render('thankYou')
    })
})


app.listen(3000, function(){
  console.log('We have lift off on port 3000')
})
