function validForm() {
    const nameValue = document.forms["contactForm"]["name"].value;
    const emailValue = document.forms["contactForm"]["email"].value;
    const checkBoxValue = document.forms["contactForm"]["checkBox"].checked;
    // Regex for email validation
    const nameRegex = /^(.{2,100})$/;
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    let nameBool = false;
    let emailBool = false;
    let checkBoxBool = false;

    if (nameValue === "" || nameRegex.test(nameValue) === false) {
        document.getElementById("name").style.borderBottom = '1px solid red';
        document.getElementById("section__contact__div__form__errorTextName").style.display = 'block'
        document.getElementById("section__contact__div__form__button").disabled = true;
        nameBool = false;
    } else {
        document.getElementById("name").style.borderBottom = '1px solid #95989A';
        document.getElementById("section__contact__div__form__errorTextName").style.display = 'none'
        nameBool = true;

    }
    if (emailValue === "" || emailRegex.test(emailValue) === false) {
        document.getElementById("email").style.borderBottom = '1px solid red';
        document.getElementById("section__contact__div__form__errorTextEmail").style.display = 'block'
        document.getElementById("section__contact__div__form__button").disabled = true;
        emailBool = false;
    } else {
        document.getElementById("email").style.borderBottom = '1px solid #95989A';
        document.getElementById("section__contact__div__form__errorTextEmail").style.display = 'none';
        emailBool = true;
    }
    if (checkBoxValue === false) {
        document.getElementById("section__contact__div__form__checkBox").style.border = '1px solid red';
        document.getElementById("section__contact__div__form__button").disabled = true;
        document.getElementById("section__contact__div__form__button").disabled = true;
        checkBoxBool = false;
    } else {
        document.getElementById("section__contact__div__form__checkBox").style.border = '1px solid #95989A';
        checkBoxBool = true;
    }

    if (nameBool === true && emailBool === true && checkBoxBool === true) {
        document.getElementById("section__contact__div__form__button").disabled = false;
    } else {
        document.getElementById("section__contact__div__form__button").disabled = true;
    }



}