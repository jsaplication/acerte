
var countTime1 = 0;
function pad2(n) {
    return n < 10 ? '0' + n : n;
}

function show() {
    var s = countTime1 % 60;
    var m = Math.floor(countTime1 / 60);
  
    $(".minutos").text(pad2(m)+':'+pad2(s));
   
    if(m+":"+s == '0:0'){
        $("#game-over").removeClass('hidden');
        $(".message-status").text("Tempo esgotado.");
        var score = $(".count-score").text();
        var fail = $(".count-fails").text();
        $(".score-status").text(score)
        $(".error-status").text(fail)
    }else{

    }

}



function timer() {
    show();
    if (countTime1-- > 0) {
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
     
        var current = countTime1;
        countTime1 += (m * 60) + s;
        
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
     
        var current = countTime1;
        countTime1 += (m * 60) + s;
        
        // only restart the counter loop if it was previously stopped
        if (current <= 0) {
            timer();
        } else {
            show();
        }
    }
    
}
startAddTime('start', 1, 0);