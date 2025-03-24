const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div"); // Crée un div
    square.classList.add("square"); // Ajoute la classe CSS
    container.appendChild(square); // Ajoute le div dans le container
}