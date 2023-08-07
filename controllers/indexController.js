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
  
    return res.status(404).send('Película no encontrada');
  }

  res.render('pelicula_detalle', { pelicula });
};
