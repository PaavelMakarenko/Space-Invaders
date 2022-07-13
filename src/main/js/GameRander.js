import { player} from "./Game.js"


let fpsRate = 0;
let times = [];


export function GamerRender(timestamp){
    while (times.length > 0 && times[0] <= timestamp - 1000) {
        times.shift();
    }
    
    times.push(timestamp);
    fpsRate = times.length;

    player.move()
    player.shoot()
    player.bulletController.draw()
    draw()

    window.requestAnimationFrame(GamerRender); // recursion

}


function draw(){
    const context = document.getElementById('canvas')
    let randomColor = Math.random() > 0.5? '#ff8080' : '#0099b0';
    context.style.backgroundColor = randomColor;
};

export { fpsRate };