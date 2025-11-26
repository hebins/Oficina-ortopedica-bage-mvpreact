# 🏥 Oficina Ortopédica de Bagé - Website Institucional (React SPA)

Este repositório contém o código-fonte do website oficial da **Oficina Ortopédica de Bagé**. O projeto foi migrado de HTML estático para o framework **React**, operando agora como uma Aplicação de Página Única (SPA).

## 🚀 Tecnologias

O projeto é uma aplicação moderna baseada em componentes, focada em performance e manutenção:

  * **React:** Biblioteca JavaScript para construção da interface de usuário (UI).
  * **React Router DOM:** Gerenciamento de rotas e navegação na aplicação (SPA).
  * **HTML5/JSX:** Estrutura e marcação.
  * **CSS3:** Estilização, layout responsivo (Flexbox/Grid).

## 📁 Estrutura do Projeto

A lógica do site está modularizada em componentes e páginas:

```
src/
├── components/       # Componentes Reutilizáveis (Header, Footer, NewsCard, TeamCard)
├── pages/            # Páginas Principais (Home, Info, Noticias, Equipe)
├── style.css         # Estilos globais (Compartilhados por todos os componentes)
└── App.jsx           # Componente principal que define o Roteamento
```

-----

## 💻 Instalação e Execução Local

Siga estes passos para ter uma cópia local do projeto rodando em sua máquina:

### Pré-requisitos

Você deve ter o **Node.js** e o **npm** (ou Yarn) instalados em seu ambiente.

### 1\. Clonar o Repositório

```bash
git clone https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
cd nome-do-repositorio
```

### 2\. Instalar Dependências

Instale as bibliotecas necessárias listadas no `package.json` (incluindo React e React Router DOM):

```bash
npm install
# ou
yarn install
```

### 3\. Executar o Servidor de Desenvolvimento

Inicie o aplicativo no modo de desenvolvimento. Ele geralmente será aberto em `http://localhost:3000` (ou outra porta definida).

```bash
npm run dev
# ou
yarn dev
```

-----

## 🌐 Deploy (Hospedagem)

Como este é um projeto **SPA (Single Page Application)**, ele requer um processo de *build* e uma configuração de roteamento no servidor de hospedagem.

### Gerando a Versão de Produção

Para gerar os arquivos otimizados e prontos para produção (a pasta `dist` ou `build`):

```bash
npm run build
# ou
yarn build
```

### Opções de Hospedagem Recomendadas

  * **Netlify / Vercel:** Ideais para SPAs. Basta conectar o repositório e o serviço fará o *build* e configurará o roteamento para você automaticamente.

-----

## 📄 Licença

Este projeto é de código aberto e está sob a licença **MIT**.

-----

*Desenvolvido por: Abner Soares - PET Saúde / Tecnologia I*
*Status: Migrado para React*
