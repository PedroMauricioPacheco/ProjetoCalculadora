console.log(document.getElementById('crl'))
function populaCampo(campo){        //recebe os valores dos botões e lança eles no input
    var valor = campo.innerText;
    console.log('val',valor)
    var campoTexto = document.getElementById('txt');
    campoTexto.value = campoTexto.value + valor;
}
function apagaCampo(campo){         // limpa o input
    var apaga =document.getElementById('txt');
    apaga.value = null 
}
function menosCampo(campo){         //apaga o primeiro campo da direita
    var menos = document.getElementById('txt').value
    document.getElementById('txt').value = menos.substring(0, menos.length-1);
    //atualiza o valor de 'txt' para ser uma substring de 'menos'. Isso remove o último caractere do valor do campo.
}
function calculo(campo){        //realiza o calculo da input e mostra o resultado 
    var calculo =document.getElementById('txt').value;
    if(calculo){      
        var resultado = eval(calculo)       //SE 'calculo' tiver valor,usa eval() para avaliar a expressão dentro de'calculo' e guarda em 'resultado'
        document.getElementById('txt').value=resultado      //atualiza o valor de 'txt' para ser igual ao resultado calculado

    }

}
document.getElementById('txt').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {  // Verifica a tecla que foi pressionada
        calculo();  
    }
});
