let result = document.getElementById('result');

function insert(num) { // inserindo os valores digitados no display
    let number = result.innerHTML;
    result.innerHTML = number + num;
}

function clean() { // limpando o display
    result.innerHTML = "";
}

function back() { // apagando os valores mostrados no display
    let newResult = result.innerHTML;
    result.innerHTML = newResult.substring(0, newResult.length -1); // diminuindo os caracteres do display um a um
}

function calculate() { // realizando os cálculos
    let newResult = result.innerHTML;

    if(newResult) { // se tiver algo dentro do display
        result.innerHTML = eval(newResult); // o eval computa e resolve todas as operações
    }
}