let doc = document;
let container = doc.querySelector(".container");
let slider = doc.querySelector(".grid-size-val");
let gridSizeLabel = doc.querySelector(".grid-size-label");
let resetBtn = doc.querySelector(".reset");
let gridSize = 2;
let colBtnBlk = doc.querySelector(".col-black");
let colBtnRGB = doc.querySelector(".col-rgb");
let cellColor = 'rgb';

slider.min = 2;
slider.max = 64;


function createCells(gridSize) {
  // Clear existing cells
  container.innerHTML = "";
  gridSizeLabel.innerText = `Grid size: ${gridSize} x ${gridSize}`;
  const cellSize = `calc(100% / ${gridSize})`;

  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    let pixel = doc.createElement("div");
    pixel.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = cellColor == 'black'? 'black' : getRandomRGBColor();
    });
    pixel.style.width = cellSize;
    pixel.style.height = cellSize;
    container.appendChild(pixel);
    pixel.className = "pixel";
  }
}

function resetCells() {
  container.innerHTML = "";
  createCells(slider.value);
}

function getRandomRGBColor() {
  var red = Math.floor(Math.random() * 128) + 128;
  var green = Math.floor(Math.random() * 128) + 128;
  var blue = Math.floor(Math.random() * 128) + 128;

  var rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  return rgbColor;
}

addEventListener('DOMContentLoaded',() => {
  createCells(gridSize);
})


slider.addEventListener("input", (event) => {
  gridSize = event.target.value;
  createCells(gridSize);
  console.log(gridSize);
});

resetBtn.addEventListener("click", () => {
  resetCells();
});

colBtnRGB.addEventListener("click",() => {
    cellColor = 'rgb';
});

colBtnBlk.addEventListener("click",() => {
  cellColor = 'black';
});

doc.content.appendChild(container);
