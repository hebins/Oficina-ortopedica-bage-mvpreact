import React from 'react';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import PageTitleBanner from '../componentes/pagetitlebanner';
import NewsCard from '../componentes/newscard';

const newsData = [
  {
    id: 1,
    imageSrc: "noticia_cadeiras.jpg",
    imageAlt: "Entrega de cadeiras de rodas",
    title: "Oficina Ortopédica de Bagé está realizando medição de órtese e próteses",
    date: "01 de Outubro de 2025",
    excerpt: "A Oficina Ortopédica de Bagé está realizando consultas para medição de órteses e próteses de pacientes desde...",
    link: "https://www.bage.rs.gov.br/noticias/oficina-ortopedica-de-bage-esta-realizando-medicao-de-ortese-e-proteses-1"
  },
  {
    id: 2,
    imageSrc: "noticia_multirao.jpg",
    imageAlt: "Mutirão de medição de próteses",
    title: "Oficina ortopédica entrega 70 cadeiras para pacientes",
    date: "14 de Janeiro de 2025",
    excerpt: "A Oficina Ortopédica do município de Bagé entregou, na manhã desta terça-feira (14), 35 cadeiras de rodas...",
    link: "https://www.bage.rs.gov.br/noticias/oficina-ortopedica-entrega-70-cadeiras-para-pacientes"
  },
  {
    id: 3,
    imageSrc: "noticia_novo_endereco.jpg",
    imageAlt: "Prédio da nova oficina",
    title: "Governo municipal realiza visita técnica em obras que estão em andamento na cidade",
    date: "05 de Junho de 2024",
    excerpt: "Na manhã desta quarta-feira (5), o prefeito Divaldo Lara, acompanhado de secretários do Governo Municipal...",
    link: "https://www.bage.rs.gov.br/noticias/governo-municipal-realiza-visita-tecnica-em-obras-que-estao-em-andamento-na-cidade"
  },
  {
    id: 4,
    imageSrc: "noticia_infravermelho.jpg",
    imageAlt: "Incrementos para a oficina",
    title: "Forno infravermelho incrementa atendimento na Oficina Ortopédica",
    date: "12 de Janeiro de 2024",
    excerpt: "O município de Bagé, por meio da Secretaria de Saúde e Atenção à Pessoa com Deficiência, recebeu nesta semana...",
    link: "https://www.bage.rs.gov.br/noticias/forno-infravermelho-incrementa-atendimento-na-oficina-ortopedica"
  }
];

function Noticias() {
  return (
    <>
      <Header />
      <PageTitleBanner title="Notícias" />

      <main>
        <div className="news-grid">
          
          {newsData.map(news => (
            <NewsCard
              key={news.id}
              imageSrc={news.imageSrc}
              imageAlt={news.imageAlt}
              title={news.title}
              date={news.date}
              excerpt={news.excerpt}
              link={news.link}
            />
          ))}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Noticias;
