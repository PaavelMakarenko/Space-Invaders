import { keyDownHandler, keyUpHandler } from "./Controls.js"
import { GamerRender } from "./GameRander.js"
import { InnerFpsRate } from "./FPSModule.js"
import { Player } from "./Player.js"
import { BulletController } from "./BulletController.js"

let screenWidth = window.innerWidth;

const bulletController = new BulletController();
const player = new Player(screenWidth , 5, 10, bulletController)

function Game(){
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
    InnerFpsRate()
    
    player.build()
    
    console.log(player.lives)
    GameLoop()
    
}



function GameLoop(){
    window.requestAnimationFrame(GamerRender); // triggers the recursive function
}

new Game();

export {player};

