//carregar script no dom
var gameType = window.localStorage.getItem('gameType');


function levelStatus(){
	var game = window.localStorage.getItem('gameType');
	var level = window.localStorage.getItem("sessionLevel");
	var level_list = getSessionLevel(game);
	console.log('Jogo:',game, 'Nivel:',level, 'level_list:', level_list)
}
levelStatus();


try{
	
	var sessionLevel =  window.localStorage.getItem("sessionLevel");
	var level;
	var levelTotal;

	document.querySelector(".lavel-name").textContent = sessionLevel;
	
	$.getScript( "level/"+gameType+"/"+sessionLevel+".js" )
	  .done(function( script, textStatus ) {
	    $(".scripts").html('<script>'+script+'</script>');
	  })
	  .fail(function( jqxhr, settings, exception ) {
	    console.log("getScript:",exception);
	});


}catch(e){
	console.log('Status:', e.message);
}

setTimeout(function(){
	if(sessionLevel == 'level1'){
		level = level1;
		levelTotal = level.length;
	}else if(sessionLevel == 'level2'){
		level = level2
		levelTotal = level.length;
	}else if(sessionLevel == 'level3'){
		level = level3
		levelTotal = level.length;
	}else if(sessionLevel == 'level4'){
		level = level4
		levelTotal = level.length;
	}else if(sessionLevel == 'level5'){
		level = level5
		levelTotal = level.length;
	}else if(sessionLevel == 'level6'){
		level = level6
		levelTotal = level.length;
	}else if(sessionLevel == 'level7'){
		level = level7
		levelTotal = level.length;
	}else if(sessionLevel == 'level8'){
		level = level8
		levelTotal = level.length;
	}else if(sessionLevel == 'level9'){
		level = level9
		levelTotal = level.length;
	}else if(sessionLevel == 'level10'){
		level = level10
		levelTotal = level.length;
	}else if(sessionLevel == 'level11'){
		level = level11
		levelTotal = level.length;
	}else if(sessionLevel == 'level12'){
		level = level12
		levelTotal = level.length;
	}else if(sessionLevel == 'level13'){
		level = level13
		levelTotal = level.length;
	}else if(sessionLevel == 'level14'){
		level = level14
		levelTotal = level.length;
	}else if(sessionLevel == 'level15'){
		level = level15
		levelTotal = level.length;
	}else{
		level = level1;
		levelTotal = level.length;
	}

	start();

},1000);

//carregar script no dom


//start -----------------------------------------------------
function start(){
	document.querySelector("#view").classList.remove('correto');
	var random = getRandomInt(1, levelTotal);
	buttons.innerHTML = '';


	for( var [k,v] of Object.entries(level)){
		 
		 if (random == v.number) {
		 		// audioIntro()
			 	views.innerHTML = v.pergunta;
			 	// console.log('Resposta',v.resposta)
			 	views.setAttribute("resposta", v.resposta)
			 	modal.innerText = v.description;
			 	AnimateIn();

		 }


		 // var buttonElemet = document.createElement("button");
		 // 		 buttonElemet.setAttribute("class", md5(v.resposta));
		 // 		 buttonElemet.setAttribute("onclick", "btn(this)");
		 // 		 buttonElemet.setAttribute("resposta", v.resposta);
		 // 		 buttonElemet.innerText = v.resposta;
		 // 		 buttons.appendChild(buttonElemet);

		    var buttonElement = document.createElement("button");
				buttonElement.setAttribute("class", md5(v.resposta));
				buttonElement.setAttribute("onclick", "btn(this)");
				buttonElement.setAttribute("resposta", v.resposta);
				buttonElement.innerText = v.resposta;

				buttons.appendChild(buttonElement); // Adiciona o botão ao elemento pai

				// Reorganiza aleatoriamente os botões dentro do elemento pai
				for (var i = buttons.children.length; i >= 0; i--) {
				    buttons.appendChild(buttons.children[Math.random() * i | 0]);
				}
	}

	selected = false;

	if(Number(score.innerText) >= limiteAcertos()){

		var itemlevel = {
			gameType: gameType,
			level: sessionLevel,
			score: score.innerText,
			fails: fails.innerText,
		}

		addSessionLevel(itemlevel);

		gameSucess.classList.remove("hidden");
		
	}else{
		console.log('ainda n finalizou')
	}

}
//start -----------------------------------------------------

//btn--------------------------------------------------------


function btn(e){
	closeDica();
	var resposta = e.getAttribute("resposta");
	var viewRespsota = views.getAttribute("resposta");
	var scoreNumber = Number(score.innerText);
	var errosNumber = Number(fails.innerText);


	if(!selected){

		if(Number(fails.innerText) >=limiteErros()){
			    gameOver.classList.remove("hidden");
			    var scorec = $(".count-score").text();
		        var failc = $(".count-fails").text();
		        $(".score-status").text(scorec)
		        $(".error-status").text(failc)
		}else{

				if(resposta == viewRespsota){

					document.querySelector("#view").classList.add('correto');
					
					audioScore()
					


					selected = false;
					scoreNumber++;
					score.innerText = scoreNumber;
					addSegundos.style.display = 'block';
					startAddTime('start', 0, 5);

					setTimeout(function(){

						start();
					}, 500)
					
					
				}else{
					 audioFail()
					selected = true;


					$("."+md5(viewRespsota)).addClass("resposta");
					
					
					errosNumber++;
					fails.innerText = errosNumber;

					barraProgresso.style.width = '100%';
					progresso.style.display = 'block';
					

					progress();

					setTimeout(function(){
						 $(".prog").css("display", 'none');
						 clearInterval(intervalProg);
						 addSegundos.style.display = 'hide';

						

						  start();

			       
				  }, 2000)

					// start();
				}

		}
	
		
	}
}



function closeDica(){
	$(".dica").removeClass("dica-ads-show");
	$(".dica").removeClass("dica-dica-show");
	$(".btn-dica").css("display","block")
}

function openDica(){
	$(".dica-ads").addClass("dica-ads-show");
	$(".btn-dica").css("display","none")
}

function openAds(){
	startAddTime('start', 0, 30);
	audioIntro()
	window.location.href = '.openads.';

	setTimeout(function(){
		$(".dica").removeClass("dica-ads-show");
		$(".dica-dica").addClass("dica-dica-show");
		$(".btn-dica").css("display","none")
	}, 5000)
	

	

}

function nextlevel(){
	var level = window.localStorage.getItem("sessionLevel");
	console.log(level)
	var numero = parseInt(level.replace(/\D/g, ''), 10);
	console.log(numero)

	var next = numero + 1;
	window.localStorage.setItem("sessionLevel", "level"+next);
	window.location.reload(true);
}

function audioScore(audioUrl) {
    var audio = new Audio('audios/score.wav');
    audio.play();
}
function audioFail(audioUrl) {
    var audio = new Audio('audios/fail.wav');
    audio.play();
}
function audioIntro(audioUrl) {
    var audio = new Audio('audios/intro.wav');
    audio.play();
}
