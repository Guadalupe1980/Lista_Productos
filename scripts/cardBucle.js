/* LLAMADO DE API */
async function traerDatos() {
  try {
    let response = await fetch("/data.json");
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Algo salio mal", error);
  }
}

let cardProductos = await traerDatos();
console.log(cardProductos);

/* CARD DE MIS PRODUCTOS */
let cajaProducto = document.querySelector("#content-tarjeta");

function mostrarProductos(gruposProductos){
for (let i = 0; i < gruposProductos.length; i++) { 
  // y le quitamos el punto del inicio para que quede pública ("/assets/...")
  let rutaImagenCorrecta = gruposProductos[i].image.mobile.replace('./', '/');
  cajaProducto.innerHTML += `
    <div class="flex flex-col gap-1 mb-5 p-3 rounded-md shadow dark:border dark:border-gray-400 ">
      <div class="w-full h-56 relative mb-4">
        <img src="${gruposProductos[i].image.mobile}" alt="imagen de ${gruposProductos[i].name}" class="rounded-md w-full h-full object-cover">
        
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <button class="bg-white border border-stone-300 rounded-full py-2 px-5 flex items-center gap-2 shadow-sm whitespace-nowrap">
            <img src="./assets/images/icon-add-to-cart.svg" alt="" class="w-4 h-4">
            <span class="text-xs font-medium text-stone-800 tracking-wide">Add to Cart</span>
          </button> 
        </div>

      </div>

      <span class="text-gray-400 font-normal text-sm mt-6">${gruposProductos[i].category}</span>
      <h1 class="text-black font-medium">${gruposProductos[i].name}</h1>
      <p class="text-red-700 font-bold mb-4">$${gruposProductos[i].price.toFixed(2)}</p>
    </div>
  `;
}
}

mostrarProductos(cardProductos)

export{cardProductos, cajaProducto, mostrarProductos}