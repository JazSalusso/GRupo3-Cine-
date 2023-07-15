const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

//Middleware
app.use(express.static('public'));

//Rutas

app.get('/', (req, res) => {
    res.redirect('/api');
  });

app.get('/api',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "home.html"))
})

app.get('/api/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "carrito.html"))
})

app.get('/api/detalle',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "detalle.html"))
})

app.get('/api/login',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "login.html"))
})

app.get('/api/register',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "register.html"))
})

app.get('/api/carga',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "carga.html"))
})


//Server Config

app.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})



