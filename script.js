/*
I/ Request
The initial board is white with a grid of square covering it. 16x16 grid of squares, NxN grid of squares.
When user hovers the mouse over squares, the squares become colorful in random color

When user click on select-number-button, reset the board, 
require user enter input within prompt
get user input and calculate again the grid of squares


II/ Mini tasks
The initial board is white with a grid of square covering it
  Create a loop iteration for n times to insert div element to the white board
  When user enter a number n, program calculate the width and height of each small square and then
  use those to change the original width and height of small squares 

When user hovers the mouse over squares, the squares become colorful in random color
  Using DOM, random color to complete this
*/

// Create small square within the board
function createSquareItems(number, lengthOfSmallSide) {
  const container = document.querySelector(".container");

  for (let i = 0; i < number * number; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.setAttribute(
      "style",
      `width: ${lengthOfSmallSide}%;height: ${lengthOfSmallSide}%;`
    );
    container.append(item);
  }

  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    let degreeOpacity = 0;

    item.addEventListener("mouseover", () => {
      degreeOpacity = degreeOpacity + 0.1;
      changeColorHover(item);
      item.setAttribute(
        "style",
        `width: ${lengthOfSmallSide}%; height: ${lengthOfSmallSide}%; opacity: ${degreeOpacity};`
      );
    });
  });
}
createSquareItems(16, calculateLengthOfSide(16));

// Change color when hover
function changeColorHover(item) {
  item.classList.add("red");
}

//reset grid board.
function resetGridBoard(nameOfElement) {
  element = document.querySelector(nameOfElement);
  element.innerHTML = "";
}

// Get user's number
function getUserNumber() {
  let userInputNumber = prompt(
    "Please enter the number of little squares you want, maximum is 100 and minimum is 1"
  );

  if (userInputNumber > 100 || userInputNumber < 1) {
    alert("maximum is 100 and minimum is 1");
    getUserNumber();
  }
  return userInputNumber;
}

// Calculate the height of small squares
function calculateLengthOfSide(userInputNumber = 16) {
  // Need to transform px to % when apply CSS after this calculation;
  const widthOfEachSquare = (1 / userInputNumber) * 100;
  return widthOfEachSquare;
}

const changePixelButton = document.querySelector(".change-pixel");
changePixelButton.addEventListener("click", () => {
  const userNumber = getUserNumber();
  const lengthOfSmallSide = calculateLengthOfSide(userNumber);
  resetGridBoard(".container");
  createSquareItems(userNumber, lengthOfSmallSide);
});
