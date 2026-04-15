let R = [];
const el = id => document.getElementById(id);
const calc = (condicao) => R.filter(condicao).length;

el('form-pesquisa').addEventListener('submit', (e) => {
    e.preventDefault();
    if (R.length < 45) {
        R.push({ i: +el('idade').value, s: el('sexo').value, o: +el('opiniao').value });
        atualizar();
    }
    e.target.reset(); 
    el('idade').focus();
});

el('btn-simular').addEventListener('click', () => {
    while (R.length < 45) {
        R.push({
            i: Math.floor(Math.random() * 60) + 15,
            s: ['masculino', 'feminino', 'outros'][Math.floor(Math.random() * 3)],
            o: Math.floor(Math.random() * 4) + 1
        });
    }
    atualizar();
});

el('btn-reiniciar').addEventListener('click', () => {
    R = [];
    atualizar();
    el('container-form').classList.remove('oculto');
    el('msg-conclusao').classList.add('oculto');
});

el('btn-tema').addEventListener('click', () => {
    const root = document.documentElement;
    if (root.getAttribute('data-theme') === 'dark') {
        root.removeAttribute('data-theme');
        el('btn-tema').textContent = 'Modo Escuro';
    } else {
        root.setAttribute('data-theme', 'dark');
        el('btn-tema').textContent = 'Modo Claro';
    }
});

function atualizar() {
    let t = R.length;
    el('contador').textContent = t;
    el('progresso').style.width = (t / 45 * 100) + '%';

    if (t === 45) {
        el('container-form').classList.add('oculto');
        el('msg-conclusao').classList.remove('oculto');
    }

    if (!t) {
        ['media-idade','maior-idade','menor-idade','qtd-pessimo','pct-otimo-bom'].forEach(id => el(`res-${id}`).textContent = '--');
        ['m','f','o'].forEach(id => el(`res-qtd-${id}`).textContent = '0');
        return;
    }

    let idades = R.map(r => r.i);
    el('res-media-idade').textContent = (idades.reduce((a, b) => a + b, 0) / t).toFixed(1) + ' anos';
    el('res-maior-idade').textContent = Math.max(...idades) + ' anos';
    el('res-menor-idade').textContent = Math.min(...idades) + ' anos';
    el('res-qtd-pessimo').textContent = calc(r => r.o === 1);
    el('res-pct-otimo-bom').textContent = ((calc(r => r.o >= 3) / t) * 100).toFixed(1) + '%';
    el('res-qtd-m').textContent = calc(r => r.s === 'masculino');
    el('res-qtd-f').textContent = calc(r => r.s === 'feminino');
    el('res-qtd-o').textContent = calc(r => r.s === 'outros');
}
