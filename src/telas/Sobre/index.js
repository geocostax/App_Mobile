import React, { useState, useEffect } from "react";
import { FlatList, View, Image, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import CameraComponent from "./componentes/CameraComponent";
import { getCoordinatesByAddress } from '../../api/nominatim';  // Importa a função de geocodificação
import { getRoute } from '../../api/openRouteService';  // Importa a função de rota

export default function Sobre({ topo, detalhes, itens }) {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);
  const [originCoordinates, setOriginCoordinates] = useState(null);  // Coordenadas do local de origem
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);  // Coordenadas do local de destino
  const [route, setRoute] = useState(null);  // Dados da rota
  const [isLocationVisible, setIsLocationVisible] = useState(false); // Estado para controle da visibilidade

  const handleCapture = (uri) => {
    setPhotoUri(uri);
    setIsCameraVisible(false);
  };

  const renderItem = ({ item: { nome, imagem } }) => (
    <View>
      <Image source={imagem} />
      <Text>{nome}</Text>
    </View>
  );

  useEffect(() => {
    const fetchCoordinatesAndRoute = async () => {
      const originAddress = "R. Santo André, 680 - Boa Vista, São Caetano do Sul - SP";
      const destinationAddress = "Rua dos Três Irmãos, 121 - Morumbi, São Paulo - SP";

      const originCoords = await getCoordinatesByAddress(originAddress);
      setOriginCoordinates(originCoords);

      const destinationCoords = await getCoordinatesByAddress(destinationAddress);
      setDestinationCoordinates(destinationCoords);

      if (originCoords && destinationCoords) {
        const routeData = await getRoute(originCoords, destinationCoords);
        setRoute(routeData);  // Armazena a rota no estado
      } else {
        console.error('Erro ao obter coordenadas para origem ou destino.');
      }
    };

    fetchCoordinatesAndRoute();
  }, []);

  // Função para formatar coordenadas para 6 casas decimais
  const formatCoordinate = (coord) => {
    return coord ? coord.toFixed(6) : null;
  };

  const toggleLocationVisibility = () => {
    setIsLocationVisible(!isLocationVisible); // Alterna entre verdadeiro e falso
  };

  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={renderItem}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => (
          <>
            <Topo {...topo} />
            <Detalhes {...detalhes} />

            {/* Botão para mostrar/ocultar localização */}
            <TouchableOpacity onPress={toggleLocationVisibility} style={styles.button}>
              <Text style={styles.buttonText}>{isLocationVisible ? "Ocultar Localização" : "Mostrar Localização"}</Text>
            </TouchableOpacity>

            {/* Exibe as coordenadas da origem e do destino se isLocationVisible for verdadeiro */}
            {isLocationVisible && (
              <>
                {/* Localização de Origem */}
                <Text style={styles.sectionTitle}>Localização de Origem</Text>
                {originCoordinates ? (
                  <View style={styles.coordinateContainer}>
                    <Text style={styles.label}>Longitude:</Text>
                    <Text style={styles.value}>{formatCoordinate(originCoordinates[0])}</Text>
                    <Text style={styles.label}>Latitude:</Text>
                    <Text style={styles.value}>{formatCoordinate(originCoordinates[1])}</Text>
                  </View>
                ) : (
                  <Text>Carregando coordenadas de origem...</Text>
                )}

                {/* Localização do Restaurante */}
                <Text style={styles.sectionTitle}>Localização do Restaurante</Text>
                {destinationCoordinates ? (
                  <View style={styles.coordinateContainer}>
                    <Text style={styles.label}>Longitude:</Text>
                    <Text style={styles.value}>{formatCoordinate(destinationCoordinates[0])}</Text>
                    <Text style={styles.label}>Latitude:</Text>
                    <Text style={styles.value}>{formatCoordinate(destinationCoordinates[1])}</Text>
                  </View>
                ) : (
                  <Text>Carregando coordenadas do restaurante...</Text>
                )}

                {/* Rota */}
                {route ? (
                  <View style={styles.routeContainer}>
                    <Text style={styles.sectionTitle}>Distância da Rota</Text>
                    <Text style={styles.value}>{route.summary.distance} metros</Text>
                    <Text style={styles.sectionTitle}>Tempo Estimado</Text>
                    <Text style={styles.value}>{(route.summary.duration / 60).toFixed(2)} minutos</Text>
                  </View>
                ) : (
                  <Text>Carregando rota...</Text>
                )}
              </>
            )}

            {/* Botão para abrir a câmera */}
            <TouchableOpacity onPress={() => setIsCameraVisible(true)} style={styles.button}>
              <Text style={styles.buttonText}>Abrir Câmera</Text>
            </TouchableOpacity>

            {photoUri && <Image source={{ uri: photoUri }} style={{ width: 100, height: 100 }} />}
          </>
        )}
      />

      {/* Modal da Câmera */}
      <Modal
        visible={isCameraVisible}
        onRequestClose={() => setIsCameraVisible(false)}
        transparent={false}
      >
        <CameraComponent onCapture={handleCapture} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#333',
  },
  coordinateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  routeContainer: {
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#800080',  // Cor de fundo para o botão
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,  // Adiciona espaçamento entre os botões
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',  // Cor do texto do botão
    fontSize: 16,
  },
});
