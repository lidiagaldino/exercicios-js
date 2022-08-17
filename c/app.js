'use strict'

function calcularMedia() {
    
    const nota1 = +document.getElementById('numero1').value
    const nota2 = +document.getElementById('numero2').value
    const nota3 = +document.getElementById('numero3').value
    const nota4 = +document.getElementById('numero4').value
    const formulario = document.getElementById('formulario')
    const resultado = document.getElementById('resultado')

    if (formulario.reportValidity()) {
        
        let media = (nota1 + nota2 + nota3 + nota4)/4
        let condicao = ''

        if (media >= 5) {
            condicao = 'aprovado'
        } else {
            condicao = 'reprovado'
        }

        resultado.textContent = `O aluno foi ${condicao} e teve a média nota ${media.toFixed(2)}`
    }
}

document.getElementById('button').addEventListener('click', calcularMedia)