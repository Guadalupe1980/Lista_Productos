
import { cardProductos, cajaProducto, mostrarProductos } from "./cardBucle.js";


let busquedaPr = document.querySelector("#buscarProductos") //PASO 1: Mmandamos a llamar el id del input
let selecCategoria = document.querySelector("#selectCakes") //PASO 1:S: mandamos a llamar el id del select 

/*  PASO 3: Declaramos un evento/accion */
busquedaPr.addEventListener("input", filtroCake)
selecCategoria.addEventListener("change", filtroCake) 
//verificacion del evento  () => {console.log( busquedaPr.value.toLowerCase())}

/*PASO 2: Creamos una funcion que almacene la variable textcake y la categryPr*/
function filtroCake(){
    let textoCake = busquedaPr.value.toLowerCase() // almacena la accion del buscador
    let categoryPr = selecCategoria.value // Paso 2:S: creamos una variable para mi interaccion
    let cakesfilter = cardProductos; // PASO 4: creamos una variable global

    // PASO 4:S: creamos una condicion para el cambio distinto de todas y definimos el filtro
    if(categoryPr !== "Todas"){
        cakesfilter = cakesfilter.filter(cake => cake.category === categoryPr) //Filtra las categorias por producto
    }

    //PASO 5: Creamos el filtro de los nombres de los productos
    cakesfilter = cakesfilter.filter(cake => cake.name.toLowerCase().includes(textoCake)) //filtro de los nombres de los postres

    cajaProducto.innerHTML = "" // limpiador de las cajas
    mostrarProductos(cakesfilter); //mandamos a llamar la funcion que contiene las card de los productos
}

filtroCake()

