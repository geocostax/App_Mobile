import React from 'react';
import { ScrollView, View, StyleSheet, Image, Modal, TouchableOpacity, TextInput, Alert   } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph, Text, Button  } from 'react-native-paper';
import pizza from '../../../assets/pizza.png';
import temaki from '../../../assets/temaki.png';
import baka from '../../../assets/bacalhau.png';
import burguer from '../../../assets/burguer.png';
import paella from '../../../assets/paella.png';
import feijuca from '../../../assets/feijoada.png';
import taco from '../../../assets/taco.png';
import choripas from '../../../assets/choripan.png';
import Icon from 'react-native-vector-icons/FontAwesome'; // ou o ícone que você preferir





const Index = ({ topo, detalhes, itens }) => {

  async function addListaDesejos(id, nome, imagem) {
    //Produto favoritado
    const addProduto = [{
      id: id,
      nome: nome,
      imagem: imagem,
    }];

    //Verifica se a lista está vazia
    const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

    if (listaDesejosSalva == null) {
      //Lista vazia, insere o produto clicado
      const listaDesejosAtualizada = JSON.stringify(addProduto);

      //Insere no AsyncStorage
      await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
      Alert.alert("O produto foi incluído com sucesso na Lista de Desejos!");
      console.log("Adicionou produto");
      console.log(listaDesejosAtualizada);
    } else {
      //A lista já possui itens
      const listaDesejos = JSON.parse(listaDesejosSalva);

      // Verifica se o produto já está na lista
      const produtoExistente = listaDesejos.some(item => item.id === id);

      //Insere mais um produto na lista
      listaDesejos.push({ id: id, nome: nome, imagem: imagem });

      //Converte o Array para String
      const listaDesejosAtualizada = JSON.stringify(listaDesejos);

      //Insere no AsyncStorage
      await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
      Alert.alert("O produto foi incluído com sucesso na Lista de Desejos!");
      console.log("Mais um produto na lista");
      console.log(listaDesejosAtualizada);
    }
  }
   // Função para exibir o alerta com o preço
   const showAlert = (prato, preco) => {
    Alert.alert(
      "Preço",
      `${prato}: ${preco}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };


  

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={styles.title}>Nossas Culinárias</Text>
      <View style={styles.line}></View>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.titulo}>Pizza 🇮🇹</Title>
                <Paragraph style={styles.deliciaText}>Delícia da Italia</Paragraph>
                <Image source={pizza} style={styles.pizzazinha} resizeMode='contain' /> 
                <Button mode="contained" onPress={() => showAlert('Pizza De Peperoni (Totti)', 'R$ 57,90')}>Pedir</Button>
                <TouchableOpacity 
                    style={styles.heartButton} 
                    onPress={() => addListaDesejos(1, 'Pizza De Peperoni', pizza)} // Passando os parâmetros
                  >
                    <Icon name="heart" size={20} color="red" />
                  </TouchableOpacity>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.column}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.titulo}>Temaki 🇯🇵</Title>
                <Paragraph style={styles.deliciaText}>Delícia do Japão</Paragraph>
                <Image source={temaki} style={styles.temakizinho} resizeMode='contain' />
                <Button mode="contained" onPress={() => showAlert('Temaki Tradicional (Honda)', 'R$ 23,90')}>Pedir</Button>
                <TouchableOpacity 
                    style={styles.heartButton} 
                    onPress={() => addListaDesejos(2, 'Temaki Tradicional', temaki)} // Passando os parâmetros
                  >
                    <Icon name="heart" size={20} color="red" />
                  </TouchableOpacity>
              </Card.Content>
            </Card>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.titulo}>Bacalhau 🇵🇹</Title>
                <Paragraph style={styles.deliciaText}>Delícia de Portugal</Paragraph>
                <Image source={baka} style={styles.bacalhauPrato} resizeMode='contain' />
                <Button mode="contained" onPress={() => showAlert('Bacalhau Com Legumes (CR7)', 'R$ 42,90')}>Pedir</Button>
                <TouchableOpacity 
                    style={styles.heartButton} 
                    onPress={() => addListaDesejos(3, 'Bacalhau Com Legumes', baka)} // Passando os parâmetros
                  >
                    <Icon name="heart" size={20} color="red" />
                  </TouchableOpacity>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.column}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.titulo}>Hambúrguer 🇺🇸</Title>
                <Paragraph style={styles.deliciaText}>Delícia dos EUA</Paragraph>
                <Image source={burguer} style={styles.smashBurguer} resizeMode='contain' />
                <Button mode="contained" onPress={() => showAlert('Texas Burguer (Pulisic)', 'R$ 37,90')}>Pedir</Button>
                <TouchableOpacity 
                    style={styles.heartButton} 
                    onPress={() => addListaDesejos(4, 'Texas Burguer', burguer)} // Passando os parâmetros
                  >
                    <Icon name="heart" size={20} color="red" />
                  </TouchableOpacity>
              </Card.Content>
            </Card>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.titulo}>Paella 🇪🇸</Title>
                <Paragraph style={styles.deliciaText}>Delícia da Espanha</Paragraph>
                <Image source={paella} style={styles.paellaPrato} resizeMode='contain' />
                <Button mode="contained" onPress={() => showAlert('Paella Com Camarão (Cucurella)', 'R$ 72,90')}>Pedir</Button>
                <TouchableOpacity 
                    style={styles.heartButton} 
                    onPress={() => addListaDesejos(5, 'Paella Com Camarão', paella)} // Passando os parâmetros
                  >
                    <Icon name="heart" size={20} color="red" />
                  </TouchableOpacity>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.column}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.titulo}>Feijoada 🇧🇷</Title>
                <Paragraph style={styles.deliciaText}>Delícia do Brazil</Paragraph>
                <Image source={feijuca} style={styles.feijuquinha} resizeMode='contain' />
                <Button mode="contained" onPress={() => showAlert('Feijoada Completa (Neymar)', 'R$ 45,90')}>Pedir</Button>
                <TouchableOpacity 
                    style={styles.heartButton} 
                    onPress={() => addListaDesejos(6, 'Feijoada Completa', feijuca)} // Passando os parâmetros
                  >
                    <Icon name="heart" size={20} color="red" />
                  </TouchableOpacity>
              </Card.Content>
            </Card>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.titulo}>Taco 🇲🇽</Title>
                <Paragraph style={styles.deliciaText}>Delícia do México</Paragraph>
                <Image source={taco} style={styles.tacozito} resizeMode='contain' />
                <Button mode="contained" onPress={() => showAlert('Tacos (Ochoa)', 'R$ 32,90')}>Pedir</Button>
                <TouchableOpacity 
                    style={styles.heartButton} 
                    onPress={() => addListaDesejos(7, 'Tacos', taco)} // Passando os parâmetros
                  >
                    <Icon name="heart" size={20} color="red" />
                  </TouchableOpacity>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.column}>
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.titulo}>Choripán 🇦🇷</Title>
                <Paragraph style={styles.deliciaText}>Delícia da Argentina</Paragraph>
                <Image source={choripas} style={styles.tacozito} resizeMode='contain' />
                <Button mode="contained" onPress={() => showAlert('Choripan (Messi)', 'R$ 27,90')}>Pedir</Button>
                <TouchableOpacity 
                    style={styles.heartButton} 
                    onPress={() => addListaDesejos(8, 'Choripan', choripas)} // Passando os parâmetros
                  >
                    <Icon name="heart" size={20} color="red" />
                  </TouchableOpacity>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.halfColumn}>
          <Text style={styles.price}>{itens.preco}</Text>
          <Image source={{ uri: itens.imagem }} style={styles.image} resizeMode='contain' />
        </View>
      </View>
       {/* Novo texto e linha branca */}
       <Text style={styles.suggestionText}>Gostaria de sugerir algum prato novo? Digite abaixo sua sugestão!</Text>
      <View style={styles.whiteLine}></View>

      <TextInput
        style={styles.input}
        placeholder="Digite aqui..."
        placeholderTextColor="#999"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "black",
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    marginRight: 5,
  },
  halfColumn: {
    flex: 1,
  },
  card: {
    marginBottom: 10,
    borderColor: "green",
  },
  line: {
    width: '100%', // Largura da linha
    height: 3, // Altura da linha
    backgroundColor: 'green', // Cor da linha
    marginBottom: 15, // Espaçamento entre o texto e a linha
    justifyContent: 'center',
  },
  pizzazinha: {
    width: 120,
    height: 160,
    aspectRatio: 1,
    marginVertical: 10, // Ajusta o espaçamento da imagem
  },
  temakizinho: {
    width: 160,
    height: 160,
    aspectRatio: 1,
    marginVertical: 10, // Ajusta o espaçamento da imagem
  },
  bacalhauPrato: {
    width: 200,
    height: 180,
    aspectRatio: 1,
    marginVertical: 10, // Ajusta o espaçamento da imagem
  },
  smashBurguer: {
    width: 160,
    height: 160,
    aspectRatio: 1,
    marginVertical: 10, // Ajusta o espaçamento da imagem
  },
  paellaPrato: {
    width: 175,
    height: 175,
    aspectRatio: 1,
    marginVertical: 10, // Ajusta o espaçamento da imagem
  },
  feijuquinha: {
    width: 175,
    height: 175,
    aspectRatio: 1,
    marginVertical: 10, // Ajusta o espaçamento da imagem
  },
  tacozito: {
    width: 175,
    height: 175,
    aspectRatio: 1,
    marginVertical: 10, // Ajusta o espaçamento da imagem
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginVertical: 2,
    marginBottom: 2,
  },
  description: {
    color: "white",
    textAlign: 'center',
  },
  price: {
    color: "black",
    textAlign: 'center',
  },
  deliciaText: {
    fontSize: 18, // Ajusta o tamanho da fonte
  },
  titulo: {
    fontWeight: 'bold', // Deixa o título em negrito
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    paddingLeft: 10,
    color: "white",
  },
  suggestionText: {
    color: "white",       // Define a cor do texto como branco
    fontSize: 18,         // Define o tamanho da fonte como 18
    textAlign: 'center',  // Alinha o texto ao centro
    marginBottom: 10,
    marginBottom: 20,     // Adiciona um espaçamento inferior de 10
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  heartButton: {
    marginLeft: 10,
    alignItems: 'flex-end',
  },
  
});

export default Index;
