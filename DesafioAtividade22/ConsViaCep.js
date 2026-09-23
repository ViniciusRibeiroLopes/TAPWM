const axios = require('axios');
const cep = '18013-280';
const viacepUrl = `https://viacep.com.br/ws/${cep}/json`;

console.log(viacepUrl);

axios.get(viacepUrl)
    .then((response) => {
        if (response.status === 200) {
            const endereco = response.data;
            console.log('Endereço completo:');
            console.log(` CEP: ${endereco.cep}`);
            console.log(` Logradouro: ${endereco.logradouro}`);
            console.log(` Complemento: ${endereco.complemento}`);
            console.log(` Bairro: ${endereco.bairro}`);
            console.log(` Cidade: ${endereco.localidade}`);
            console.log(` UF: ${endereco.uf}`);
        } else {
            console.error('Erro na consulta do CEP:', response.status);
        }
    })
    .catch((error) => {
        console.error('Erro durante a comunicação com a API:', error);
    });
