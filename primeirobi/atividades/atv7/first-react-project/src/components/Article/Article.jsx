import "./Article.css";
export default function Article({
  subtitulo,
  autor,
  tituloFoto,
  data,
  conteudo,
  legendaFoto,
  imagem,
}) {
  return (
    <article>
      <h2 className="subtitulo">{subtitulo}</h2>
      <p className="autor-info">
        Por {autor} em {data}
      </p>
      <h3 className="tituloFoto">{tituloFoto}</h3>

      <figure>
        <img src={imagem} alt={legendaFoto} />
        <figcaption className="legendaFoto">{legendaFoto}</figcaption>
      </figure>
      {conteudo.map((paragrafo, index) => (
        <p className="conteudo" key={index}>
          {paragrafo}
        </p>
      ))}
    </article>
  );
}
