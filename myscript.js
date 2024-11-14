const body = document.querySelector(".body");

const edge = document.querySelector("#edge");

const reset = document.createElement("button");
reset.classList.add("resetB");
reset.textContent = "Reset"
body.insertBefore(reset, edge);


const gridSquare = document.createElement("div");
gridSquare.classList.add("square");

window.addEventListener("load", () => {let i = 0;
    let numberOfSquares = 255;
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
});

//eventlistener with  a window prompt (type number). The answer goes into a a conditional that makes sure the number is under 100 and then creates that many squares in the edge. 
