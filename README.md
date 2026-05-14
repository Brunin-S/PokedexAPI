# React + Vite

📄 Descrição do Projeto

Desenvolvi uma Pokédex interativa utilizando React, com foco em consumo de API, organização de código e experiência do usuário.

O projeto consome dados diretamente da PokeAPI, onde realizo requisições assíncronas utilizando fetch + async/await para buscar informações dos Pokémons. Para otimizar o carregamento, utilizei Promise.all, permitindo fazer múltiplas requisições ao mesmo tempo (como a busca dos 20 primeiros Pokémons), melhorando a performance da aplicação.

A aplicação possui duas telas principais:

👉 Tela de listagem

Exibe os Pokémons com nome e imagem
Os dados são tratados e armazenados com useState
Utilizei métodos como map para renderização dinâmica da lista
Estruturei o layout com Flexbox para organização visual

👉 Tela de detalhes

Ao clicar em um Pokémon, o usuário é redirecionado para uma nova página
Implementei navegação com React Router
Utilizei parâmetros de rota (useParams) para identificar qual Pokémon deve ser carregado
Exibo informações mais completas como:
Nome
Imagem
Altura
Peso
Tipos
⚙️ Tecnologias utilizadas
React (Hooks: useState, useEffect)
JavaScript (ES6+)
Fetch API
Async/Await
Promise.all
React Router DOM
HTML + CSS (Flexbox)
🧠 Conceitos aplicados

Durante o desenvolvimento, trabalhei com conceitos importantes como:

Consumo de API REST
Tratamento de dados assíncronos
Gerenciamento de estado no React
Renderização condicional
Listas dinâmicas com map
Navegação entre páginas (SPA)
Manipulação de parâmetros de URL
Organização de componentes
🚀 Objetivo do projeto

O objetivo foi praticar e consolidar conhecimentos em React, principalmente no fluxo de dados vindo de APIs e na construção de aplicações com múltiplas páginas, simulando um cenário real de desenvolvimento.
>>>>>>> 4bbfea09755d46208b3b0b5320380ff5924d622f
