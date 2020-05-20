/* AGREGAR CLASE */

const eLatido = document.querySelector('#logHeader');
console.log(eLatido)

const funcLatido = (e) => {

    e.target.classList.toggle('latido') //definir evento ¿qué se va a hacer al dar click?

}

eLatido.addEventListener('click', funcLatido);

/* for (let i = 0; i < eLatido.length; i += 1) {
    console.log(eLatido[i])
}
 */


 /* Cambiar Clase */

 function cambiarClase(){
    let contMenu = document.getElementById('contMenu');
        contMenu.classList.toggle('contMenuOpen');
    let menuToggle = document.getElementById('menuToggle');
        menuToggle.classList.toggle('menuOpen');    
        
}