
let modalOpened = false;

function onTwentyFivePercentScroll() {
    // Función que se ejecuta cada vez que se hace scroll
    function handleScroll() {
        // Calcula la altura total desplazable
        const scrollableHeight = document.body.scrollHeight - window.innerHeight;

        // Calcula el 25% de la altura desplazable
        const twentyFivePercent = scrollableHeight * 0.25;

        // Verifica si el usuario ha scrolleado al menos un 25%
        if (window.scrollY >= twentyFivePercent && !modalOpened) {
            openModal();
            // Elimina el event listener para que no se siga ejecutando
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Función que abre el modal después de 5 segundos
    function handleSeconds() {
        setTimeout(() => {
            if (!modalOpened) {
                openModal();
            }
        }, 5000); // 5000 milisegundos = 5 segundos
    }

    // Función para abrir el modal
    function openModal() {
        if (sessionStorage.getItem("modalOpened") !== 'true') {
            const modalNewsletter = document.getElementById("newsletter__modal");
            modalOpened = true; // Actualiza el estado del modal
            modalNewsletter.showModal();
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;

            // Event listener para cerrar el modal al hacer clic fuera
            modalNewsletter.addEventListener('click', (event) => {
                const rect = modalNewsletter.getBoundingClientRect();

                // Verifica si el clic ocurrió fuera del modal
                if (
                    event.clientX < rect.left ||
                    event.clientX > rect.right ||
                    event.clientY < rect.top ||
                    event.clientY > rect.bottom
                ) {
                    closeModal(); // Cierra el modal
                }
            });
        }
    }

    // Ejecuta las funciones
    handleSeconds(); // Inicia el temporizador de 5 segundos
    window.addEventListener('scroll', handleScroll); // Escucha el evento de scroll





    // Cerrar el modal al presionar ESC
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });

}
/* Cierres del modal */
function closeModal() {
    const modalNewsletter = document.getElementById("newsletter__modal");
    modalOpened = false;
    modalNewsletter.close();
    document.body.style.position = '';
    document.body.style.top = '';
    sessionStorage.setItem("modalOpened", "true"); // Marca el modal como abierto en sessionStorage
}
async function sendData() {
    let messageSent = document.getElementById("newsletter__modal__text");
    try {
        // Recopilar datos del formulario
        let emailForm = document.getElementById("newsletter__modal__email");

        // Enviar datos a la API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                email: emailForm, // Corregido: usar .value para obtener el valor del input
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        // Verificar si la respuesta es exitosa (código 200-299)
        if (!response.ok) {
            messageSent.style.color = "red";
            messageSent.textContent = 'Error. Please try again.';
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        } else {
            messageSent.style.color = "green";
            messageSent.textContent = 'Thanks for suscribe!';
            emailForm.value = ""; // Limpiar el campo de email
        }
    } catch (error) {
        // Capturar y mostrar errores
        messageSent.textContent = 'Error. Please try again.';
        messageSent.style.color = "red";
    }
}

// Verificación de email
function emailVerification() {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    const email = document.getElementById("newsletter__modal__email").value;
    const buttonStatus = document.getElementById("newsletter__modal_sendButton");

    if (email !== "" && emailRegex.test(email) !== false) {
        buttonStatus.disabled = false;
    } else {
        buttonStatus.disabled = true;
    }
}

// Inicia la función principal
onTwentyFivePercentScroll();
