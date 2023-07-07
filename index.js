let doc = document;
let container = doc.querySelector('.container');
let slider = doc.querySelector('.grid-size-val');
slider.min = 2;
slider.max = 64;
let gridSize = 2;


doc.body.appendChild(container);

function createCells(gridSize){
    
    // Clear existing cells
    container.innerHTML = '';
    const cellSize = `calc(100% / ${gridSize})`;

    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        let pixel = doc.createElement('div');
      pixel.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = 'black';
      });
      pixel.style.width = cellSize;
      pixel.style.height = cellSize;
      container.appendChild(pixel);
      pixel.className = "pixel";
    }
    
}

createCells(gridSize);


slider.addEventListener('input',(event)=>{
    gridSize = event.target.value;
    createCells(gridSize);
    console.log(gridSize)
});

