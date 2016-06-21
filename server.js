var express = require('express')
var app = express()

app.use(express.static('client'))
app.set('view engine', 'hbs')

// app.get('/', function(req,res){
//   res.send('Hello Queenstown')
// })

app.get('/', function(req,res){
  res.send('index.html')
})

app.listen(3000, function(){
  console.log('We have lift off on port 3000')
})
