// Primer botón
let btn_inscrip= document.querySelector('.btn_inscrip');
// Modal
const modal = document.getElementById('modal');
const modal_container= document.getElementById('modal_container');
const input = document.getElementById('input');
// Aceptar
const aceptar = document.getElementById('aceptar');

// Abrir Modal
btn_inscrip.addEventListener('click', ()=>{
    modal.classList.add('modal_show');
})
// Validación de nombre
aceptar.addEventListener('click', ()=>{
    let equipo = input.value;
    equipo = equipo.charAt(0).toUpperCase() + equipo.slice(1).toLowerCase();
    if(equipo){
        modal_container.innerHTML= `
        <h3>Mucha suerte!! ${equipo} </h3>
        <a class="jugar">Jugar</a>
        `;
        // captura el botón recién creado.
        const jugar = document.querySelector('.jugar');
        jugar.addEventListener('click', ()=>{
            modal.classList.remove('modal_show');
            location.href="../pages/jugar.html";
        });
        
    }
})



