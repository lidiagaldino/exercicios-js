'use strict'

function positivo() {
    
    const numero = +document.getElementById('numero1').value
    const resultado = document.getElementById('resultado')
    const formulario = document.getElementById('formulario')

    let transforma = 0

    if (formulario.reportValidity()) {
        
        if (numero < 0) {
            transforma = numero * -1
        } else{
            transforma = numero
        }

        resultado.textContent = transforma
    }
}

document.getElementById('button').addEventListener('click', positivo)