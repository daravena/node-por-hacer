let fs = require('fs');
let listadoPorHacer = [];

const guardaDB = () => {
  // cargarDB();
  const dataToSave = JSON.stringify(listadoPorHacer);
  fs.writeFile('json/data.json', dataToSave, (error) => {
    if (error) throw new Error('no se pudo guardar', error)
  });

}


const cargarDB = () => {
  try {
    listadoPorHacer = require('../json/data.json');
  }
  catch (error) {
    console.log('archivo vacio: ', error);
    listadoPorHacer = [];
  }


  //console.log(dataDB);
  // return dataDB;
}
const getListado = () => {
  cargarDB();
  return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardaDB();
    return true
  }
  else {
    return false;
  }
}

const borrar = (descripcion) => {
  cargarDB();
  let nuevoListado = listadoPorHacer.filter(tarea => { return tarea.descripcion !== descripcion })
  console.log(nuevoListado)
  if (listadoPorHacer.length === nuevoListado) {
    return false;
  }
  else {
    listadoPorHacer = nuevoListado;
    guardaDB();
    return true;
  }
}
const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  }

  listadoPorHacer.push(porHacer);
  guardaDB();
  return porHacer;
}


module.exports = { crear, guardaDB, getListado, actualizar, borrar }