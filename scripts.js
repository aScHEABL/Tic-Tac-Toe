(function game () {
    console.log(`Hello World!`);
    let mapDOM = (() => {
        let gridID = `#grid-`;
        const gridArray = [];
        const restartButton = document.querySelector(`#restart-button`);
        for (let i = 1; i < 10; i++) {
            gridArray.push(gridID + i);
        };
        console.log(gridArray);
    })();

    
    let playerX = {};
    let playerO = {};
    let gameLogic = () => {

    }
})();