(function game () {
    console.log(`Hello World!`);
    // target DOM elements
    let gridID = `grid-`;
    const gridArray = [];
    const restartButton_DOM = document.querySelector(`#restart-button`);
    for (let i = 0; i < 9; i++) {
        gridArray.push(gridID + i);
    };
    const grids_DOM = gridArray.map((grid) => document.querySelector(`#${grid}`));
    
    // addEventListener
    restartButton_DOM.addEventListener(`click`, () => {
        console.log(`Restart button has been clicked!`);
    });
    grids_DOM.forEach((grid, index) => {
        grid.addEventListener(`click`, () => {
            console.log(`${gridArray[index]} has been clicked!`);
        })
    });

    let 

    let playerX = {};
    let playerO = {};
    let gameLogic = () => {

    }
})();

// (function () {
//     console.log(`Hello World!`);
//     // target DOM elements
//     let targetDOM = () => {
//         const restartButton_DOM = () =>  document.querySelector(`#restart-button`);
//         return { restartButton_DOM };
//     }
//     console.log(targetDOM().restartButton_DOM());
// })();