function openLevel(e){
      var level = e.getAttribute("name");
      window.localStorage.setItem("sessionLevel", level);
      window.location.href = '.openGame.game.html';
      // window.location.href = 'game.html';
}
function back(e){
      window.location.href = '.home.';
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
