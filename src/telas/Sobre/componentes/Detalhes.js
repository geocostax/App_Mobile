import React from "react";
import {
  StyleSheet,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import Logo from "../../../../assets/logoamarela.png";
import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/botao";
import Textoo, { TextoComTamanhoEspecifico } from "../../../componentes/Texto";
import brook from "../../../../assets/restaurantebar.jpg";

export default function Detalhes({ nome, detalhes, texto, Textoo }) {
  return (
    <>
      <StatusBar />

      <View style={styles.produtin}>
       
          
          <Texto style={styles.nome}>{nome}</Texto>
          <TextoComTamanhoEspecifico style={styles.texto}>{detalhes}</TextoComTamanhoEspecifico>
          <Image source={brook} style={styles.bar} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  produtin: {
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  nome: {
    color: "green",
    fontFamily: "SpaceGBold",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 23,
    paddingLeft: 11,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 22,
  },
  bar: {
    width: 300,
    height: 300, 
    aspectRatio: 3 / 2, // Mantém a proporção da imagem (largura:altura = 3:2)
    alignSelf: 'center', // Centraliza a imagem horizontalmente
    marginBottom: 10, // Espaço entre a imagem e o conteúdo acima
  },
});
