import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
  //define a estilização padrão do campo
  let estilo = styles.texto;

  //verifica se deve exibir a fonte em negrito
  if (style?.fontWeight == "bold") {
    //negrito, muda a estilização
    estilo = styles.textoNegrito;
  }

  return <Text style={[style, styles.texto,]}>{children}</Text>;
}

export function TextoComTamanhoEspecifico({ children, style }) {
  return <Text style={[style, styles.lugarDescricao]}>{children}</Text>;
 
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: "SpaceGRegular",
  },
  textoNegrito: {
    fontFamily: "SpaceGBold",
    fontWeight: "normal",
  },
  lugarDescricao: {
    fontFamily: 'SpaceGBold',
    fontSize: 22,
    color: '#555',
    lineHeight: 24,
    marginTop: 10,
  },
});
