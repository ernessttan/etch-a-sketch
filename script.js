const pageGrid = document.getElementById("sketch-grid");


// Create Grid
makeGrid(16, 16);
function makeGrid(rows, cols) {
    for (let c = 0; c < (rows * cols); c++) {
        const cell = document.createElement("div");
        pageGrid.appendChild(cell);
        cell.setAttribute("class", "grid-cell")
    } 
}

function hoverFunction(e) {
    e.target.classList.add('hover-active');
}

let boxes = document.querySelectorAll('.grid-cell');
boxes.forEach(box => {
    box.addEventListener('mouseover', hoverFunction)
})





