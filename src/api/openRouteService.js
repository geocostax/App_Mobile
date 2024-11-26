// src/api/openRouteService.js
import axios from 'axios';

// Substitua pela sua chave de API do OpenRouteService
const OPENROUTESERVICE_API_KEY = '5b3ce3597851110001cf6248b869052ece25439c9fc72ed8d16fb470';

// Configuração do Axios com a chave da API
const openRouteServiceApi = axios.create({
  baseURL: 'https://api.openrouteservice.org',
  headers: {
    Authorization: OPENROUTESERVICE_API_KEY,  // Incluindo a chave de API no cabeçalho
  },
});

export default openRouteServiceApi;

// Função para obter rota entre duas coordenadas (início e destino)
export const getRoute = async (start, end) => {
  try {
    // Fazendo uma requisição POST para o endpoint de direções
    const response = await openRouteServiceApi.post('/v2/directions/driving-car', {
      coordinates: [start, end], // Coordenadas no formato [[lon, lat], [lon, lat]]
    });

    // Retorna a primeira rota encontrada
    const route = response.data.routes[0];
    return route;
  } catch (error) {
    // Caso ocorra algum erro, imprime no console
    console.error('Erro ao buscar rota:', error);
    return null;
  }
};
