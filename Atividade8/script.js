function calcularExercicio1(n1, n2, n3) {
    return `A soma dos três números é:${n1+n2+n3}, o quadrado do primeiro é:${n1*n1} e o quadrado do segundo é:${n2*n2}`;
}

function exercicio1(numeros) {
    return calcularExercicio1.apply(null, numeros);
}

function exercicio2(letras) {
    let palavrasFormadas = [];
    let palavrasSet = new Set();

    let limite = 0; 
    while (palavrasSet.size < 10 && limite < 1000) {
        let copia = [...letras];
        for (let i = copia.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        palavrasSet.add(copia.join(''));
        limite++;
    }

    Array.prototype.push.apply(palavrasFormadas, Array.from(palavrasSet));
    return palavrasFormadas;
}

document.getElementById('btn1').addEventListener('click', () => {
    const input = document.getElementById('input1').value;
    const nums = input.split(',').map(n => Number(n.trim()));
    const output = document.getElementById('output1');
    
    if (nums.length !== 3 || nums.some(isNaN)) {
        output.textContent = "Por favor, insira exatamente 3 números válidos separados por vírgula.";
        return;
    }
    output.textContent = exercicio1(nums);
});

document.getElementById('btn2').addEventListener('click', () => {
    const input = document.getElementById('input2').value;
    const letras = input.split(',').map(l => l.trim().toUpperCase()).filter(l => l.length === 1);
    const output = document.getElementById('output2');

    if (letras.length !== 5) {
        output.textContent = "Por favor, insira exatamente 5 letras válidas separadas por vírgula.";
        return;
    }
    output.innerHTML = exercicio2(letras).join('<br>');
});
