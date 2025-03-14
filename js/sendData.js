async function sendDataToAPI() {

    try {
        // Recopilar datos del formulario
        const nameValue = document.forms["contactForm"]["name"].value;
        const emailValue = document.forms["contactForm"]["email"].value;
        const checkBoxValue = document.forms["contactForm"]["checkBox"].checked;

        // Enviar datos a la API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: nameValue,
                email: emailValue,
                checked: checkBoxValue,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        // Verificar si la respuesta es exitosa (código 200-299)
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        } else {
            alert(`Datos enviados`);
        }

    } catch (error) {
        // Capturar y mostrar errores
        alert(`Hubo un error: ${error.message}. Inténtelo de nuevo.`);
    }
}