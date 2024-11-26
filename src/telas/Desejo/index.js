import React, { useState, useEffect } from "react";
import { View, FlatList, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import ListaItem from './componentes/listaitem';
import styles from './componentes/estilos';
import Botao from '../../componentes/botao';
import Texto from '../../componentes/Texto';

export default function Index() {
    const [listData, setListData] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused(); // Verifica se a tela está em foco

    // Função para capturar os dados do AsyncStorage
    const loadListData = async () => {
        try {
            const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
            const storedObject = storedObjectJSON ? JSON.parse(storedObjectJSON) : [];
            setListData(storedObject);
        } catch (error) {
            console.error("Erro ao carregar lista:", error);
        }
    };

    // Carrega a lista toda vez que a tela for exibida
    useEffect(() => {
        if (isFocused) loadListData();
    }, [isFocused]);

    // Função para limpar a Lista de Desejos
    const clearAsyncStorage = async () => {
        try {
            await AsyncStorage.removeItem('ListaDesejos');
            Alert.alert("Sucesso", "Lista de Desejos foi excluída com sucesso.");
            setListData([]); // Atualiza a lista após limpar
        } catch (error) {
            console.error("Erro ao limpar lista:", error);
        }
    };

    return (
        <View style={styles.listaContainer}>
            <Texto style={styles.titulo}>Lista de Desejos</Texto>
            <Texto style={styles.textoLista}>
                Estes são os produtos adicionados na sua Lista de Desejos
            </Texto>

            <FlatList
                data={listData}
                renderItem={({ item }) => <ListaItem {...item} />} // Passa o objeto completo como props
                keyExtractor={(item) => item.id.toString()} // Garante chave única com 'id'
                numColumns={2}
            />
            <Botao textoBotao="Apagar Lista de Desejos" clickBotao={clearAsyncStorage} />
        </View>
    );
}
