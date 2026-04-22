function encontrarMaior(a, b, c) {
    return Math.max(a, b, c);
}

function ordenarCrescente(a, b, c) {
    let numeros = [a, b, c];
    return numeros.sort((x, y) => x - y);
}

function verificarPalindromo(str) {
    const textoLimpo = str.replace(/\s+/g, '').toLowerCase();
    const textoInvertido = textoLimpo.split('').reverse().join('');
    return textoLimpo === textoInvertido && textoLimpo.length > 0;
}

function obterNumeros(id1, id2, id3) {
    const n1 = parseFloat(document.getElementById(id1).value);
    const n2 = parseFloat(document.getElementById(id2).value);
    const n3 = parseFloat(document.getElementById(id3).value);
    return [n1, n2, n3];
}

function exibirResultado(idElemento, mensagem) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = mensagem;
    elemento.classList.add('show');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-maior').addEventListener('click', () => {
        const [n1, n2, n3] = obterNumeros('num1-1', 'num1-2', 'num1-3');
        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            exibirResultado('resultado-1', 'Por favor, preencha todos os três números.');
            return;
        }
        const maior = encontrarMaior(n1, n2, n3);
        exibirResultado('resultado-1', `O maior número é: ${maior}`);
    });

    document.getElementById('btn-ordenar').addEventListener('click', () => {
        const [n1, n2, n3] = obterNumeros('num2-1', 'num2-2', 'num2-3');
        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            exibirResultado('resultado-2', 'Por favor, preencha todos os três números.');
            return;
        }
        const ordenados = ordenarCrescente(n1, n2, n3);
        exibirResultado('resultado-2', `Ordem crescente: ${ordenados.join(', ')}`);
    });

    document.getElementById('btn-palindromo').addEventListener('click', () => {
        const texto = document.getElementById('texto-palindromo').value;
        if (!texto.trim()) {
            exibirResultado('resultado-3', 'Por favor, digite um texto.');
            return;
        }
        const isPalindromo = verificarPalindromo(texto);
        if (isPalindromo) {
            exibirResultado('resultado-3', `"${texto}" É um palíndromo!`);
        } else {
            exibirResultado('resultado-3', `"${texto}" NÃO é um palíndromo.`);
        }
    });
});
