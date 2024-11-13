const edge = document.querySelector("#edge");

const reset = document.createElement("button");
reset.classList.add("resetB");
reset.textContent = "Reset"
edge.appendChild(reset);
//eventlistener with  a window prompt (type number). The answer goes into a a conditional that makes sure the number is under 100 and then creates that many squares in the edge. 


const gridSquare = document.createElement("div");
gridSquare.classList.add("square");
//eventlistener on load to create 256 squares in a flexbox grid.