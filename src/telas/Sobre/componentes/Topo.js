import React from "react";
import { StyleSheet, Dimensions, Image, StatusBar } from "react-native";

import Header from "../../../../assets/taca.png";
import Texto from "../../../componentes/Texto";

//Captura o tamanho da tela que esta rodando o app
const width = Dimensions.get("screen").width;

export default function Topo({ titulo }) {
  return (
    <>
      <StatusBar />
      <Image source={Header} style={styles.topo} />
      </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100",
    height: (1500 / 1680) * width,
  },
});
