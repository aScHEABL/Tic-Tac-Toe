let game = (() => {
    console.log(`Hello World!`);
    
    const X_class = "x";
    const O_class = "o";

    // target DOM elements
    let targetDomElement = () => {
         const cells_DOM = document.querySelectorAll(`[data-cell]`);
         const restartButton = document.querySelector(`#restart-button`);
         return {cells_DOM, restartButton};
    };
    
    // addEventListener
    let eventListenerCallBackFN = (e) => {
        const cell = e.target;
        const currentClass = oTurn ? O_class : X_class;
        placeMark(cell, currentClass);
    };
    targetDomElement().cells_DOM.forEach((cell, index) => {
        cell.addEventListener(`click`, eventListenerCallBackFN, {once: true});
    });

    let placeMark = (cell, currentClass)

})();