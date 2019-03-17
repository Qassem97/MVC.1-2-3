"use strict";

var tileMap01 = {
    width: 19,
    height: 16,
    mapGrid: [
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
        [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
        [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W']],
        [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
        [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
        [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
};
let myMap = tileMap01.mapGrid;
let mapCountiner = document.getElementById("mapCountiner");

let x, y;
createMap(myMap);

document.addEventListener("keydown", function (e) {
    e.preventDefault();
    switch (e.keyCode) {
        case 37: //leftArrow
            tryMove(0, -1);
            break;
        case 38: // upArrow
            tryMove(-1, 0);
            e.preventDefault();
            break;
        case 39: //rightArrow
            tryMove(0, 1);
            break;
        case 40: //downArrow;
            tryMove(1, 0);
            e.preventDefault();
            break;
    }
});
function createMap(map) {
    for (let row = 0; row < 16; row++) {
        let rowElement = document.createElement("div");
        rowElement.classList.add("row");
        mapCountiner.appendChild(rowElement);
        for (let col = 0; col < 19; col++) {
            let colElement = document.createElement("div");
            colElement.classList.add("col");
            rowElement.appendChild(colElement);

            let tileValue = map[row][col][0];
            if (tileValue === "P") {
                x = row;
                y = col;
                colElement.classList.add("P");
            } else if (tileValue === "W") {
                colElement.classList.add("W");
            } else if (tileValue === "G") {
                colElement.classList.add("G");

            } else if (tileValue === "B") {
                colElement.classList.add("B");
            } else {
                colElement.classList.add("empty")
            }

        }
    }
}

function movePlayer(oldPosition, newPosition) {

}
function isInsideMap(targetX, targetY) {
    if (targetX >= 0 && targetX < 16 && targetY >= 0 && targetY < 19) {
        return true;
    }
    return false;
}



function tryMove(xDirection, yDirection) {
    let xTarget = x + xDirection;
    let yTarget = y + yDirection;

    if (isInsideMap(xTarget, yTarget)) {
        let playerTile = mapCountiner.children[x].children[y];
        let secondTile = mapCountiner.children[xTarget].children[yTarget];
        if (isNextPositionEmpty(secondTile)) {
            secondTile.classList.add("P");
            secondTile.classList.remove("empty");
            playerTile.classList.add("empty");
            playerTile.classList.remove("P");
            x = xTarget; //new position
            y = yTarget; //new position
        }
        else if (isNextPositionBox(secondTile)) {
            let xTarget2 = xTarget + xDirection;
            let yTarget2 = yTarget + yDirection;
            if (isInsideMap(xTarget2, yTarget2)) {
                let theardTile = mapCountiner.children[xTarget2].children[yTarget2];
                if (isNextPositionEmpty(theardTile)) {
                    theardTile.classList.add("B");
                    theardTile.classList.remove("empty");
                    secondTile.classList.add("P")
                    secondTile.classList.remove("B")
                    playerTile.classList.add("empty")
                    playerTile.classList.remove("P")

                    x = xTarget;
                    y = yTarget;

                    checkWin();
                }
                

            }
        }

    }
}

function isNextPositionBox(targetElement) {

    if (targetElement.classList.contains("B")) {
        return true;
    }
    return false;
}

function isNextPositionEmpty(targetElement) {

    if (targetElement.classList.contains("B") === false && targetElement.classList.contains("W") === false) {
        return true;
    }
    return false;
}
function checkWin() {
    if (mapCountiner.getElementsByClassName("G B").length === 6) {
        document.getElementById("win").style.display = "flex";
    }
}


