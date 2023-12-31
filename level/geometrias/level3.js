function setBg(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  return '#'+randomColor;
}


var level3 = [
	{	
		number: 1,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);"></div>',
		resposta: 'Mensagem',
		description:'A resposta correta é: Mensagem'
	},
	{	
		number: 2,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);"></div>',
		resposta: 'Perto',
		description:'A resposta correta é: Perto'
	},
	{	
		number: 3,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);"></div>',
		resposta: 'Quadro',
		description:'A resposta correta é: Quadro'
	},
	{	
		number: 4,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: circle(50% at 50% 50%);"></div>',
		resposta: 'Circulo',
		description:'A resposta correta é: Circulo'
	},
	{	
		number: 5,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: ellipse(25% 40% at 50% 50%);"></div>',
		resposta: 'Elipse',
		description:'A resposta correta é: Elipse'
	},
	{	
		number: 6,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(0 33%, 100% 33%, 100% 100%, 0% 100%);"></div>',
		resposta: 'Retangulo',
		description:'A resposta correta é: Retangulo'
	},
	{	
		number: 7,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);"></div>',
		resposta: 'Esquadro',
		description:'A resposta correta é: Esquadro'
	},
	{	
		number: 8,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(64% 13%, 64% 70%, 64% 85%, 0 99%, 0 0);"></div>',
		resposta: 'Windows',
		description:'A resposta correta é: Windows'
	}
	

]