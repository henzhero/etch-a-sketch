const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // square.addEventListener("mouseover", (e) => {
        //     square.style.backgroundColor = "pink";
        // })

        container.appendChild(square);
    }
}

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
        e.target.classList.toggle("change");
    }
})