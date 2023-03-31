const menuBtn = document.getElementById("menuBtn"); //const es constante, algo que no cambia
const aside = document.querySelector("aside"); //dos formas de seleccionar


menuBtn.addEventListener("click", function() { //indica que a la hora de clickear se ejecuta una funcion 

    aside.classList.toggle("active"); 
})