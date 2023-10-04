function playGame(e){
	var name = $(e).attr('name');
	window.localStorage.setItem('gameType', name);
	var el = document.querySelector(".list-level");
	el.classList.remove("closeModal");
	el.classList.add("openModal");
}

function openLevel(e){
      var level = e.getAttribute("name");
      window.localStorage.setItem("sessionLevel", level);
      window.location.href = '.openGame.game.html';
}
function closeListLevel(){
	console.log('click')
	var el = document.querySelector(".list-level");
	el.classList.remove("openModal");
	el.classList.add("closeModal");
}

// function closeModal(m){
//    var close =  m.animate([
//                   // keyframes
//                   { transform: 'translateY(0px)'},
//                   { transform: 'translateY(-500px)'},
//                   { transform: 'translateY(-1000px)'}
                
//                 ], {
//                   // timing options
//                   duration: 1000,
                 	
//                 });

//    close.finish();
// }

