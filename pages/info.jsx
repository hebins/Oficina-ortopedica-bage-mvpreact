import React from 'react';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import PageTitleBanner from '../componentes/pagetitlebanner';

function Info() {
  return (
    <>
      <Header/>
      <PageTitleBanner title="Informações"/>

      <main>
        
        <div className="info-section-container"> 
          <h3>Sobre</h3> 

          <div className="content-columns"> 
            <div className="image-container">
              <img src="image2.png" alt="Fachada da oficina ortopédica de bagé" />
            </div>
            
            <div className="text-container">
              <p><b>A Oficina Ortopédica de Bagé</b> é um serviço essencial e de referência que atua na produção, adaptação e entrega de dispositivos ortopédicos, promovendo a reabilitação física e a melhoria da <b>qualidade de vida</b> de seus usuários.</p>

              <p>Mantida pelo município, esta oficina não beneficia apenas a população bageense, mas também se estende a diversos municípios vizinhos, consolidando-se como um <b>polo regional de atendimento em saúde</b>.</p>
            </div>
          </div>
        </div>

        <div className="info-section-container"> 
            
            <h3>Serviços Oferecidos</h3>

            <div className="text-container">
                <ul>
                    <li><b>Órteses:</b> Dispositivos externos aplicados para modificar as características estruturais e funcionais do sistema neuromusculoesquelético.</li>
                    <li><b>Próteses: </b>Dispositivos que substituem membros ou partes do corpo ausentes.</li>
                    <li><b>Cadeiras de Rodas e de Banho: </b>Para facilitar a mobilidade e o autocuidado.</li>
                    <li><b>Muletas e Andadores: </b>Auxiliares de marcha.</li>
                </ul>
            </div>
            
            <br />
            <img src="image3.png" alt="Oficina Ortopédica" id="img3" />
            <br />
            
            <h3>Como Acessar os Serviços</h3>

            <div className="text-container">
                <p>O acesso aos serviços e dispositivos da Oficina Ortopédica de Bagé é realizado através do <b>Sistema Único de Saúde (SUS)</b>, seguindo os passos de regulação estadual:</p>
                <ul>
                    <li><b>Consulta: </b>O paciente deve primeiro procurar a Unidade Básica de Saúde (Posto de Saúde) mais próxima para uma consulta e obter a solicitação médica do dispositivo;</li>
                    <li><b>Encaminhamento e Cadastro: </b>De posse da solicitação, o paciente deve se dirigir ao serviço de Reabilitação Física de Bagé, onde será cadastrado no Sistema de Regulação (SISREG);</li>
                    <li><b>Avaliação: </b>Após ser chamado pelo sistema, o paciente passará por uma avaliação detalhada com um fisioterapeuta ou outro profissional da equipe, que realizará os procedimentos necessários para a medição e o molde do dispositivo.</li>
                    <li><b>Entrega: </b>Após a confecção (que tem um prazo variável conforme o tipo de dispositivo), a entrega é agendada, e o paciente inicia o processo de treinamento e adaptação ao novo item.</li>
                </ul>
            </div>
        </div>

        <div className="info-section-container"> 
            <h3>Localização</h3>

            <p><b>Endereço: </b>R. Ernesto Médici, 800 - Getúlio Vargas, Bagé - RS, 96412-650</p>

            <div className="mapa-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.2391858616475!2d-54.09592798897711!3d-31.324766874197007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9506757addcfbacd%3A0x2a440c6b860c6608!2sR.%20Ernesto%20M%C3%A9dici%2C%20800%20-%20Get%C3%BAlio%20Vargas%2C%20Bag%C3%A9%20-%20RS%2C%2096412-650!5e0!3m2!1spt-BR!2sbr!4v1760095505161!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Info;
