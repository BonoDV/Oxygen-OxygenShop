/* Cuando se cargue la página, hace una petición para que actalice la progressBar */

window.addEventListener('load', () => {
    const progress = document.getElementById('progress-bar__line');
    requestAnimationFrame(updateProgressBar);
})

/* Cuando se haga scroll, actualiza la progressBar */
/* Cantidad de píxeles scrolleados / (Alto total del body - Alto total de la ventana del buscador) * 100 */
function updateProgressBar() {
    const progress = document.getElementById('progress-bar__line');
    progress.style.width = `${window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100}%`;
    requestAnimationFrame(updateProgressBar); // Método que le dice al buscador que se ejecute cuando
    // actualice la pantalla.
}