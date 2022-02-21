const sketchGrid = document.getElementById("sketch-grid");
const r = document.querySelector(":root");
const resetButton = document.getElementById("reset-btn");
const gridButton = document.getElementById("grid-btn");

// Create Grid Function
function makeGrid(rows, cols) {
    clearGrid();
    for (let c = 0; c < (rows * cols); c++) {
        const cell = document.createElement("div");
        sketchGrid.appendChild(cell);
        cell.setAttribute("class", "grid-cell")
        cell.addEventListener('mouseenter', addHover)
    } 
}

function clearGrid() {
    while (sketchGrid.firstChild) {
        sketchGrid.removeChild(sketchGrid.firstChild);
    }
}

function userPrompt() {
    let entry = prompt("Enter a new grid size between 10 and 100", 10)
    let size = parseInt(entry);
    r.style.setProperty('--col', size);
    r.style.setProperty('--row', size);
    makeGrid(size, size);
}

// Event Listener Functions
function addHover(e) {
    e.target.classList.add('hover-active');
}

function removeHover(e) {
    e.target.classList.remove('hover-active');
}

function removeSketch() {
    let boxes = document.querySelectorAll('.grid-cell');
    boxes.forEach(box => {
        box.classList.remove("hover-active");
    });
}

function addHoverListener() {
    let boxes = document.querySelectorAll('.grid-cell');
    boxes.forEach(box => {
        box.addEventListener('mousedown', addHover)
        box.addEventListener('mouseup', removeHover)
    });
}

// Event Listeners
resetButton.addEventListener('click', () => {
    removeSketch();
});

gridButton.addEventListener('click', () => {
    userPrompt();
})

// Create Grid
makeGrid(16, 16);





