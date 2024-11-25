const body = document.querySelector(".body");

const edge = document.querySelector("#edge");

const rainbow = document.createElement("button");
rainbow.classList.add("rainbowB");
rainbow.textContent = "Toggle rainbow mode";
body.insertBefore(rainbow, edge);

const reset = document.createElement("button");
reset.classList.add("resetB");
reset.textContent = "Press to set Grid"
body.insertBefore(reset, rainbow);

const h1 = document.createElement("h1");
h1.textContent= "Etch-a-Sketch! Hover over the grey area!";
h1.classList.add("topic");
body.insertBefore(h1,reset);

const gridSquare = document.createElement("div");
gridSquare.classList.add("square");

let numberOfSquares = 256;

let isRainbowMode = false;

function newGrid(numberOfSquares, newSquareSize) {

    // If the edge has custom squares or original squares in them, remove them and add custom squares.
    if (edge.querySelector(".square") || edge.querySelector(".squareMoused") || edge.querySelector(".customSquare") || edge.querySelector(".customSquareMoused")) {
        while (edge.firstChild) {
            edge.removeChild(edge.firstChild);
        };

        let i = 0;
        while (i < numberOfSquares) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("customSquare");
            gridSquare.setAttribute("style", `width: ${newSquareSize}px; height: ${newSquareSize}px;`);
            gridSquare.addEventListener("mouseenter", (event) => {
                if (isRainbowMode) {
                    let r = getRandomIntInclusive(0, 255);
                    let g = getRandomIntInclusive(0, 255);
                    let b = getRandomIntInclusive(0, 255);
                    event.target.classList.add("customSquareMoused");
                    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
                    event.target.classList.remove("customSquare");

                    setTimeout(() => {
                        event.target.classList.add("customSquare");
                        event.target.style.backgroundColor = "";
                        event.target.classList.remove("customSquareMoused");
                    }, 1000);

                } else {
                event.target.classList.add("customSquareMoused");
                event.target.classList.remove("customSquare");
                setTimeout(() => {
                    event.target.classList.add("customSquare");
                    event.target.classList.remove("customSquareMoused");
                }, 1000);

                };
            });
    
            edge.appendChild(gridSquare);
    
            i++;
        };
        // If edge doesn't have squares inside, create the preset 16x16 square grid.
        } else {

            let i = 0; 
            while (i < numberOfSquares) {
  
                const gridSquare = document.createElement("div");
                gridSquare.classList.add("square");
                gridSquare.addEventListener("mouseenter", (event) => {
                    if (isRainbowMode) {
                        let r = getRandomIntInclusive(0, 255);
                        let g = getRandomIntInclusive(0, 255);
                        let b = getRandomIntInclusive(0, 255);
                        event.target.classList.add("squareMoused");
                        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
                        event.target.classList.remove("square");
                        setTimeout(() => {
                            event.target.classList.add("square");
                            event.target.style.backgroundColor = "";
                            event.target.classList.remove("squareMoused");
    
                        }, 1000);

                    } else {
                    event.target.classList.add("squareMoused");
                    event.target.classList.remove("square");
                    setTimeout(() => {
                        event.target.classList.add("square");
                        event.target.classList.remove("squareMoused");
                    }, 1000);

                    };
                    
            });
            
            edge.appendChild(gridSquare);

            i++;
            };
        };
};

window.addEventListener("load", newGrid(numberOfSquares));

let newSquares;

reset.addEventListener("click", () =>{


    while(true) {
        let input = window.prompt("How many number of squares per side do you want in your grid?", "50");

        if (input === null) {
            return;
        };
        
        newSquares = Number(input);

        if (isNaN(newSquares)) {
            alert("Invalid input, choose between 0 and 100 per side", "50");

        } else if(newSquares>100 || newSquares<0) {
            alert("Invalid input, choose between 0 and 100 per side", "50");

        } else {
            console.log(`User selected ${newSquares} squares per side.`);

            numberOfSquares = (newSquares * newSquares);
            let newSquareSize = (480 / newSquares);
            console.log(newSquareSize);
            return newGrid(numberOfSquares, newSquareSize);
        };
    };
});

rainbow.addEventListener("click", () =>{
    isRainbowMode = !isRainbowMode;
    rainbow.textContent = isRainbowMode ? "Disable Rainbow Mode" : "Enable Rainbow Mode";
    body.style.backgroundColor = isRainbowMode ? `rgb(46, 46, 46)` : "";
    h1.style.color = isRainbowMode ? `rgb(255, 255, 255)` : "";
});


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};
