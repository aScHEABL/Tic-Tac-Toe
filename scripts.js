(function game () {
    console.log(`Hello World!`);
    //player array
    const playerX = [];
    const playerO = [];    

    // cycle player's turn

    let count = 0;
    const cyclePlayerTurn = () => {
        const turnArray = ["X", "O"];
        let turn = count % turnArray.length;
        count++;
        return turn;
    };

    // game logic
    
    const gameLogic = (grid, index) => {    
        const sortCallBackFn = (a, b) => a - b;
        // Win scenario
        // const win0 = [0, 1, 2];
        // const win1 = [3, 4, 5];
        // const win2 = [6, 7, 8];
        // const win3 = [0, 3, 6];
        // const win4 = [1, 4, 7];
        // const win5 = [2, 5 ,8];
        // const win6 = [0, 4, 8];
        // const win7 = [6, 4, 2];
        const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];

        win.forEach((winScenario) => {
            if (playerX.includes(winScenario) === true) console.log(`Player X won!`);
            if (playerO.includes(winScenario) === true) console.log(`Player O won!`);
        });

        // get the turn of function cyclePlayerTurn
        switch (cyclePlayerTurn()) {
            // playerX's turn
            case 0:
                grid.textContent = `X`;
                playerX.push(index);
                playerX.sort(sortCallBackFn);
                console.log(`Player X's array: ${playerX}`);
                // console.log(`Player O's turn!`);
                targetDOM().playerXTitle.style.display = `none`;
                targetDOM().playerOTitle.style.display = `block`;
                break;
            case 1:
                grid.textContent = `O`;
                playerO.push(index);
                playerO.sort(sortCallBackFn);
                console.log(`Player X's array: ${playerO}`);
                // console.log(`Player X's turn!`);
                targetDOM().playerXTitle.style.display = `block`;
                targetDOM().playerOTitle.style.display = `none`;
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
        let eventListenerCallBackFn = (grid, index) => {
            grid.addEventListener(`click`, () => {
                console.log(`${targetDOM().gridArray[index]} has been clicked!`);
                // if  player clicked the same grid again, exit the function
                if (grid.textContent !== "") {
                    console.log(`${targetDOM().gridArray[index]} has been clicked twice! Rejected.`);
                    return;
                };
                gameLogic(grid, index);
            });
        };
        targetDOM().restartButton_DOM.addEventListener(`click`, () => {
            console.log(`Restart button has been clicked!`);
        })
        targetDOM().grids_DOM.forEach(eventListenerCallBackFn);
        
    })();
    
})();