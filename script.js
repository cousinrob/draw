const pad = document.querySelector('#pad');

function createGrid(num= 16 * 16) {
    console.log(num);
    for (let i = 0; i < num; i++) {
        console.log(num);
        const cell= document.createElement('div');
        cell.classList.add('cell');
        pad.appendChild(cell);
      }
};

createGrid();