# 🐾 PetAdote — Portal Web de Adoção Animal

Projeto desenvolvido como atividade prática da disciplina de Desenvolvimento Web (2º Semestre). O **PetAdote** é uma aplicação web responsiva e acessível criada para divulgar animais resgatados disponíveis para adoção responsável, facilitar o contato entre interessados e protetores e oferecer uma área de acesso para usuários.

 **Acesse o site online (GitHub Pages):** 🔗 **Acesse o site online (GitHub Pages):** https://arthurmiranda117.github.io/Projeto-Final-DI/

---

## Funcionalidades

* **Barra de Acessibilidade (Global):**
  * Alternância entre **Modo Claro** e **Modo Escuro** com um clique em todas as páginas.
  * Botões para **aumentar (`A+`)** e **diminuir (`A-`)** o tamanho da fonte dinamicamente.
* **Busca em Tempo Real:** Campo de pesquisa no menu que filtra instantaneamente os cartões de animais pelo nome, espécie (`cão`, `gato`) ou características.
* **Carrossel de Imagens:** Galeria interativa no topo da página principal com botões de navegação (*Anterior* e *Próximo*).
* **Cartões Explicativos (Cards):** Exibição organizada dos pets com foto, nome, idade, status de vacinação/castração e botão direto para adoção.
* **Formulário de Contato:** Campos com validação nativa em HTML5 para envio de mensagens e propostas de adoção.
* **Página de Login (`login.html`):** Tela dedicada para acesso de voluntários e adotantes, contendo validação de e-mail e senha (mínimo de 6 caracteres) e retorno visual acessível (`aria-live`).

---

## Paleta de Cores e Acessibilidade (WCAG)

As cores foram escolhidas com base na **Psicologia das Cores** e testadas para atender ao padrão internacional **WCAG 2.1 (Nível AA)** de contraste mínimo (`4.5:1`):

| Papel | Modo Claro | Modo Escuro | Significado / Aplicação |
| :--- | :--- | :--- | :--- |
| **Primária** | `#2E7D32` (Verde) | `#4CAF50` (Verde Claro) | Transmite saúde, vida e esperança. Usada no logo, títulos e botões. |
| **Secundária** | `#E65100` (Laranja) | `#FF9800` (Laranja Claro) | Transmite energia e acolhimento. Usada nas etiquetas (*tags*). |
| **Fundo** | `#F5F5F5` (Cinza Claro) | `#121212` (Escuro) | Evita o cansaço visual e garante leitura confortável. |
| **Cartões / Caixas** | `#FFFFFF` (Branco) | `#1E1E1E` (Cinza Escuro) | Destaca os cartões, formulários e a caixa de login em relação ao fundo. |
| **Texto** | `#212121` (Grafite) | `#FFFFFF` (Branco) | Garante taxa de contraste superior a `14:1`. |

---

## Tecnologias Utilizadas

* **HTML5:** Marcação semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), formulários com validação nativa e textos alternativos (`alt`) em todas as imagens.
* **CSS3:** Estilização com variáveis nativas (`:root`), **Flexbox** para alinhamento dos cartões e layouts
