document.addEventListener('DOMContentLoaded', () => {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const calcularBtn = document.getElementById('calcular-btn');
    const resultDisplay = document.getElementById('result-display');
    const imcValue = document.getElementById('imc-value');
    const imcClassification = document.getElementById('imc-classification');
    const imcMarker = document.getElementById('imc-marker');
    const tableRows = document.querySelectorAll('tbody tr');

    const formatNumber = (num) => {
        let str = num.toString().replace(',', '.');
        return parseFloat(str);
    };

    const getClassification = (imc) => {
        if (imc < 18.5) return { text: 'Abaixo do peso', color: 'var(--color-underweight)', index: 0 };
        if (imc >= 18.5 && imc <= 24.9) return { text: 'Peso normal', color: 'var(--color-normal)', index: 1 };
        if (imc >= 25 && imc <= 29.9) return { text: 'Sobrepeso', color: 'var(--color-overweight)', index: 2 };
        return { text: 'Obesidade', color: 'var(--color-obese)', index: 3 };
    };

    const calculateMarkerPosition = (imc) => {
        const minImc = 15;
        const maxImc = 40;
        let percentage = ((imc - minImc) / (maxImc - minImc)) * 100;
        
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        
        return percentage;
    };

    const calculateIMC = () => {
        const peso = formatNumber(pesoInput.value);
        const altura = formatNumber(alturaInput.value);

        if (!peso || !altura || peso <= 0 || altura <= 0) {
            pesoInput.style.borderColor = !peso || peso <= 0 ? 'var(--color-obese)' : 'var(--input-border)';
            alturaInput.style.borderColor = !altura || altura <= 0 ? 'var(--color-obese)' : 'var(--input-border)';
            return;
        }

        pesoInput.style.borderColor = 'var(--input-border)';
        alturaInput.style.borderColor = 'var(--input-border)';

        const alturaMetros = altura > 3 ? altura / 100 : altura;
        const imc = peso / (alturaMetros * alturaMetros);
        
        const classification = getClassification(imc);

        imcValue.textContent = imc.toFixed(1);
        imcValue.style.color = classification.color;
        
        imcClassification.textContent = classification.text;
        imcClassification.style.backgroundColor = `${classification.color}20`;
        imcClassification.style.color = classification.color;

        const position = calculateMarkerPosition(imc);
        imcMarker.style.left = `${position}%`;

        tableRows.forEach(row => row.classList.remove('status-highlight'));
        tableRows[classification.index].classList.add('status-highlight');

        resultDisplay.classList.remove('empty');
    };

    calcularBtn.addEventListener('click', calculateIMC);

    pesoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateIMC();
    });
    
    alturaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateIMC();
    });
});
