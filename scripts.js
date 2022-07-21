(function () {
    console.log(`Hello World!`);

    // cycle player's turn

    let playerX = {};
    let playerO = {};

    let count = 0;
    const cyclePlayerTurn = () => {
        const turnArray = ["X", "O"];
        return () => {
            let turn = count % turnArray.length;
            count++;
            return turn;
        };
    };

    // game logic
    
    let gameLogic = (grid, index) => {


        // get the turn of function cyclePlayerTurn
        switch (cyclePlayerTurn()()) {
            // playerX's turn
            case 0:
                grid.textContent = `X`;
                console.log(`Player X's turn!`);
                targetDOM().playerXTitle.style.display = `block`;
                targetDOM().playerOTitle.style.display = `none`;
                break;
            case 1:
                grid.textContent = `O`;
                console.log(`Player O's turn!`);
                targetDOM().playerXTitle.style.display = `none`;
                targetDOM().playerOTitle.style.display = `block`;
                break;
        };
    };

    // target DOM elements

    let targetDOM = () => {
        let gridID = `grid-`
        const restartButton_DOM = document.querySelector(`#restart-button`);
        const gridArray = [];
        for (let i = 0; i < 9; i++) {
            gridArray.push(gridID + i);
        };
        const grids_DOM = gridArray.map((grid) => document.querySelector(`#${grid}`));
        const playerXTitle = document.getElementById(`player-x-title`);
        const playerOTitle = document.getElementById(`player-o-title`);
        return {restartButton_DOM, grids_DOM, gridArray, playerXTitle, playerOTitle};
    };

    // addEventListener

    let addEventListener = (() => {
        let eventListenerCallBack = (grid, index) => {
            grid.addEventListener(`click`, () => {
                console.log(`${targetDOM().gridArray[index]} has been clicked!`);
                gameLogic(grid, index);
            });
        };
        targetDOM().restartButton_DOM.addEventListener(`click`, () => {
            console.log(`Restart button has been clicked!`);
        })
        targetDOM().grids_DOM.forEach(eventListenerCallBack);
        
    })();
    
})();