(function () {
    console.log(`Hello World!`);
    // target DOM elements

    let targetDOM = () => {
        let gridID = `grid-`
        const restartButton_DOM = document.querySelector(`#restart-button`);
        const gridArray = [];
        for (let i = 0; i < 9; i++) {
            gridArray.push(gridID + i);
        };
        const grids_DOM = gridArray.map((grid) => document.querySelector(`#${grid}`));
        return {restartButton_DOM, grids_DOM, gridArray};
    };
    // addEventListener

    let addEventListener = (() => {
        targetDOM().restartButton_DOM.addEventListener(`click`, () => {
            console.log(`Restart button has been clicked!`);
        })
        targetDOM().grids_DOM.forEach((grid, index) => {
            grid.addEventListener(`click`, () => {
                console.log(`${targetDOM().gridArray[index]} has been clicked!`);
            });
        });
    })();

    // let cyclePlayerTurn = () => {
    //     const turnArray = ["X", "O"];
    //     let count = 0;

    // };

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