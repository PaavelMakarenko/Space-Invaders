import { fpsRate } from "./GameRander.js"


export async function InnerFpsRate(){
    await sleep(500)
    let fpsBox = document.getElementById('fps')
    fpsBox.innerHTML  = "FPS: " + fpsRate;
    InnerFpsRate()
}

export async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}