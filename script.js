//tema
const btnTema = document.getElementById('btn-tema');

if (btnTema) {
  btnTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      btnTema.textContent = 'Modo Claro';
    } else {
      btnTema.textContent = 'Modo Escuro';
    }
  });
}

//fonte
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');
let tamanhoAtual = 16;

if (btnAumentar && btnDiminuir) {
  btnAumentar.addEventListener('click', function() {
    if (tamanhoAtual < 22) {
      tamanhoAtual += 2;
      document.documentElement.style.setProperty('--tamanho-fonte', tamanhoAtual + 'px');
    }
  });

  btnDiminuir.addEventListener('click', function() {
    if (tamanhoAtual > 12) {
      tamanhoAtual -= 2;
      document.documentElement.style.setProperty('--tamanho-fonte', tamanhoAtual + 'px');
    }
  });
}

//carrosel index
const imgCarrossel = document.getElementById('img-carrossel');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');

if (imgCarrossel && btnAnterior && btnProximo) {
  const imagens = [
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
    'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  ];

  let indiceAtual = 0;

  btnProximo.addEventListener('click', function() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    imgCarrossel.src = imagens[indiceAtual];
  });

  btnAnterior.addEventListener('click', function() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    imgCarrossel.src = imagens[indiceAtual];
  });
}

//pesquisa index
const campoBusca = document.getElementById('campo-busca');
const cards = document.querySelectorAll('.card-pet');

if (campoBusca) {
  campoBusca.addEventListener('keyup', function() {
    const termo = campoBusca.value.toLowerCase();

    cards.forEach(function(card) {
      const textoDoCard = card.textContent.toLowerCase();
      card.style.display = textoDoCard.includes(termo) ? 'block' : 'none';
    });
  });
}

//login
const formLogin = document.getElementById('form-login');
const mensagemLogin = document.getElementById('mensagem-login');

if (formLogin) {
  formLogin.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const emailDigitado = document.getElementById('login-email').value;
    mensagemLogin.textContent = 'Login efetuado com sucesso! Bem-vindo(a), ' + emailDigitado + '.';
    formLogin.reset();
  });
}
