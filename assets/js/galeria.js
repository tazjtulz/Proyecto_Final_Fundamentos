const btnNoGusta = document.querySelector('.icDislike');
console.log(btnNoGusta)


btnNoGusta.addEventListener('click', ()=>{
 

    if (btnNoGusta.className == "mostrar") {
        
        btnNoGusta.classList.toggle('mostrar')

                        
    } else {
        btnNoGusta.classList.toggle('mostrar')
          
    }
})
