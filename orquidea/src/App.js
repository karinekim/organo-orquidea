import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Especie from "./componentes/Especie";
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [especies, setEspecies] = useState([
    {
      id: uuidv4(),
      nome: 'Cattleya',
      cor: '#72CFFA'
    },
    {
      id: uuidv4(),
      nome: 'dendrobium',
      cor: '#42cffa'
    },
    {
      id: uuidv4(),
      nome: 'phalaenopsis',
      cor: '#12cffa'
    },
    {
      id: uuidv4(),
      nome: 'ionopsis ',
      cor: '#00aFfa'
    },
    {
      id: uuidv4(),
      nome: 'Denphal',
      cor: '#22aFfa'
    },
    {
      id: uuidv4(),
      nome: 'cattleya nobilor alba',
      cor: '#82aFfa'
    },
    {
      id: uuidv4(),
      nome: 'cattleya walkeriana',
      cor: '#02CF'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'walkeriana',
      imagem: "/imagens/8.jpg",
      especie: especies[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'nobilor alba',
      imagem: "/imagens/11.jpg",
      especie: especies[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'denphal',
      imagem: "/imagens/10.jpg",
      especie: especies[0].nome
    },
    {
      id: uuidv4(),
      nome: 'dendrobium',
      imagem: "/imagens/2.jpg",
      especie: especies[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'phalaenopsis',
      imagem: "/imagens/1.jpg",
      especie: especies[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'walkeriana',
      imagem: "/imagens/8.jpg",
      especie: especies[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'nobilor alba',
      imagem: "/imagens/11.jpg",
      especie: especies[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'denphal',
      imagem: "/imagens/10.jpg",
      especie: especies[1].nome
    },
    {
      id: uuidv4(),
      nome: 'dendrobium',
      imagem: "/imagens/2.jpg",
      especie: especies[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'phalaenopsis',
      imagem: "/imagens/1.jpg",
      especie: especies[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'walkeriana',
      imagem: "/imagens/8.jpg",
      especie: especies[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'nobilor alba',
      imagem: "/imagens/11.jpg",
      especie: especies[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'denphal',
      imagem: "/imagens/10.jpg",
      especie: especies[2].nome
    },
    {
      id: uuidv4(),
      nome: 'dendrobium',
      imagem: "/imagens/2.jpg",
      especie: especies[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'phalaenopsis',
      imagem: "/imagens/1.jpg",
      especie: especies[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'walkeriana',
      imagem: "/imagens/8.jpg",
      especie: especies[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'nobilor alba',
      imagem: "/imagens/11.jpg",
      especie: especies[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'denphal',
      imagem: "/imagens/10.jpg",
      especie: especies[3].nome
    },
    {
      id: uuidv4(),
      nome: 'dendrobium',
      imagem: "/imagens/2.jpg",
      especie: especies[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'phalaenopsis',
      imagem: "/imagens/1.jpg",
      especie: especies[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'walkeriana',
      imagem: "/imagens/8.jpg",
      especie: especies[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'nobilor alba',
      imagem: "/imagens/11.jpg",
      especie: especies[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'denphal',
      imagem: "/imagens/10.jpg",
      especie: especies[5].nome
    },
    {
      id: uuidv4(),
      nome: 'dendrobium',
      imagem: "/imagens/2.jpg",
      especie: especies[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'phalaenopsis',
      imagem: "/imagens/1.jpg",
      especie: especies[5].nome
    },
  ]

  const [produtos, setProdutos] = useState(inicial)

  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id));
  }

  function mudarCor(cor, id) {
    setEspecies(especies.map(especie => {
      if(especie.id === id) {
        especie.cor = cor;
      }
      return especie;
    }));
  }

  function cadastrarEspecie({ nome, cor }) {
    setEspecies([...especies, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setProdutos(produtos.map(produto => {
      if(produto.id === id) produto.favorito = !produto.favorito;
      return produto;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarEspecie={cadastrarEspecie} especies={especies.map(especie => especie.nome)} aoCadastrar={produto => setProdutos([...produtos, produto])} />
      <section className="especies">
        <h1>Minhas plantas</h1>
        {especies.map((especie, indice) => <Especie mudarCor={mudarCor} key={indice} especie={especie} produtos={produtos.filter(produto => produto.especie === especie.nome)} aoDeletar={deletarProduto} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}