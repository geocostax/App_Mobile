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

export default function Detalhes({ nome, logo, detalhes, preco, botao }) {
  return (
    <>
      <StatusBar />

      <View style={styles.produtin}>
        <View style={styles.logotipo}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
          <Texto style={styles.nome}>{nome}</Texto>
        </View>
        <Texto style={styles.descricao}>{detalhes}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <Botao textoBotao={botao} clickBotao={() => (Alert.alert("Temos algumas opções a abaixo, O que acha?"))} />
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
    //fontFamily: "SpaceGBold",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 23,
    paddingLeft: 11,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 20,
  },
  preco: {
    color: "#2A9F85",
    fontSize: 22,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 75,
  },
  logotipo: {
    flexDirection: "row",
  },
});
