async function sendDataToAPI() {
    let messageSent = document.getElementById("section__contact__div__form__sentStatus");
    try {
        // Recopilar datos del formulario
        let nameForm = document.getElementById("name");
        let emailForm = document.getElementById("email");
        let checkBoxForm = document.getElementById("section__contact__div__form__checkBox");

        // Enviar datos a la API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: nameForm,
                email: emailForm,
                checked: checkBoxForm,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        // Verificar si la respuesta es exitosa (código 200-299)
        if (!response.ok) {
            messageSent.style.color = "red";
            messageSent.textContent = 'Error. Please try again.'
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);

        } else {
            messageSent.style.color = "green";
            messageSent.textContent = 'Data sent succesfully.'
            nameForm.value = "";
            emailForm.value = "";
            checkBoxForm.checked = false;
        }

    } catch (error) {
        // Capturar y mostrar errores
        messageSent.textContent = 'Error. Please try again.'
        messageSent.style.color = "red";
    }
}