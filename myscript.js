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

reset.addEventListener("click", () =>{
    let newSquares = Number(window.prompt("How many number of squares per side do you want in your grid?", "50"));
        
        if(newSquares>100 || newSquares<0) {
            let newSquares = Number(window.prompt("Invalid input, choose between 0 and 100 per side", "50"));
            console.log(newSquares);
            //use continue here?

        } else if (newSquares == NaN) {
            let newSquares = Number(window.prompt("Invalid input, choose between 0 and 100 per side", "50"));
            console.log(newSquares);
            //use continue here?}
        
        } else {console.log(newSquares); return newSquares};
});

