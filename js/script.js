const contadorID = document.getElementById('contadorVisitas');
const btnClear = document.getElementById('btnReestablecer');

window.addEventListener('load', ()=>{
    let visitas = localStorage.getItem('Contador');
    visitas === null ? visitas = 1 : visitas = parseFloat(visitas) + 1;
    console.log(visitas);
    localStorage.setItem('Contador', visitas);
    contadorID.innerHTML = localStorage.getItem('Contador');
})

btnClear.addEventListener('click', ()=>{
    localStorage.setItem('Contador', 0);
    contadorID.innerHTML = localStorage.getItem('Contador');
})

/*   otra forma de controlar cargar la pagina
window.onload = ()=>{
    let visitas = localStorage.getItem('Contador');
    visitas === null ? visitas = 1 : visitas = parseFloat(visitas) + 1;
    console.log(visitas);
    localStorage.setItem('Contador', visitas);
    contadorID.innerHTML = localStorage.getItem('Contador');
}*/