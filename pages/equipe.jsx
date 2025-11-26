import React from 'react';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import PageTitleBanner from '../componentes/pagetitlebanner';
import TeamCard from '../componentes/teamcard';

const teamData = [
  {
    id: 1,
    imageSrc: "foto_rosemeri.jpg",
    imageAlt: "Foto de Fulano",
    name: "Fulano",
    role: "Coordenadora da Oficina",
    specialty: "Fisioterapeuta Especialista",
    details: "Responsável pela gestão e pelo plano de reabilitação. Atende desde 2018."
  },
  {
    id: 2,
    imageSrc: "foto_tecnico.jpg",
    imageAlt: "Foto de Ciclano",
    name: "Ciclano",
    role: "Técnico Ortopédico",
    specialty: "Confecção e Ajuste",
    details: "Profissional certificado na produção e adaptação de órteses e próteses."
  },
  {
    id: 3,
    imageSrc: "foto_ana.jpg",
    imageAlt: "Foto de Beltrano",
    name: "Beltrano",
    role: "Fisioterapeuta de Reabilitação",
    specialty: "Treinamento de Marcha e Adaptação",
    details: "Especialista em reabilitação pós-protetização e uso de dispositivos auxiliares."
  }
];

function Equipe() {
  return (
    <>
      <Header />
      <PageTitleBanner title="Equipe" />

      <main>
        <div className="team-grid">

          {teamData.map(member => (
            <TeamCard
              key={member.id}
              imageSrc={member.imageSrc}
              imageAlt={member.imageAlt}
              name={member.name}
              role={member.role}
              specialty={member.specialty}
              details={member.details}
            />
          ))}

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Equipe;
