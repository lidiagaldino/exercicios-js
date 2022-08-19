'use strict'

const container = document.querySelector('.tab')

function show(event) {
    const botao = event.target.textContent
    hide();
    let apertar = document.getElementById(botao)

    apertar.classList.toggle("show");
}

function hide() {
    document.getElementById('inicio').classList.remove('show');
    document.getElementById('um').classList.remove('show');
    document.getElementById('dois').classList.remove('show');
    document.getElementById('tres').classList.remove('show');
    document.getElementById('quatro').classList.remove('show');
    document.getElementById('cinco').classList.remove('show');
    document.getElementById('seis').classList.remove('show');
}

container.addEventListener('click', show)

//ex1

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

//ex2

function positivo() {
    
    const numero = +document.getElementById('numero1ex2').value
    const resultado = document.getElementById('resultado2')
    const formulario = document.getElementById('formulario2')

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

document.getElementById('button2').addEventListener('click', positivo)

//ex3

function calcularMedia() {
    
    const nota1 = +document.getElementById('numero1ex3').value
    const nota2 = +document.getElementById('numero2ex3').value
    const nota3 = +document.getElementById('numero3ex3').value
    const nota4 = +document.getElementById('numero4ex3').value
    const formulario = document.getElementById('formulario3')
    const resultado = document.getElementById('resultado3')

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

document.getElementById('button3').addEventListener('click', calcularMedia)

//ex4

const botao = document.getElementById('button4')

function calcularMedia2() {
    
    const nota1 = +document.getElementById('numero1ex4').value
    const nota2 = +document.getElementById('numero2ex4').value
    const nota3 = +document.getElementById('numero3ex4').value
    const nota4 = +document.getElementById('numero4ex4').value
    const formulario = document.getElementById('formulario4')
    const resultado = document.getElementById('resultado4')

    if (formulario.reportValidity()) {
        
        let media = (nota1 + nota2 + nota3 + nota4)/4
        let condicao = ''

        if (media >= 7) {
            condicao = 'aprovado'
            resultado.textContent = `O aluno foi ${condicao} e teve a média nota ${media.toFixed(2)}`
        } else{
            let exame = parseFloat(prompt('Voce ficou abaixo da média, digite a nota de exame'))
            let mediaExame = (media + exame)/2
            
            if (mediaExame >= 5 ) {
                condicao = 'aprovado em exame'
            } else{
                condicao = 'reprovado em exame'
            }

            resultado.textContent = `O aluno foi ${condicao} e teve a média nota ${mediaExame.toFixed(2)}`
        }
    }
}

botao.addEventListener('click', calcularMedia2)

//ex5

function dividir() {
    
    const numero1 = +document.getElementById('numero1ex5').value
    const numero2 = +document.getElementById('numero2ex5').value
    const numero3 = +document.getElementById('numero3ex5').value
    const numero4 = +document.getElementById('numero4ex5').value
    const formulario = document.getElementById('formulario5')
    const resultado = document.getElementById('resultado5')

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

document.getElementById('button5').addEventListener('click', dividir)

//ex6

function maior() {
    
    const numero1 = +document.getElementById('numero1ex6').value
    const formulario = document.getElementById('formulario6')
    const resultado = document.getElementById('resultado6')

    if (formulario.reportValidity()) {
        
        if (numero1 <= 3) {
            resultado.textContent = numero1
        } else {
            resultado.textContent = 'Não é menor que três'
        }
    }
}

document.getElementById('button6').addEventListener('click', maior)