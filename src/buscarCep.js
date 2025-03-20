import React, { useState } from 'react';
import axios from 'axios';

const BuscarCep = () => {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState({
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const handleCepChange = (e) => setCep(e.target.value);

  const handleBlurCep = async () => {
    if (cep.length === 8) {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const { logradouro, bairro, localidade, uf } = response.data;
        setDados({
          endereco: logradouro || '',
          bairro: bairro || '',
          cidade: localidade || '',
          estado: uf || '',
        });
      };
  }

  return (
    <div>
      <h1>Buscar Dados do CEP</h1>
      <input
        type="text"
        value={cep}
        onChange={handleCepChange}
        onBlur={handleBlurCep}
        maxLength="8"
        placeholder="Digite o CEP"
      />

      {dados.endereco ? (
        <div>
          <h2>Dados do CEP:</h2>
          <p>Logradouro: {dados.endereco}</p>
          <p>Bairro: {dados.bairro}</p>
          <p>Cidade: {dados.cidade}</p>
          <p>UF: {dados.estado}</p>
        </div>
      ) : (
        <p>Informe um CEP válido para ver os dados.</p>
      )}
    </div>
  );
};

export default BuscarCep;