let boton=document.querySelector('#boton1')
let cont=1
boton.addEventListener('click', ()=>{
    targeta.innerHTML+=`<div class="targeta0 id=targeta0">
       <h3 id=targeta > TARGETA ${cont}</h3>
        <p>lorem ipsun dolor sit amet, consetetus adipisicing elit.</p>
        <button onclick='eliminar(this)' id="delete"> BORRAR </button>
    </div>`
    cont++
})

function eliminar(e){
    e.parentNode.remove(e.parentNode)
}


let targeta=document.getElementById('targetas')