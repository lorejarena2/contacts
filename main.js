import contactos from "./contactos.js";

const buscar=document.getElementById('buscar'); 
const agregar=document.getElementById('agregar');
var select = document.getElementById('cri');
var mostrar=document.getElementById('resultado');
var nombre=document.getElementById('nom');
var imagen=document.getElementById('imagen');
const cinta=document.querySelector('.cinta')

let contac=''
let guardar=""



if(localStorage.getItem('contactos')!=null){
    contac=JSON.parse(localStorage.getItem('contactos'))
    console.log(contac)
}else{
    contac=contactos
    console.log(contac)
}

contac.forEach(contacto=>{
    cinta.innerHTML+=`
    <div class="img_cinta">
            <img src="${contacto.foto}" alt="">
        </div>
    `
})

agregar.addEventListener('click',()=>{
    location.href="añadir.html"
})

nombre.addEventListener("focus", myFocusFunction, true)

function myFocusFunction() {
  nom.value=""
  imagen.src="https://static.vecteezy.com/system/resources/previews/012/742/173/non_2x/unknow-person-icon-free-vector.jpg"
  mostrar.textContent=""
  select.value="vacio"
  }



buscar.addEventListener('click',()=>{
if(contac.find(contactos =>contactos.nombre==nom.value)){
    const indice=contac.findIndex(contactos=>contactos.nombre==nom.value)
    var selectedOption = select.options[select.selectedIndex].value;
        if(selectedOption=='apellido'){
            guardar=contac[indice].apellido
            mostrar.textContent= 'Apellido: '+guardar;
            imagen.src=contac[indice].foto
        }
        if(selectedOption=='numero'){
            guardar=contac[indice].numero
            mostrar.textContent='Numero: '+guardar;
            imagen.src=contac[indice].foto
        }
        if(selectedOption=='gustos'){
            guardar=contac[indice].gustos
            mostrar.textContent='Gustos: '+guardar;
            imagen.src=contac[indice].foto
        }
        if(selectedOption=='vacio'){
            imagen.src=contac[indice].foto
            document.querySelector('.resultado').innerHTML= 
            `
                <p>
                    Nombre: ${contac[indice].nombre}
                </p>
                <p>
                    Apellido: ${contac[indice].apellido}
                </p>
                <p>
                    Numero: ${contac[indice].numero}
                </p>
                <p>
                    Gustos: ${contac[indice].gustos}
                </p>
                `
        }
        
}else{
    console.log('no es')
}
})



