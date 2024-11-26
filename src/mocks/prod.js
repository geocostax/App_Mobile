import Logo from '../../assets/logo.png';
import nhoque from '../../assets/nhoque.png';
import peti from '../../assets/petigato.png';
import pudinzin from '../../assets/pudim.png';
import brownie from '../../assets/brownie.png';



const produto = {
  topo: {
    titulo: "Detalhe do produto",
  },
  detalhes: {
    nome: "Macarrão Carbonara",
    detalhes:
      "Macarrão delicioso acompanhado com raspas de parmesão e pedaços de bacon.",
    preco: "R$ 45,00",
    botao: "Gostaria de uma sobremesa ?"
  },
  itens: {
    titulo: "Itens do kit",
    lista: [
      {
        nome: "PETIT GATEAU",
        imagem: peti,
      },
      {
        nome: "PUDIM",
        imagem: pudinzin,
      },
      {
        nome: "BROWNIE",
        imagem: brownie
      }
    ]
  }
};

export default produto;
