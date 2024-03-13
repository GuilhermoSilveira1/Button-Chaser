let sccore = 0;
let aWidth;
let aHeight;
let timer;
let iterations = 0;

window.addEventListener('load', setGameAreaBounds);

function setGameAreaBounds() {
    aWidth = innerWidth;
    aHeight = innerHeight;
    aWidth -= 22;
    aHeight -=97;
    window.document.getElementById('gameArea').style.width = aWidth + 'px';
    window.document.getElementById('gameArea').style.height = aHeight + 'px';
    window.document.getElementById('dot').addEventListener('click', detectHit);
    aWidth -= 74;
    aHeight -= 74;
    moveDot();
}

function detectHit() {
    sccore += 1;
    window.document.getElementById('scoreLabel').innerHTML = `Score = ${sccore}`;

}

//function moveDot() {
    let x = Math.floor(Math.random()*aWidth);
    let y = Math.floor(Math.random()*aHeight);
    if (x<10)
        x = 10;
    if (y<10)
        y = 10;
    window.document.getElementById('dot').style.left = x + 'px';
    window.document.getElementById('dot').style.top = y + 'px';
    if (iterations < 30)
        timer = setTimeout ("moveDot()",1000);
    else {
        document.getElementById('scoreLabel').innerHTML += "     Game Over!";
        document.getElementById('dot').removeEventListener('click', detectHit);
        clearTimeout(timer);
    }
    iterations ++;
//} Comentado para adição da função responsável por recomeçar o jogo