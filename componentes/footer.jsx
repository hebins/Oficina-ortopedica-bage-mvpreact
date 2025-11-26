import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-bloco contato">
          <h4>Contatos e Localização</h4>
          <p><strong>Telefone:</strong> (53) 3241-7119</p>
          <p><strong>Horário:</strong> Seg. a Sex. (08:00 - 17:30)</p>
          <p><strong>Endereço:</strong> R. Ernesto Médici, 800</p>
          <p>Getúlio Vargas, Bagé - RS</p>
        </div>

        <div className="footer-bloco institucional">
          <h4>Institucional</h4>
          <p>Serviço mantido pela <b>Prefeitura Municipal de Bagé</b>, através da Secretaria Municipal de Saúde (SMS).</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; PET Saúde - Tecnologia I</p>
      </div>
    </footer>
  );
}

export default Footer;
