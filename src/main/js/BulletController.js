import { Bullet } from "./Bullet.js"

let BULLET_SPEED = 5

export class BulletController{
    bullets = [];
    timerTillNextBullet = 0;

    shoot(x, y, delay){
        if (this.timerTillNextBullet <= 0){
            console.log("shot!")
            this.bullets.push(new Bullet(x, y, delay));
            this.timerTillNextBullet = delay;
            setTimeout(() => this.load(x, y), 3000);
            
        }

        this.timerTillNextBullet--;
        
    }

    draw(){
        let bulletsList = document.getElementsByClassName("bullet");
        if (bulletsList.length > 0){
            for (let index = 0; index < bulletsList.length; index++) {
                const bullet = bulletsList[index];
                let leftNumbers = bullet.style.bottom.replace('px', '');
                let position = parseInt(leftNumbers, 10);

            bullet.style.bottom = `${position + BULLET_SPEED}px`;
            };
        };
    };

    load(x, y){
        let canvas = document.getElementById("canvas");
        let bulletDiv = document.createElement("div");

        bulletDiv.className = "bullet";

        bulletDiv.style.left = x + 15 + "px";
        bulletDiv.style.bottom = y + 20 + "px";


        let img = document.createElement("img");

        img.src = "../assets/bullet_color.png";
        img.style.width = "20px";
        img.style.height = "20px";
        
        bulletDiv.appendChild(img);
        canvas.appendChild(bulletDiv);
        
    }
};