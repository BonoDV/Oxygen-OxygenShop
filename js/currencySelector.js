async function currencySelected() {
    const currency = document.getElementById("section__cards__pricing__select");

    let firstPrice = document.getElementById("section__cards__pricing__first-card-pPrice");
    let secondPrice = document.getElementById("section__cards__pricing__second-card__pPrice");
    let thirdPrice = document.getElementById("section__cards__pricing__third-card__pPrice");

    const originalProfessionalPriceUSD = 25;
    const originalPremiumPriceUSD = 60;

    if (currency.value === "euro") {
        try {
            // Hacer la solicitud a la API
            const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json');

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Request failed!');
            }

            // Leer el cuerpo de la respuesta (usar await para obtener los datos)
            const data = await response.json();

            firstPrice.textContent = '0€';
            secondPrice.textContent = (originalProfessionalPriceUSD * data.eur.usd).toFixed(0) + '€';
            thirdPrice.textContent = (originalPremiumPriceUSD * data.eur.usd).toFixed(0) + '€';
        } catch (error) {
            console.error("Error fetching currency data:", error);
        }
    } else if (currency.value === "usd") {
        firstPrice.textContent = '$0';
        secondPrice.textContent = '$25';
        thirdPrice.textContent = '$60';
    } else {
        try {
            // Hacer la solicitud a la API
            const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json');

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Request failed!');
            }

            // Leer el cuerpo de la respuesta (usar await para obtener los datos)
            const data = await response.json();

            firstPrice.textContent = '0£';
            secondPrice.textContent = (originalProfessionalPriceUSD * data.eur.gbp).toFixed(0) + '£';
            thirdPrice.textContent = (originalPremiumPriceUSD * data.eur.gbp).toFixed(0) + '£';
        } catch (error) {
            console.error("Error fetching currency data:", error);
        }
    }
}
