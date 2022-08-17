'use strict'

function dividir() {
    
    const numero1 = +document.getElementById('numero1').value
    const numero2 = +document.getElementById('numero2').value
    const numero3 = +document.getElementById('numero3').value
    const numero4 = +document.getElementById('numero4').value
    const formulario = document.getElementById('formulario')
    const resultado = document.getElementById('resultado')

    if (formulario.reportValidity()) {
        
        if (numero1 % 2 == 0 || numero1 % 3 == 0) {
            resultado.textContent = numero1
        }
        if (numero2 % 2 == 0 || numero2 % 3 == 0) {
            resultado.textContent += ` ${numero2}`
        }
        if (numero3 % 2 == 0 || numero3 % 3 == 0) {
            resultado.textContent += ` ${numero3}`
        }
        if (numero4 % 2 == 0 || numero4 % 3 == 0) {
            resultado.textContent += ` ${numero4}`
        }
    }
}

document.getElementById('button').addEventListener('click', dividir)