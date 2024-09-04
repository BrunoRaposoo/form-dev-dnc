# Trilha do Desenvolvedor - Formulário Interativo

Este projeto é um formulário interativo desenvolvido em HTML, CSS e JavaScript, projetado para ajudar iniciantes na área de desenvolvimento web a conhecerem diferentes caminhos e áreas de especialização com base nas suas preferências e nível de experiência. O formulário guia os usuários por meio de uma série de perguntas e opções, fornecendo recomendações personalizadas ao final.

## 🎯 Objetivo

O objetivo deste formulário é proporcionar uma experiência personalizada e interativa, onde as perguntas são exibidas de acordo com as escolhas do usuário. Isso ajuda desenvolvedores a tomarem decisões sobre quais áreas e tecnologias aprender, com base em seus interesses e nível de conhecimento.

## 🛠️ Tecnologias Utilizadas

- **HTML:** Estruturação do conteúdo e das perguntas.
- **CSS:** Estilização do formulário e elementos de interface.
- **JavaScript:** Manipulação do DOM e lógica condicional para mostrar/esconder perguntas com base nas respostas do usuário.

## ⚙️ Regras de Negócio

O formulário foi projetado com a seguinte regra de negócio: o usuário responde a uma série de perguntas, e cada resposta direciona a uma nova pergunta ou à recomendação final. As perguntas são divididas em várias etapas, com o conteúdo adaptado conforme as escolhas do usuário.

### Fluxo de Perguntas

1. **Pergunta 1:** Qual área dentro do desenvolvimento web você gostaria de explorar?
   - **Opções:** Front-end, Back-end, Full-stack

2. **Pergunta 2 (Condicional):**
   - **Front-end:**
     - Você prefere trabalhar mais com design ou com lógica de programação?
     - **Opções:** Design, Lógica de programação
   - **Back-end:**
     - Qual linguagem de programação você está mais interessado em aprender?
     - **Opções:** JavaScript (Node.js), Python (Django/Flask), PHP
   - **Full-stack:**
     - Qual é o seu nível de experiência em desenvolvimento web?
     - **Opções:** Iniciante, Intermediário, Avançado

3. **Pergunta 3 (Condicional):**
   - **Design (Front-end):**
     - Você gostaria de se aprofundar em alguma das seguintes áreas?
     - **Opções:** UI/UX Design, Animações e Interações, Ferramentas de Design
   - **Lógica de programação (Front-end):**
     - Qual framework front-end você gostaria de aprender?
     - **Opções:** React, Angular, Vue.js
   - **Node.js (Back-end):**
     - Você está interessado em aprender sobre:
     - **Opções:** Construção de APIs, Gerenciamento de Banco de Dados, Segurança e Autenticação
   - **Iniciante (Full-stack):**
     - Você gostaria de começar com:
     - **Opções:** HTML/CSS, JavaScript básico, Conceitos básicos de Web
   - **Intermediário (Full-stack):**
     - Você gostaria de aprimorar suas habilidades em:
     - **Opções:** Responsividade e Layout, Ferramentas de Build (Webpack, Babel), Testes e Debugging
   - **Avançado (Full-stack):**
     - Você gostaria de se especializar em:
     - **Opções:** Performance e Otimização, Desenvolvimento Full-Stack, Segurança e Boas Práticas

4. **Pergunta 4 (Condicional):**
   - **React:**
     - Você gostaria de aprender sobre:
     - **Opções:** Hooks e State Management, Desenvolvimento de Componentes, Integração com APIs
   - **API (Node.js):**
     - Você gostaria de aprender sobre:
     - **Opções:** RESTful APIs, GraphQL, API Versioning
   - **HTML/CSS (Iniciante):**
     - Você gostaria de aprender sobre:
     - **Opções:** Flexbox e Grid Layout, Animações com CSS, Acessibilidade e Semântica
   - **Responsividade e Layout (Intermediário):**
     - Você gostaria de aprender sobre:
     - **Opções:** Flexbox e Grid Layout, Mobile First Design, Media Queries
   - **Ferramentas de Build (Intermediário):**
     - Você gostaria de aprender sobre:
     - **Opções:** Webpack, Babel, NPM/Yarn Scripts
   - **Testes e Debugging (Intermediário):**
     - Você gostaria de aprender sobre:
     - **Opções:** Testes Unitários, Debugging no Navegador, Testes de Integração
   - **Performance e Otimização (Avançado):**
     - Você gostaria de aprender sobre:
     - **Opções:** Optimização de Performance, Lazy Loading, Minificação de Arquivos
   - **Desenvolvimento Full-Stack (Avançado):**
     - Você gostaria de aprender sobre:
     - **Opções:** Desenvolvimento com MERN Stack, Desenvolvimento com LAMP Stack, Desenvolvimento com MEAN Stack
   - **Segurança e Boas Práticas (Avançado):**
     - Você gostaria de aprender sobre:
     - **Opções:** Autenticação e Autorização Segura, Criptografia de Dados, Segurança em APIs

5. **Resultado Final:** Após responder todas as perguntas, o usuário recebe uma recomendação final com base nas suas escolhas.

## 🧩 Funcionalidades

- **Interatividade:** O formulário exibe perguntas de acordo com as respostas anteriores do usuário, criando um fluxo de perguntas dinâmico.
- **Recomendação personalizada:** No final do formulário, o usuário recebe uma sugestão personalizada com base nas suas respostas.
- **Navegação intuitiva:** Os botões de resposta são claros e fáceis de usar, garantindo uma experiência de usuário suave.
