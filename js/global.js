
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
var levelArray = [];

function addSessionLevel(data){
    console.log(data.gameType);
    var gts = getSessionLevel(data.gameType);
    console.log('gts->'+ gts.length);


    if(gts.length === 0){
         console.log('não existe session-------------------------------------------');
         gts.push(data);
         saveSession(data.gameType, gts);
            
    }else{
        atualizarArray(gts, data);
    }

}


function atualizarArray(arr, data){
    for( var [k, v] of Object.entries(arr)){
        console.log(v.level);

        if (v.level == data.level) {
            console.log('existe')
            var newArray = removerItemId(arr, data.level)
            console.log('//',newArray);
            saveSession(data.gameType, newArray);
            break;
        }else{
            console.log('não existe')
            arr.push(data);
            saveSession(data.gameType, arr);
        }
    }
}

function saveSession(gameTypes, datas){
     window.localStorage.setItem("session_"+gameTypes, JSON.stringify(datas));
     console.log('session_saved-------------------------------------')
}

function removerItemId(list, id){
  
    var index = list.map(x => {
      return x.level;
    }).indexOf(id);

    list.splice(index, 1);
    return list;
}

function getSessionLevel(gt){
    try{    
          var jsons =  window.localStorage.getItem("session_"+gt);
          if(jsons === undefined || jsons === null){
              return levelArray;
          }else{
             
              return JSON.parse(jsons);
          }
        
    }catch(e){
        console.log(e.message);
    }
}

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


