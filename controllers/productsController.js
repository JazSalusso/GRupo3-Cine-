const fs = require('fs');
const products = require('../data/products.json');

module.exports = {

  cargarMostrar: (req, res) => {
    res.render('cargar');
  },

  cargar: (req, res) => {
    const nombre = req.body.nombre;
    const fecha = req.body.fecha;
    const duracion = req.body.duracion;
    const actores = req.body.actores;
    const director = req.body.director;
    const precio = req.body.precio;
    const genero = req.body.genero;
    const edades = req.body.edades;
    const sinopsis = req.body.sinopsis;

    const nuevoProducto = {
      nombre: nombre,
      fecha: fecha,
      duracion: duracion,
      actores: actores,
      director: director,
      precio: precio,
      genero: genero,
      edades: edades,
      sinopsis: sinopsis,
    };


    products.push(nuevoProducto);

    fs.writeFileSync('data/products.json', JSON.stringify(products, null, 2));

    res.redirect('/products/cargar');
  },


  editarMostrar: (req, res) => {
    res.render('editar', { peliculas: products })
  },

  editar: (req, res) => {

    res.render('editar', { peliculas: products })
    const { nombre, nuevoNombre, fecha, duracion, actores, director, precio, genero, edades, sinopsis } = req.body;

    if (nombre !== nuevoNombre && products.some((pelicula) => pelicula.nombre === nuevoNombre)) {
      return res.status(400).json({ error: 'Ya existe otra película con ese nombre.' });
    }

    const peliculaAEditar = products.find((pelicula) => pelicula.nombre === nombre);


    if (!peliculaAEditar) {
      return res.status(404).json({ error: 'Película no encontrada.' });
    }

    peliculaAEditar.nombre = nuevoNombre;
    peliculaAEditar.fecha = fecha;
    peliculaAEditar.duracion = duracion;
    peliculaAEditar.actores = actores;
    peliculaAEditar.director = director;
    peliculaAEditar.precio = precio;
    peliculaAEditar.genero = genero;
    peliculaAEditar.edades = edades;
    peliculaAEditar.sinopsis = sinopsis;


    fs.writeFileSync('data/products.json', JSON.stringify(products, null, 2));
    res.redirect('/products/editar');

  },

  carrito: (req, res) => {
    res.render("carrito")
  },

  detalle: (req, res) => {
    res.render("detalle")
  }
};
