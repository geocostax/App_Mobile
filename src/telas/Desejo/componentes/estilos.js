import { StyleSheet } from "react-native";

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
    borderWidth: 1, // Adicionando uma borda para destacar o cartão
    borderRadius: 8, // Bordas arredondadas
  },
  line: {
    width: '100%', 
    height: 3, 
    backgroundColor: 'green',
    marginBottom: 15,
    justifyContent: 'center',
  },
  // Estilo para as imagens
  image: {
    width: '100%', // Largura da imagem
    height: 120, // Altura da imagem, ajuste conforme necessário
    borderRadius: 8, // Bordas arredondadas para as imagens
    marginBottom: 10, // Espaço entre a imagem e o texto
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
    fontSize: 18,
  },
  titulo: {
    fontWeight: 'bold',
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
    color: "white",
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
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

export default styles;
