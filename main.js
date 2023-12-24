var clutter= "";
var timer= 60;
var score= 0;
var newHit= 0;
var tapmusic= document.querySelector("#tap")
var wrong= document.querySelector("#wrong")

function bubble(){
    for (let i = 0; i < 200; i++) {
        var rn= Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
        document.querySelector("#pbtm").innerHTML=clutter;
    
    }
}


function getTimer(){
    var mytime= setInterval(function(){
        if (timer>0) {
            timer--;
            document.querySelector("#GameTimer").textContent=timer;
            
        }
        else{
            clearInterval(mytime)
            document.querySelector("#pbtm").innerHTML=`<img src="./game.jpg"> <audio autoplay><source src="./go.wav" type="audio/mpeg"></audio>`;

        }
        
    }, 1000)
}
function myScore() {
    score +=10;
    document.querySelector("#Gamescore").innerText=score;
}

function myHits(params) {
    newHit = Math.floor(Math.random()*10);
    document.querySelector("#hits").innerText= newHit;
}

function tap(){
    
    tapmusic.play();
}
function wrongMusic(){
    wrong.play();
}


getTimer();
bubble();

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var btn= Number(dets.target.textContent);
    
    console.log(btn)
    if (btn===newHit) {
        
        bubble();
        myScore();
        myHits();
        tap();     
    }
    else if (btn != newHit){
        wrongMusic();     
    }
})