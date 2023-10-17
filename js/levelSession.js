
var levelArray = [];

function addSessionLevel(data){
    console.log(data.gameType);
    var gts = getSessionLevel(data.gameType);
    console.log('gts->'+ gts.length);


    if(gts.length === 0){
         
         gts.push(data);
         saveSession(data.gameType, gts);
         console.log('não existe session-------------------------------------------');
         console.log(gts);   

          var score = data.score;
          var fails = data.fails;
         document.querySelector(".score-status-sucess").textContent = score;
         document.querySelector(".error-status-sucess").textContent =fails;

    }else{
        atualizarArray(gts, data);
        console.log('sessão atualizada-------------------------------------------');
        console.log(data);
        var score = data.score;
        var fails = data.fails;

        document.querySelector(".score-status-sucess").textContent = score;
        document.querySelector(".error-status-sucess").textContent =fails;
    }

}

// function atualizarArray(arr, data){
//     for( var [k, v] of Object.entries(arr)){
//         console.log(v.level);

//         if (v.level == data.level) {
//             console.log('existe')
//             var newArray = removerItemId(arr, data.level)
//             console.log('//',newArray);
//             saveSession(data.gameType, newArray);
//             break;
//         }else{
//             console.log('não existe')
//             arr.push(data);
//             console.log(arr)
//             saveSession(data.gameType, arr);
//         }
//     }
// }

function atualizarArray(arr, data) {
    var nivelEncontrado = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].level === data.level) {
            // Atualizar o nível existente com os novos dados
            arr[i] = data;
            nivelEncontrado = true;
            break;
        }
    }

    if (!nivelEncontrado) {
        // Se o nível não foi encontrado, adicione o novo item ao array
        arr.push(data);
    }

    console.log('Array atualizado:', arr);
    saveSession(data.gameType, arr);
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
