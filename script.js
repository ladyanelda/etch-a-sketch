// const container = document.getElementById("container"); //gets the cocntainer
// const reset = document.getElementById("reset"); 


// // create the grid
// function createGrid(size) {
//     container.innerHTML = ""; //clears the container

//     let square_size = 400/ size; //sets the size of the grid

//   for (let i = 0; i < size * size; i++) { // loops through to create the grid with correct number of squares
//     const square = document.createElement("div"); //creates a div
//     grid.classList.add("square"); //adds the class grid to the
//     grid.style.width = `${square_size}px`;
//     grid.style.height = `${square_size}px`;

//     grid.addEventListener("mouseover", () => {
//         grid.style.backgroundColor = "black";
//   });
//     container.appendChild(square); //appends the grid to the container
//   }
// };

// resetButton.addEventListener("click", () => {
//     let newSize = prompt("Enter new grid size (max: 100)", 16);
//     newSize = parseInt(newSize);

//     if (isNaN(newSize) || newSize < 1 || newSize > 100) {
//         alert("Invalid size! Enter a number between 1 and 100.");
//     } else {
//         createGrid(newSize);
//     }
// });


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
