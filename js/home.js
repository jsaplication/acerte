


function playGame(e){
	var name = $(e).attr('name');

    var n = e.getElementsByClassName('box-name')[0].innerText;
    console.log(n);


	window.localStorage.setItem('gameType', name);


	var el = document.querySelector(".list-level");
	el.classList.remove("closeModal");
	el.classList.add("openModal");

    $(".padd-level label").text(n);

    $(".list").html('');
    $.getScript( "level/"+name+"/limite.js" )
      .done(function( script, textStatus ) {
        $(".scripts").html('<script>'+script+'</script>');
        limiteLevel(name);
      })
      .fail(function( jqxhr, settings, exception ) {
        console.log("getScript:",exception);
    });


}


function closeListLevel(){
	console.log('click')
	var el = document.querySelector(".list-level");
	el.classList.remove("openModal");
	el.classList.add("closeModal");
     $(".list").html('');
}
function limiteLevel(e){

   
    for (let i = 1; i <= limiteLevelTo(); i++) {

        var html = `<div class="list-item" onclick="openLevel(this)" name="level${i}" id="level${i}">
                      Level ${i}
                      <div class="status-level-list">Iniciar</div>
                    </div>`;
        $(".list").append(html);

        getSessionLevelList(e);
       
    }

    
}

function getSessionLevelList(gt){
    try{    
          var jsons =  window.localStorage.getItem("session_"+gt);
          if(jsons != undefined || jsons != null){
          	 var objeto =  JSON.parse(jsons);
            for (var [k, v] of Object.entries(objeto)) {
    		    // console.log(`Chave: ${k}, Valor: ${v.gameType}`, 'level:', v.level);
    		    document.querySelector("#"+v.level + ' .status-level-list').innerHTML = 'Concluido'
    		    
		    }
          }else{
           

          }
        
    }catch(e){
        console.log(e.message);
    }
}

function getSessionLevel(gt) {
    try {
        var jsons = window.localStorage.getItem("session_" + gt);
        if (jsons != undefined || jsons != null) {
            var objeto = JSON.parse(jsons);
            var totalEstrelas = 5; // Número total de estrelas
            console.log(objeto)
            // Calcular a soma total dos pontos e das falhas
            var totalPontos = objeto.reduce(function(acumulador, item) {
                return acumulador + parseInt(item.score);
            }, 0);
            var totalFails = objeto.reduce(function(acumulador, item) {
                return acumulador + parseInt(item.fails);
            }, 0);

            // Calcular a diferença entre a soma dos pontos e das falhas
            var diferenca = totalPontos - totalFails;

            // Calcular a quantidade de estrelas com base na diferença, garantindo que não seja menor que 0 ou maior que o totalEstrelas
            var estrelas = Math.max(0, Math.min(totalEstrelas, diferenca));

            // Selecionar as estrelas
            var estrelasItem = document.querySelector('.nivel-'+gt); // selecione a classe correta das estrelas do item
            var spans = estrelasItem.querySelectorAll('span');

            // Atualizar as classes das estrelas
            spans.forEach(function(span, index) {
                if (index < estrelas) {
                    span.classList.remove('nivel-not-finalized');
                    span.classList.add('nivel-finalized');
                } else {
                    span.classList.remove('nivel-finalized');
                    span.classList.add('nivel-not-finalized');
                }
            });
        } else {
            // Lógica para caso o objeto não seja encontrado no armazenamento local
        }
    } catch (e) {
        console.log(e.message);
    }
}

getSessionLevel('caracteres');
getSessionLevel('tradusa');




