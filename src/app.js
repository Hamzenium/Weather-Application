const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const geocode = require('../utils/location')
const  forecast = require('../utils/forecast')
  
const directory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
console.log(viewsPath)
const partialsPath = path.join(__dirname,'../templates/partials')

const port = 3000

app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)
app.use(express.static(directory))

app.get('',(req, res) => {

    res.render("index" ,{
        title: "Weather",
    })

})

app.get('/about',(req, res) => {

    res.render("about" ,{
        title: "About Me",
        name: "Momina Mustehsan"
    })
})
app.get('/weather',(req, res) => {

    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address !'
        })
    }
    const data = forecast(req.query.address)
    const data1 = geocode(req.query.address)

  
      res.send({
        "forecast": data,
        "geocode": data1
      })
    })


app.get('/help',(req, res) => {

    res.render("help" ,{
        title: "Help",
    })
})
app.get('/*',(req, res) => {

    res.render("Page not Found")

})

app.listen(port, () => {
    console.log(`Server is  listening at http://localhost:${port}`);
  }); 