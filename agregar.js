import contactos from "./contactos.js";

const formulario=document.getElementById('formulario');

let personas=''


gustos.addEventListener('click',(e)=>{
    if(foto.value!=''){
        mostrar.src=foto.value
    }else{
        
    }
    
})

formulario.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(e.target)
    if(e.target.id=='agregar'){
        if(localStorage.getItem('contactos')==null){
            personas=[...contactos]
        }else{
            personas=JSON.parse(localStorage.getItem('contactos'))
        }
        let gust=(gustos.value).split(',')
        personas.push({nombre:nombre.value, apellido:apellido.value,numero:numero.value,gustos:gust,foto:foto.value})
        localStorage.setItem('contactos',JSON.stringify(personas))
        nombre.value=""
        numero.value=""
        apellido.value=""
        gustos.value="" 
        foto.value=""
        location.href="index.html"
    }else if(e.target.id=="cancelar"){
        location.href="index.html"
    }
   
    
}
    
    
    )