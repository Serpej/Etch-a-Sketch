const body = document.querySelector(".body");

const edge = document.querySelector("#edge");

const reset = document.createElement("button");
reset.classList.add("resetB");
reset.textContent = "Reset"
body.insertBefore(reset, edge);

const gridSquare = document.createElement("div");
gridSquare.classList.add("square");

let numberOfSquares = 256;

function newGrid(numberOfSquares, newSquareSize) {

    if (edge.querySelector(".square") || edge.querySelector(".squareMoused")) {
        while (edge.firstChild) {
            edge.removeChild(edge.firstChild);
        }
    };

    let i = 0; 
    while (i < numberOfSquares) {
  
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        gridSquare.setAttribute("styles", `width: ${newSquareSize}; height: ${newSquareSize};`)

        gridSquare.addEventListener("mouseenter", (event) => {
            event.target.classList.add("squareMoused");    
            event.target.classList.remove("square"); 
            }
        );

        edge.appendChild(gridSquare);

        i++;
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
            let newSquareSize = (960 / newSquares);
            console.log(newSquareSize);
            return newGrid(numberOfSquares, newSquareSize);
        };
    };
});

