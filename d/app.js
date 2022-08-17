'use strict'

const botao = document.getElementById('button')

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

        if (media >= 7) {
            condicao = 'aprovado'
            resultado.textContent = `O aluno foi ${condicao} e teve a média nota ${media.toFixed(2)}`
        } else{
            let exame = parseFloat(prompt('Voce ficou abaixo da média, digite a nota de exame'))
            let mediaExame = (media + exame)/2
            
            if (mediaExame <= 5 ) {
                condicao = 'aprovado em exame'
            } else{
                condicao = 'reprovado em exame'
            }

            resultado.textContent = `O aluno foi ${condicao} e teve a média nota ${mediaExame.toFixed(2)}`
        }
    }
}

botao.addEventListener('click', calcularMedia)