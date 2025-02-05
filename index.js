const mainContainer = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.height = "30px";
        square.style.width = "30px";
        square.style.backgroundColor = "lightblue";
        square.style.border = "1px solid black"

        mainContainer.appendChild(square);
    }
}
