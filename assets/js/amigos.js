const btnFoto = document.querySelectorAll('.cardImg')
console.log(btnFoto)

const funcZoom = (e)=>{
    e.target.classList.toggle('zoom') 
    console.log(e)
}

for(let i =0; i<btnFoto.length; i+=1){
    btnFoto[i].addEventListener('click', funcZoom);
    console.log(btnFoto[i])
}