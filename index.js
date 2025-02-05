const container = document.querySelector("#container");
const button = document.querySelector("#button");
let input;

button.addEventListener("click", () => {
    input = parseInt(prompt("How many squares? (<num> x <num>)"));

    if (input == NaN || input > 100) {
        alert("Please choose numbers 1-100 only!");
    }

    createGrid(input);
})

function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");

            container.appendChild(square);
        }
    }
}

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        e.target.classList.toggle("change");
    }
})

createGrid(16);