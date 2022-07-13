let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let spacePressed = false;

export function keyDownHandler(event) {
    if(event.keyCode == 39 || event.keyCode == 68) {
        rightPressed = true;
    }
    else if(event.keyCode == 37 || event.keyCode == 65) {
        leftPressed = true;
    }
    if(event.keyCode == 40 || event.keyCode == 83) {
      downPressed = true;
    }
    else if(event.keyCode == 38 || event.keyCode == 87) {
      upPressed = true;
    }
    if(event.keyCode == 32) {
        spacePressed = true;
    }
}

export function keyUpHandler(event) {
    if(event.keyCode == 39 || event.keyCode == 68) {
        rightPressed = false;
    }
    else if(event.keyCode == 37 || event.keyCode == 65) {
        leftPressed = false;
    }
    if(event.keyCode == 40 || event.keyCode == 83) {
      downPressed = false;
    }
    else if(event.keyCode == 38 || event.keyCode == 87) {
      upPressed = false;
    }
    if(event.keyCode == 32) {
        spacePressed = false;
    }
}

export {rightPressed,leftPressed, spacePressed}