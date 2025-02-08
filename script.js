
const container = document.getElementById("container");
const resetButton = document.getElementById("reset");

// Function to create the grid
function createGrid(size) {
    container.innerHTML = ""; // Clear previous grid

    let squareSize = 400 / size; // Calculate the size of each square

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square"); // Use "square" to match CSS
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Hover effect: Change color to black when mouse enters
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

// Function to reset the grid with new size
resetButton.addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (max: 100)", 16);
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Invalid size! Enter a number between 1 and 100.");
    } else {
        createGrid(newSize);
    }
});

// Initialize grid on page load
createGrid(16);
