const body = document.querySelector(".body");

const edge = document.querySelector("#edge");

const reset = document.createElement("button");
reset.classList.add("resetB");
reset.textContent = "Reset"
body.insertBefore(reset, edge);


const gridSquare = document.createElement("div");
gridSquare.classList.add("square");

let numberOfSquares = 255;

function newGrid(squares) {
    let i = 0;
    let o = 0

    if (edge.querySelector(".square")) {
        while (edge.firstChild) {
            edge.removeChild(edge.firstChild);
        }
    };
        
    while (i <= numberOfSquares) {
  
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");

        gridSquare.addEventListener("mouseenter", (event) => {
            event.target.classList.add("squareMoused");    
            event.target.classList.remove("square"); 
            }
        );

        edge.appendChild(gridSquare);
        console.log(i);

        i++;
    };
};

window.addEventListener("load", newGrid(numberOfSquares));

reset.addEventListener("click", () =>{
    let newSquares;

    while(true) {
        let input = window.prompt("How many number of squares per side do you want in your grid?", "50");

        if (input === null) {
            return;
        };
        
        newSquares = Number(input);

        if (isNaN(newSquares)) {
            alert("Invalid input, choose between 0 and 100 per side", "50");
            console.log(newSquares);

        } else if(newSquares>100 || newSquares<0) {
            alert("Invalid input, choose between 0 and 100 per side", "50");
            console.log(newSquares);

        } else {
            console.log(`User selected ${newSquares} squares per side.`);

            numberOfSquares = newSquares;
            return newGrid(numberOfSquares);
        };
    };
});

