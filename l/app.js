'use strict'

function maior() {
    
    const numero1 = +document.getElementById('numero1').value
    const formulario = document.getElementById('formulario')
    const resultado = document.getElementById('resultado')

    if (formulario.reportValidity()) {
        
        if (numero1 <= 3) {
            resultado.textContent = numero1
        } else {
            resultado.textContent = 'Não é menor que três'
        }
    }
}

document.getElementById('button').addEventListener('click', maior)