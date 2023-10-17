function setBg(){
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
 

  if(randomColor == 'fff'){
  	 return '#333';
  }else if(randomColor == 'ffffff'){
  	 return '#333';
  }else{
  	 return '#'+randomColor;
  }
}


var level1 = [
	{	
		number: 1,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>',
		resposta: 'Triangulo',
		description:'A resposta correta é: Triangulo'
	},
	{	
		number: 2,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);"></div>',
		resposta: 'Trapézio',
		description:'A resposta correta é: Trapézio'
	},
	{	
		number: 3,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);"></div>',
		resposta: 'Paralelogramo',
		description:'A resposta correta é: Paralelogramo'
	},
	{	
		number: 4,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);"></div>',
		resposta: 'Losango',
		description:'A resposta correta é: Losango'
	},
	{	
		number: 5,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);"></div>',
		resposta: 'Hexágono',
		description:'A resposta correta é: Hexágono'
	},
	{	
		number: 6,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);"></div>',
		resposta: 'Heptágono',
		description:'A resposta correta é: Heptágono'
	},
	{	
		number: 7,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);"></div>',
		resposta: 'Octágono',
		description:'A resposta correta é: Octágono'
	},
	{	
		number: 8,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);"></div>',
		resposta: 'Nonagon',
		description:'A resposta correta é: Nonagon'
	},
	{	
		number: 9,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);"></div>',
		resposta: 'Pentágono',
		description:'A resposta correta é: Pentágono'
	},
	{	
		number: 10,
		pergunta: '<div style="background:'+setBg()+';width: 100px; height: 100px; clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);"></div>',
		resposta: 'Decágono',
		description:'A resposta correta é: Decágono'
	},

	

]