const peliculasData = require('../data/products.json');

exports.index = (req, res) => {
  return res.render('index', {
    peliculas: peliculasData,
  });
};

exports.mostrarPeliculaDetalle = (req, res) => {
  const peliculaId = parseInt(req.params.id);
  const pelicula = peliculasData.find((pelicula) => pelicula.id === peliculaId); 

  if (!pelicula) {
    // Si la película no se encuentra, mostrar un mensaje de error o redireccionar a una página de error
    return res.status(404).send('Película no encontrada');
  }

  res.render('pelicula_detalle', { pelicula });
};
