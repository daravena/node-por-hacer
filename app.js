// const argv = require('yargs').argv;
const { argv } = require('./configs/yargs');
const porHacer = require('./por-hacer/por-hacer');
const { crear } = require('./por-hacer/por-hacer');
let comando = argv._[0];
console.log('argv:.', argv.descripcion)

switch (comando) {
  case 'crear':
    let data = porHacer.crear(argv.descripcion);
    console.log(data)
    console.log('crear');
    break;
  case 'listar':
    const tareas = porHacer.getListado();
    console.log('listar', porHacer.getListado());
    for (let tarea of tareas) {
      console.log('================ POR HACER ===================')
      console.log('tarea = ', tarea.descripcion)
      console.log('estado = ', tarea.completado)
      console.log('==============================================')

    }
    break;
  case 'actualizar':
    const actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log('actualizar=', actualizar);
  case 'borrar':
    const borrar = porHacer.borrar(argv.descripcion);
    console.log('borrar=', borrar);
}