'use strict';

function mostrarResultado() {
    
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');
    const formulario = document.getElementById('formulario');

    let conta = 0;

    if (formulario.reportValidity()) {
        
        if (numero1 > numero2) {
            conta = numero1 - numero2;
        } else{
            conta = numero2 - numero1;
        }

        resultado.textContent = conta;
    }
}

document.getElementById('button').addEventListener('click', mostrarResultado);