// Variables
const dialogo = document.getElementById('modal-reserva');
const botonAbrir = document.getElementById('abrir-reserva');
const botonCerrar = document.getElementById('cerrar-reserva');

// Abrir
botonAbrir.addEventListener('click', () => {
    dialogo.showModal();
});

// Cerrar
botonCerrar.addEventListener('click', () => {
    dialogo.close();
});