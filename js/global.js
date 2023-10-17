function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limiteAcertos(){
    return 20;
}
function limiteErros(){
    return 10;
}

var selected = false;

var buttons = document.querySelector("#options");
var views = document.querySelector("#view");
var modal = document.querySelector(".description-dica");
var score = document.querySelector(".count-score");
var fails = document.querySelector(".count-fails");
var gameOver = document.querySelector("#game-over");
var gameSucess = document.querySelector("#game-success");
var barraProgresso =  document.querySelector(".barra-prog");
var progresso = document.querySelector(".prog");
var addSegundos = document.querySelector(".add-segundos");

function AnimateIn(){
    views.animate([
                  // keyframes
                  { transform: 'scale(0)' },
                  { transform: 'scale(1.5)'},
                  { transform: 'scale(1)'}
                
                ], {
                  // timing options
                  duration: 300,
                  // iterations: Infinity
                });
}

function buttonAnimate(b){
    b.animate([
                  // keyframes
                  { transform: 'scale(1)' },
                  { transform: 'scale(1.1)'},
                  { transform: 'scale(1)'}
                
                ], {
                  // timing options
                  duration: 500,
                  // iterations: Infinity
                });
}

function buttonAnimateZoom(a){
    a.animate([
                  // keyframes
                  { transform: 'scale(1)' },
                  { transform: 'scale(1.1)'},
                  { transform: 'scale(1)'}
                
                ], {
                  // timing options
                  duration: 500,

                  // iterations: Infinity
                });
}


var intervalProg;
function progress(){
        
        var i = 100;
        intervalProg = setInterval(function(){ 
            

            $(".barra-prog").css("width", i+"%");
            
            i--;
        }, 
        20);

}


