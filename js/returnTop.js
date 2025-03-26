function toWait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function returnTop() {
    await toWait(200);
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}