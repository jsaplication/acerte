
var sessionLevel = 'level2';
var level;
var levelTotal;


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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function btn(e){
	

	var button = $(e).attr('characters');
	var characters = $("#view").attr('characters');
	var score = $(".count-score").text();
	var erros = $(".count-fails").text();
	
	var scoreNumber = Number(score);
	var errosNumber = Number(erros);

	if(erros >= 10){
		$("#game-over").removeClass('hidden');
		start();
	}else{
		$("#game-over").addClass('hidden');
		
		if(button === characters){
			scoreNumber++;
			$(".count-score").text(scoreNumber);
			$("#score").addClass("animate__backInDown");

			// audioPlayScore();
			reload('score');

			 var fiveMinutes = 30 * 1,
			     display = $('.minutos');
			 // startTimer(fiveMinutes, display);
			 startAddTime('start', 0, 5);

		}else{
			errosNumber++;
			$(".count-fails").text(errosNumber);
			$("#fails").addClass("animate__backInDown");
			
			reload('fails')
		}
		
		start();

	}

	
	startTime();
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

		 $("#options").append(`<button onclick="btn(this)" characters="${v.name}">${v.name}</button>`);
		 
	}

}
start();


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
    }, 1000);
        
}
function stopTime(){
	clearInterval(intevalo);
}


var count = 0;

function pad2(n) {
    return n < 10 ? '0' + n : n;
}

function show() {
    var s = count % 60;
    var m = Math.floor(count / 60);
  
    $(".minutos").text(pad2(m)+':'+pad2(s));
   	
   
   	

}

function timer() {
    show();
    if (count-- > 0) {
        setTimeout(timer, 1000);
    }
}

function startAddTime(status, min, seg){

	if(status == 'start'){
		var s = parseInt(seg, 10);
	    var m = parseInt(min, 10);

	    if (isNaN(s) || isNaN(m)) return;
	    seg = s;
	    min = m;
	 
	    var current = count;
	    count += (m * 60) + s;
	    
	    // only restart the counter loop if it was previously stopped
	    if (current <= 0) {
	        timer();
	    } else {
	        show();
	    }
	}else if(status == 'add'){
		var s = parseInt(seg, 10);
	    var m = parseInt(min, 10);

	    if (isNaN(s) || isNaN(m)) return;
	    seg = s;
	    min = m;
	 
	    var current = count;
	    count += (m * 60) + s;
	    
	    // only restart the counter loop if it was previously stopped
	    if (current <= 0) {
	        timer();
	    } else {
	        show();
	    }
	}
	
}
startAddTime('start', 1, 0);


function reload(e){
	// if(e == 'score'){
	// 	window.location.href = '.score.';
	// }else if(e == 'fails'){
	// 	window.location.href = '.fails.';
	// }else if(e == 'restart'){
	// 	window.location.href = '.restart.';
	// }else{

	// }
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