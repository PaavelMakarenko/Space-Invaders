import { rightPressed, leftPressed, spacePressed } from "./Controls.js"


let SCREEN_WIDTH = window.innerWidth;
let SHIP_SPEED = 5 // The speed of ship is the precentage of width of the screen. Every player has 


export class Player{
    constructor(x, y, lives, bulletController){
        this.x = x;
        this.y = y;
        this.lives = lives;
        this.bulletController = bulletController;
    };

    shoot(){
        if (spacePressed){
            const bulletX = this.x;
            const bulletY = this.y;
            const delay = 0;
            this.bulletController.shoot(bulletX, bulletY, delay);
        } 
    };

    build(){
        let shipDiv = document.getElementById("ship");

        shipDiv.style.left = this.x / 2 + "px";
        shipDiv.style.bottom = this.y + "px";

        let img = document.createElement("img");

        img.src = "../assets/ship.png";
        img.style.width = "50px"
        img.style.height = "50px"
        
        shipDiv.appendChild(img)
        this.shoot()
    }

    move(){
        CheckScreenWidth()

        // parse the value of current position
        let shipDiv = document.getElementById("ship");
        let leftNumbers = shipDiv.style.left.replace('px', '');
        this.x = parseInt(leftNumbers, 10);

        // change the position
        if (this.x + SHIP_SPEED <= SCREEN_WIDTH - 50 && rightPressed) { // 50 is the widht of spaceship
            shipDiv.style.left = `${this.x + SHIP_SPEED}px`;
        };
        if (this.x - SHIP_SPEED >= 0  && leftPressed ){
            shipDiv.style.left = `${this.x - SHIP_SPEED}px`;
        };
        
    }
};

function CheckScreenWidth(){
    SCREEN_WIDTH = window.innerWidth; // if the screen size was changed during the game we must count it
};