//carregar script no dom

	var gameType = window.localStorage.getItem('gameType');
	console.log(gameType);
	try{
		
		var sessionLevel =  window.localStorage.getItem("sessionLevel");;
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
		}else{
			level = level1;
			levelTotal = level.length;
		}

		start();

	},1000);

//carregar script no dom


//start -----------------------------------------------------
function start(){
	var random = getRandomInt(1, levelTotal);
	buttons.innerHTML = '';


	for( var [k,v] of Object.entries(level)){
		 
		 if (random == v.number) {
			 	views.innerHTML = v.pergunta;
			 	// console.log('Resposta',v.resposta)
			 	views.setAttribute("resposta", v.resposta)
			 	modal.innerText = v.description;
			 	AnimateIn();
		 }


		 var buttonElemet = document.createElement("button");
		 		 buttonElemet.setAttribute("class", md5(v.resposta));
		 		 buttonElemet.setAttribute("onclick", "btn(this)");
		 		 buttonElemet.setAttribute("resposta", v.resposta);
		 		 buttonElemet.innerText = v.resposta;
		 		 buttons.appendChild(buttonElemet);


	}

	selected = false;

	if(Number(score.innerText) >= 3){

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
	var resposta = e.getAttribute("resposta");
	var viewRespsota = views.getAttribute("resposta");
	var scoreNumber = Number(score.innerText);
	var errosNumber = Number(fails.innerText);


	if(!selected){

		if(Number(fails.innerText) >=10){
			   gameOver.classList.remove("hidden");
		}else{

				if(resposta == viewRespsota){

					

					


					selected = false;
					scoreNumber++;
					score.innerText = scoreNumber;
					addSegundos.style.display = 'block';
					startAddTime('start', 0, 2);

					setTimeout(function(){
						start();
					}, 500)
					
				}else{

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

function restart(){
	// window.location.reload(true);
	
	reload('restart')
}


function reload(e){
	if(e == 'score'){
		window.location.href = '.score.';
	}else if(e == 'fails'){
		window.location.href = '.fails.';
	}else if(e == 'restart'){
		window.location.href = '.restart.';
	}else{

	}
}


function closeDica(){
	$(".dica").removeClass("animate__fadeInDown");
	$(".dica").addClass("animate__fadeOutUp");
	timeCss();
}
function openDica(){
	$(".dica").show();
	$(".dica").addClass("animate__fadeInDown");
	$(".dica").removeClass("animate__fadeOutUp");
}
var timeCsss;

function timeCss(){

	 timeCsss = setInterval(function(){
		
	 $(".dica").hide();
	 clearInterval(timeCsss);
	},1000);
}