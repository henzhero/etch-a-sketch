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

        let getRandomColor = () => {
            const hex = "0123456789ABCDEF"
            let color = "#";
            
            for (let i = 0; i < 6; i++) {
                color += hex[Math.floor(Math.random() * 16)];
            }   
        
            return color;
        }
            
        e.target.style.backgroundColor = getRandomColor();
    }
})

createGrid(16);