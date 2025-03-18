function toWait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function returnTop() {
    await toWait(200);
    window.scrollTo(0, 0);
}