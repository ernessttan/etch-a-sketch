

// Create Grid
function makeGrid(rows, cols) {
    for (let c = 0; c < (rows * cols); c++) {
        const pageGrid = document.getElementById("page-grid");
        const cell = document.createElement("div");
        pageGrid.appendChild(cell);
        cell.setAttribute("class", "grid-cell")
    } 
}

window.onload = () => {
    makeGrid(16, 16);
}