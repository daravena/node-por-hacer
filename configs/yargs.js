const descripcion = {
  demand: true,
  alias: 'd'
};

const optsCrear = {
  descripcion
}

const optsBorrar = {
  descripcion
}

const optsActualizar = {
  descripcion,
  completado: {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea'
  }
}

const argv = require('yargs')
  .command('crear', 'Crear un elemento por hacer', optsCrear)
  .command('actualizar', 'actualiza el estado completado de una tarea', optsActualizar)
  .command('borrar', 'borrar elemento del listado', optsBorrar)

  .help()
  .argv;

  module.exports = { argv }