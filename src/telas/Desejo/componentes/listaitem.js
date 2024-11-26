import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity, Alert, Image } from "react-native";
import { Card } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import Texto from '../../../componentes/Texto';
import styles from './estilos';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListaItem({ id, nome, preco, imagem }) {
  const navigation = useNavigation();
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  // Função para remover itens da Lista de Desejos
  async function removeProdListaDesejos(id) {
    const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
    const listaDesejos = JSON.parse(listaDesejosSalva);

    const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item) => item.id !== id));
    await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
    Alert.alert("Produto removido da Lista de Desejos.");
    console.log("Remove item da lista.");

    navigation.reset({ index: 0, routes: [{ name: 'Lista de Desejos' }] });
  }

  return (
    <View style={styles.column}>
      <Card mode='contained' style={styles.card}>
        <Card.Content>
          {/* Exibe a imagem apenas se ela carregar com sucesso */}
          {isImageLoaded && (
            <Image
              source={imagem}
              style={styles.image}
              onError={() => setIsImageLoaded(false)} // Oculta a imagem em caso de erro
              resizeMode="contain"
            />
          )}
          <Texto>{preco}</Texto>
          <Texto style={styles.nomeProduto}>{nome}</Texto>
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => removeProdListaDesejos(id)}>
            <Ionicons name="trash" size={20} color="black" />
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
}
