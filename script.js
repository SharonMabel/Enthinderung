document.addEventListener("DOMContentLoaded", () => {
    console.log("Webseite geladen. Bereit für Inhalte!");
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});