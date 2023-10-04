function setBg(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  return '#'+randomColor;
}


var level2 = [
	{	
		number: 1,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);"></div>',
		resposta: 'Bisel',
		//description:'Junto com o ponto de interrogação, o ponto de exclamação pode ser usado para fazer uma pergunta carregada de emoção. Exemplo: Você não gosta mesmo de sorvete?!'
	},
	{	
		number: 2,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);"></div>',
		resposta: 'Encaixe',
		//description:'Junto com o ponto de interrogação, o ponto de exclamação pode ser usado para fazer uma pergunta carregada de emoção. Exemplo: Você não gosta mesmo de sorvete?!'
	},
	{	
		number: 3,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);"></div>',
		resposta: 'Seta esquerda',
		//description:'Junto com o ponto de interrogação, o ponto de exclamação pode ser usado para fazer uma pergunta carregada de emoção. Exemplo: Você não gosta mesmo de sorvete?!'
	},
	{	
		number: 4,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);"></div>',
		resposta: 'Seta direita',
		//description:'Junto com o ponto de interrogação, o ponto de exclamação pode ser usado para fazer uma pergunta carregada de emoção. Exemplo: Você não gosta mesmo de sorvete?!'
	},
	{	
		number: 5,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);"></div>',
		resposta: 'Ponto esquerdo',
		//description:'Junto com o ponto de interrogação, o ponto de exclamação pode ser usado para fazer uma pergunta carregada de emoção. Exemplo: Você não gosta mesmo de sorvete?!'
	},
	{	
		number: 6,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);"></div>',
		resposta: 'Ponto direito',
		//description:'Junto com o ponto de interrogação, o ponto de exclamação pode ser usado para fazer uma pergunta carregada de emoção. Exemplo: Você não gosta mesmo de sorvete?!'
	},
	{	
		number: 7,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);"></div>',
		resposta: 'Chevron esquedo',
		//description:'Junto com o ponto de interrogação, o ponto de exclamação pode ser usado para fazer uma pergunta carregada de emoção. Exemplo: Você não gosta mesmo de sorvete?!'
	},
	{	
		number: 8,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);"></div>',
		resposta: 'Chevron direito',
		//description:'Junto com o ponto de interrogação, o ponto de exclamação pode ser usado para fazer uma pergunta carregada de emoção. Exemplo: Você não gosta mesmo de sorvete?!'
	},
	{	
		number: 9,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);"></div>',
		resposta: 'Estrela',
		//description:'Junto com o ponto de interrogação, o ponto de exclamação pode ser usado para fazer uma pergunta carregada de emoção. Exemplo: Você não gosta mesmo de sorvete?!'
	}

	

]