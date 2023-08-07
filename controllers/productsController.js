const fs = require('fs');
const products = require('../data/products.json');

module.exports = {
    cargar: (req, res) => {

        res.render('cargar');

        const nombre = req.body.nombre;
        const fecha = req.body.fecha;
        const duracion = req.body.duracion;
        const actores = req.body.actores;
        const director = req.body.director;
        const precio = req.body.precio;
        const genero = req.body.genero;
        const edades = req.body.edades;
        const sinopsis = req.body.sinopsis;

        // Crear un objeto con los datos
        const nuevoProducto = {
            nombre: nombre,
            fecha: fecha,
            duracion: duracion,
            actores: actores,
            director: director,
            precio: precio,
            genero:genero,
            edades:edades,
            sinopsis:sinopsis,
        };

        // Agregar el nuevo producto al arreglo de productos
        products.push(nuevoProducto);
        
        // Guardar los datos actualizados en el archivo JSON
        fs.writeFileSync('data/products.json', JSON.stringify(products, null, 2));

        res.redirect('/products/carga');
    },

    editar: (req, res) => {

        res.render('editar', {peliculas:products})
        const { nombre, nuevoNombre, fecha, duracion, actores, director, precio, genero, edades, sinopsis } = req.body;
    
        // Verificar si ya existe otra película con el nuevo nombre
        if (nombre !== nuevoNombre && products.some((pelicula) => pelicula.nombre === nuevoNombre)) {
          return res.status(400).json({ error: 'Ya existe otra película con ese nombre.' });
        }
    
        // Buscar la película a editar por su nombre actual
        const peliculaAEditar = products.find((pelicula) => pelicula.nombre === nombre);
    
        // Verificar si la película existe
        if (!peliculaAEditar) {
          return res.status(404).json({ error: 'Película no encontrada.' });
        }
    
        // Actualizar los campos de la película con los valores del formulario
        peliculaAEditar.nombre = nuevoNombre;
        peliculaAEditar.fecha = fecha;
        peliculaAEditar.duracion = duracion;
        peliculaAEditar.actores = actores;
        peliculaAEditar.director = director;
        peliculaAEditar.precio = precio;
        peliculaAEditar.genero = genero;
        peliculaAEditar.edades = edades;
        peliculaAEditar.sinopsis = sinopsis;
    
        // Guardar los datos actualizados en el archivo JSON
        fs.writeFileSync('data/products.json', JSON.stringify(products, null, 2));
    
        // Redireccionar a la página de edición (o cualquier otra página que desees)
        res.redirect('/products/editar');
        res.redirect('/products/editar');

      }
};
