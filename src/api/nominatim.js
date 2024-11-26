// src/api/nominatim.js
import axios from 'axios';

// Configuração da instância Axios para a Nominatim API
const nominatimApi = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org',
  headers: {
    'User-Agent': 'worldcup/1.0.0 (geovannycosta45@gmail.com)', 
  },
});

export default nominatimApi;

// Função para obter coordenadas a partir de um endereço
export const getCoordinatesByAddress = async (address) => {
  try {
    // Fazendo a requisição para a API Nominatim
    const response = await nominatimApi.get('/search', {
      params: {
        q: address,           // O endereço a ser geocodificado
        format: 'json',       // Formato de resposta (json)
        addressdetails: 1,    // Detalhes do endereço
        limit: 1,             // Limite de resultados
      },
    });

    // Se a resposta tiver resultados, retorna a latitude e longitude
    if (response.data && response.data.length > 0) {
      const { lat, lon } = response.data[0];
      return [parseFloat(lon), parseFloat(lat)];  // Retorna [longitude, latitude]
    } else {
      console.error('Nenhum resultado encontrado');
      return null;
    }
  } catch (error) {
    // Caso ocorra algum erro, imprime no console
    console.error('Erro ao buscar coordenadas:', error);
    return null;
  }
};
