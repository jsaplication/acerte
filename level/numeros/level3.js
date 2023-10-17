function gerarPerguntasERespostas(quantidade, dificuldade) {
    var perguntasERespostas = [];
    var count = 1;
    while (perguntasERespostas.length < quantidade) {
        var operadores = ['+', '-', '*', '/'];
        if (dificuldade >= 4) {
            operadores.push('√');
        }
        if (dificuldade >= 7) {
            operadores.push('^', 'log', 'sin', 'cos', 'tan');
        }

        var operador = operadores[Math.floor(Math.random() * operadores.length)];
        var num1 = Math.floor(Math.random() * (10 * dificuldade)) + 1;
        var num2 = Math.floor(Math.random() * (10 * dificuldade)) + 1;

        var pergunta, resposta;
        switch (operador) {
            case '+':
                pergunta = num1 + ' ' + operador + ' ' + num2;
                resposta = num1 + num2;
                break;
            case '-':
                pergunta = num1 + ' ' + operador + ' ' + num2;
                resposta = num1 - num2;
                break;
            case '*':
                pergunta = num1 + ' ' + operador + ' ' + num2;
                resposta = num1 * num2;
                break;
            case '/':
                pergunta = num1 + ' ' + operador + ' ' + num2;
                resposta = (num1 / num2).toFixed(2);
                break;
            case '√':
                pergunta = '√' + num1;
                resposta = Math.sqrt(num1).toFixed(2);
                break;
            case '^':
                pergunta = num1 + '^' + num2;
                resposta = Math.pow(num1, num2).toFixed(2);
                break;
            case 'log':
                pergunta = 'log(' + num1 + ')';
                resposta = Math.log10(num1).toFixed(2);
                break;
            case 'sin':
                pergunta = 'sin(' + num1 + '°)';
                resposta = Math.sin((num1 * Math.PI) / 180).toFixed(2);
                break;
            case 'cos':
                pergunta = 'cos(' + num1 + '°)';
                resposta = Math.cos((num1 * Math.PI) / 180).toFixed(2);
                break;
            case 'tan':
                pergunta = 'tan(' + num1 + '°)';
                resposta = Math.tan((num1 * Math.PI) / 180).toFixed(2);
                break;
        }

        var perguntaExistente = perguntasERespostas.find(function(item) {
            return item.pergunta === pergunta && item.resposta === resposta;
        });

        if (!perguntaExistente) {
            perguntasERespostas.push({
                number: count++,
                pergunta: pergunta,
                resposta: resposta.toString(),
                description:'A resposta correta é: '+resposta.toString()
            });
        }
    }
    return perguntasERespostas;
}

var level = window.localStorage.getItem("sessionLevel");
var numerol = parseInt(level.match(/\d+/)[0]);
// Gera 10 perguntas e respostas com base na dificuldade de 1 a 10
var level3 = gerarPerguntasERespostas(10, numerol);
// console.log(perguntasDificeis);
