var gameType = window.localStorage.getItem('gameType');
console.log(gameType);
try{

var sessionLevel = 'level1';
var level;
var levelTotal;


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


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var clicou = false;
function btn(e){

	if(!clicou){

			

			var button = $(e).attr('characters');
			var characters = $("#view").attr('characters');
			var score = $(".count-score").text();
			var erros = $(".count-fails").text();
			
			var scoreNumber = Number(score);
			var errosNumber = Number(erros);

			if(erros >= 10){
				$("#game-over").removeClass('hidden');
			}else{

				$("#game-over").addClass('hidden');

				if(button === characters){
					scoreNumber++;
					$(".count-score").text(scoreNumber);
					$("#score").addClass("animate__backInDown");

					$(".add-segundos").show();
			
					startAddTime('start', 0, 2);

					clicou = false;

					start();

				}else{


					 $(".barra-prog").css("width", '100%');
		     		 $(".prog").css("display", 'block');

					errosNumber++;
					$(".count-fails").text(errosNumber);
					$("#fails").addClass("animate__backInDown");

					 $("."+md5(characters)).addClass("resposta");
					 
					
					reload('fails')

					clicou = true;

				progress();
				setTimeout(function(){
					
					 $(".prog").css("display", 'none');
					 clearInterval(interval);
					 $(".add-segundos").hide();

					 clicou = false;

					  start();
				}, 2000)

				}
				
				
				

			}


	
	startTime();
	


	}else{
		console.log('btnclicado');
	}
}


var interval;
function progress(){
		
		var i = 100;
		interval = setInterval(function(){ 
		    

		    $(".barra-prog").css("width", i+"%");
		   	
		    i--;
		}, 
		20);

}


function start(){
	$("#options").html('');
	var radom = getRandomInt(1, levelTotal);
	for( var [k,v] of Object.entries(level)){
	
		 if (radom == v.number) {
		 	$("#view").html(v.characters);
		 	$("#view").attr('characters', v.name);
		 	$("#view").addClass('animate__rubberBand');
		 	$(".description-dica").text(v.description);
		 }

		 $("#options").append(`<button onclick="btn(this)" characters="${v.name}" class="${md5(v.name)}" style="">${v.name}</button>`);
		 
	}

	clicou = false;
}



function restart(){
	// window.location.reload(true);
	
	reload('restart')
}


var intevalo;
function startTime(){
    intevalo = setInterval(function(){
    	console.log('time')
    	$("#score").removeClass("animate__backInDown");
    	$("#fails").removeClass("animate__backInDown");
    	$("#view").removeClass("animate__rubberBand");

    	stopTime();
    }, 2000);
        
}
function stopTime(){
	clearInterval(intevalo);
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
		console.log('timeCss');
	 $(".dica").hide();
	 clearInterval(timeCsss);
	},1000);
}

if(v.level === data.level){
                console.log('existe');

                var newarry = removerItem(gts, data.level);
                console.log('nr:',newarry);

                newarry.push(data);

                window.localStorage.setItem("session_"+data.gameType, JSON.stringify(newarry));
               
                break;
            }else{

                
                console.log('Não existe--------------------------------------------');
                gts.push(data);
                window.localStorage.setItem("session_"+data.gameType, JSON.stringify(gts));
                console.log('------------------------------------------------------')
                console.log(gts);
               
            }

            for( var [k, v] of Object.entries(gts)){
           
            if(v.level === data.level){
                console.log('existe');

                var newarry = removerItem(gts, data.level);
                console.log('nr:',newarry);

                newarry.push(data);

                window.localStorage.setItem("session_"+data.gameType, JSON.stringify(newarry));
               
                break;
            }else{

                
                console.log('Não existe--------------------------------------------');
                gts.push(data);
                window.localStorage.setItem("session_"+data.gameType, JSON.stringify(gts));
                console.log('------------------------------------------------------')
                console.log(gts);
               
            }


        }