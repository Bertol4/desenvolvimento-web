import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Article from "./components/Article/Article.jsx";
import "./index.css";

//funcao em maiuscula

export default function App() {
  //objeto que armazena informações do autor/ post
  const dadosPost = {
    titulo: "Meu blog de viagens",
    subtitulo: "Descobrindo mais sobre as praias de Miami",
    autor: "Eduardo Bertolin",
    tituloFoto: "South Beach",
    data: "25 de fevereiro de 2026",
    conteudo: [
      "Se você está em busca de uma praia animada com brilho e glamour, vá para a South Beach, ou SoBe para os íntimos. Muitas pessoas vão para “SoBe” para observar os outros e serem vistas, mas também há muitas coisas para fazer, incluindo iatismo, mergulho livre, stand up paddle e kitesurf.",
      "Saia da praia para explorar o vibrante bairro Art Déco ou pare nos museus, galerias de arte e lojas nas ruas. Assista ao pôr do sol em um bar da Ocean Drive antes de sair para festas nos clubes até a madrugada. A vizinha 12th Street Beach é um refúgio LGBT, enquanto a Haulover Beach, com uso opcional de roupas, é ótima para reforçar o seu bronzeado de corpo inteiro.",
    ],
    legendaFoto:
      "Praia de Miami, South Beach. Vista de cima da praia lateralizada, com água em tom verde água, areia da praia cheia de guarda-sóis e cadeiras e um posto de salva-vidas pequeno. Mais para trás da areia temos uma vegetação verde com palmeiras e arbustos, e mais ao fundo da imagem alguns prédios pertos da praia.",
    imagem:
      "https://cdn.sanity.io/images/nxpteyfv/goguides/42e8fa299809cb092abce3f36d940da1dc530533-1600x1066.jpg?fp-x=0.5&fp-y=0.5&w=1351&fit=max&auto=format",
  };

  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />
      <Header tituloBlog={dadosPost.titulo} />
      <Sidebar />
      <Article
        subtitulo={dadosPost.subtitulo}
        autor={dadosPost.autor}
        data={dadosPost.data}
        tituloFoto={dadosPost.tituloFoto}
        conteudo={dadosPost.conteudo}
        legendaFoto={dadosPost.legendaFoto}
        imagem={dadosPost.imagem}
      />
    </div>
  );
}
