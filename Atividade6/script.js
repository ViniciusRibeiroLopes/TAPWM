function verificarTriangulo() {
    const inputA = document.getElementById('ladoA').value;
    const inputB = document.getElementById('ladoB').value;
    const inputC = document.getElementById('ladoC').value;

    const divResultado = document.getElementById('resultado');

    divResultado.className = 'resultado';

    if (inputA.trim() === '' || inputB.trim() === '' || inputC.trim() === '') {
        mostrarResultado('Por favor, preencha todos os campos.', 'error');
        return;
    }

    const a = parseFloat(inputA);
    const b = parseFloat(inputB);
    const c = parseFloat(inputC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        mostrarResultado('Os valores inseridos não são números válidos.', 'error');
        return;
    }

    if (a <= 0 || b <= 0 || c <= 0) {
        mostrarResultado('Os lados do triângulo devem ser maiores que zero.', 'error');
        return;
    }

    if (a + b > c && a + c > b && b + c > a) {
        let tipo = '';

        if (a === b && b === c) {
            tipo = 'Equilátero (todos os lados iguais)';
        } else if (a === b || a === c || b === c) {
            tipo = 'Isósceles (dois lados iguais)';
        } else {
            tipo = 'Escaleno (todos os lados diferentes)';
        }

        mostrarResultado(`Os valores formam um triângulo <strong>${tipo}</strong>.`, 'success');
    } else {
        mostrarResultado('Os valores informados <strong>NÃO</strong> formam um triângulo.', 'error');
    }
}

function mostrarResultado(mensagem, tipo) {
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = mensagem;
    divResultado.classList.add(tipo);
    divResultado.classList.remove('hidden');

    const mensagemLimpa = mensagem.replace(/<\/?[^>]+(>|$)/g, "");
    alert(mensagemLimpa);
}
