import React, { useState, useEffect } from 'react';

function App() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState(null);

  const buscarCep = async (cep) => {
    if (cep.length === 8) {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await resposta.json();
        setDados(data);
      
    }
  };

  useEffect(() => {
      buscarCep(cep);
  }, [cep]); 

  return (
    <div>
      <h1>Buscar Dados do CEP</h1>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      
      {dados ? (
        <div>
          <h2>Dados do CEP:</h2>
          <p>Logradouro: {dados.logradouro}</p>
          <p>Bairro: {dados.bairro}</p>
          <p>Cidade: {dados.localidade}</p>
          <p>UF: {dados.uf}</p>
        </div>
      ) : (
        <p>Informe um CEP válido para ver os dados.</p>
      )}
    </div>
  );
}

export default App;
