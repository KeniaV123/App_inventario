var v1 = [];
var lista = document.querySelector("#listar");

class Producto {
  constructor(codigo, nombre, descripcion, cantidad, costo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.costo = costo;
  }

  valorTotalM() {
    let cantidad = this.cantidad;
    let costo = this.costo;
    let valor = cantidad * costo;
    return valor;
  }

  articleToHtml() {
    let productString = '<li class="list-group-item">';
    for (let key in this) {
      productString += `<br><strong>${key}:</strong> ${this[key]}`;
    }
    let valor_string = `<br><strong>Valor total mercancia:</strong> ${this.valorTotalM()}`;
    return productString + valor_string + "</li>";
  }
}
  
class Inventario{
  agregarProduct(nombre) {
    if (v1.length >= 20) {
      return ;
    } else {
      v1.push(nombre);
      this.listar();
      document.getElementById("form1").reset();
      return
    }
  }
  
  borrarProduct(productBorrar) {
    for (let i = 0; i < v1.length; i++) {
      if (productBorrar == v1[i].codigo) {
        let borrar = v1[i].nombre;
        v1[i] = null;
        borrarProducto.value = " ";
        this.listar();
        document.getElementById("form2").reset();
        return borrar;
      }
    }
  }
  
  buscarProduct(productBuscar) {
    for (let i = 0; i < v1.length; i++) {
      if (productBuscar == v1[i].codigo) {
        lista.innerHTML = v1[i].articleToHtml();
        document.getElementById("form3").reset();
        return v1[i].nombre;
      }
    }
  }
  
  listar() {
    lista.innerHTML = "";
    for (let i = 0; i < v1.length; i++) {
      if (v1[i]) {
        lista.innerHTML += v1[i].articleToHtml();
      }
    }
  }
  
  listarInvertido() {
    lista.innerHTML = "";
    for (let i = v1.length - 1; i >= 0; i--) {
      if (v1[i]) {
        lista.innerHTML += v1[i].articleToHtml();
      }
    }
  }
}

let inventario = new Inventario();

var botonAgregar = document.querySelector('#botonAgregar');
botonAgregar.addEventListener("click", () => {
  let codigoP = document.querySelector('#codigoP');
  let nombreP = document.querySelector('#nombreP');
  let descripcionP = document.querySelector('#descripcionP');
  let cantidadP = document.querySelector('#cantidadP');
  let costoP = document.querySelector('#costoP');
  let productoNuevo = new Producto(codigoP.value, nombreP.value, descripcionP.value, cantidadP.value, costoP.value);
  inventario.agregarProduct(productoNuevo);
});                     

var botonBorrar = document.querySelector('#botonBorrar');
botonBorrar.addEventListener("click", () => {
  let borrarProducto = document.querySelector("#borrarProducto");
  inventario.borrarProduct(borrarProducto.value);
    
});
  
var botonBuscar = document.querySelector('#botonBuscar');
botonBuscar.addEventListener("click", () => {
  var buscarProducto = document.querySelector("#buscarProducto");
  inventario.buscarProduct(buscarProducto.value); 
});
  
var botonListar = document.querySelector('#botonListar');
botonListar.addEventListener("click", () => {
  inventario.listar();
});
  
var botonListarIn = document.querySelector('#botonListarIn');
botonListarIn.addEventListener("click", () => {
  inventario.listarInvertido();
});