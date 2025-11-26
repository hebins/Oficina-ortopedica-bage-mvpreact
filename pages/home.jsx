import React from 'react';
import Header from '../componentes/header';
import Footer from '../componentes/footer';

function Home() {
  return (
    <> 
      <Header />

      <main className="home-layout"> 
        
        <section className="hero-banner">
          <div className="hero-content">
            <h1>Oficina Ortopédica de Bagé</h1>
            <p>Qualidade e Acessibilidade garantidas pelo SUS.</p>
          </div>
        </section>

        <section className="intro-section">
          <div className="text-container">
            <h3>Compromisso com a Autonomia e Qualidade de Vida</h3>
            <p>A Oficina Ortopédica de Bagé, mantida pela Secretaria Municipal de Saúde (SMS), é um polo regional vital. Nosso objetivo é fornecer dispositivos ortopédicos sob medida, como órteses, próteses e cadeiras de rodas, garantindo que os usuários do SUS recuperem sua mobilidade e autoestima.</p>
            <p>Nosso trabalho é focado na reabilitação completa, desde a medição inicial até o treinamento de adaptação final.</p>

            <a href="/info" className="cta-button">Mais Informações sobre a Oficina &rarr;</a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;
