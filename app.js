const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

//Middleware
app.use(express.static('public'));

//Rutas

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "home.html"))
})

app.get('/carrito',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "carrito.html"))
})

app.get('/detalle',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "detalle.html"))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "login.html"))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "register.html"))
})

app.get('/carga',(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "carga.html"))
})

//rutas para header y footer.html de prueba

app.get('/header', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "partials", "header.html"));
  });
  
  app.get('/footer', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "partials", "footer.html"));
  });

//Server Config

app.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})



