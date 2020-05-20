const btnNoGusta = document.querySelectorAll('.icDislike')
console.log(btnNoGusta)

const funcLike = (e)=>{
    e.target.classList.toggle('mostrar') 
    console.log(e)  
}

for(let i =0; i<btnNoGusta.length; i+=1){
    btnNoGusta[i].addEventListener('click', funcLike);
    console.log(btnNoGusta[i])
}


// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });