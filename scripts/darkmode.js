
let botonDark = document.querySelector("#btn-dark")
let documentoPrincipal = document.querySelector("html")

function cambioMode(){
    documentoPrincipal.classList.toggle("dark")
}

botonDark.addEventListener("click", cambioMode)
