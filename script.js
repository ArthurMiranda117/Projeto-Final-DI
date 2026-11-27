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
  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80',
      alt: 'Cão vira-lata sorrindo ao ar livre'
    },
    {
      src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
      alt: 'Gato rajado olhando atentamente para a câmera'
    },
    {
      src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      alt: 'Cachorro carinhoso descansando e esperando um lar'
    }
  ];

  let indiceAtual = 0;
  let intervaloCarrossel;

  function atualizarSlide() {
    imgCarrossel.classList.add('trocando');

    setTimeout(function() {
      imgCarrossel.src = slides[indiceAtual].src;
      imgCarrossel.alt = slides[indiceAtual].alt;
      imgCarrossel.classList.remove('trocando');
    }, 220);
  }

  function proximoSlide() {
    indiceAtual = (indiceAtual + 1) % slides.length;
    atualizarSlide();
  }

  function slideAnterior() {
    indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
    atualizarSlide();
  }

  function iniciarAutoPlay() {
    clearInterval(intervaloCarrossel);
    intervaloCarrossel = setInterval(proximoSlide, 4000);
  }

  btnProximo.addEventListener('click', function() {
    proximoSlide();
    iniciarAutoPlay();
  });

  btnAnterior.addEventListener('click', function() {
    slideAnterior();
    iniciarAutoPlay();
  });

  imgCarrossel.addEventListener('mouseenter', function() {
    clearInterval(intervaloCarrossel);
  });

  imgCarrossel.addEventListener('mouseleave', iniciarAutoPlay);

  iniciarAutoPlay();
}

//bio detalhada dos pets
const biosPets = {
  pipoca: {
    nome: 'Pipoca',
    tag: 'Cão • 2 anos • Porte Médio',
    img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80',
    alt: 'Cão vira-lata caramelo',
    bio: 'Pipoca foi resgatado ainda jovem e conquistou toda a equipe pelo jeito alegre e companheiro. Adora passeios no fim da tarde, brincar com bolinhas e ficar perto de quem ama.',
    detalhes: [
      'Saúde: Vacinado, castrado e vermifugado',
      'Temperamento: Dócil, brincalhão e muito sociável',
      'Convivência: Excelente com crianças e outros cães'
    ]
  },
  mimi: {
    nome: 'Mimi',
    tag: 'Gato • 1 ano • Porte Pequeno',
    img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&q=80',
    alt: 'Gato cinza deitado',
    bio: 'Mimi é uma gatinha tranquila e observadora que adora tirar sonecas perto da janela e receber carinho no queixo. Já usa a caixa de areia perfeitamente.',
    detalhes: [
      'Saúde: Vacinada, castrada e negativa para FIV/FeLV',
      'Temperamento: Calma, carinhosa e independente',
      'Convivência: Ideal para apartamentos telados e ambientes calmos'
    ]
  },
  thor: {
    nome: 'Thor',
    tag: 'Cão • 5 meses • Porte Médio/Grande',
    img: 'img/Tozada.jpg',
    alt: 'Cão filhote peludo',
    bio: 'Thor é um filhote cheio de disposição e curiosidade. Está na fase ideal para aprender comandos básicos e crescer ao lado de uma família ativa.',
    detalhes: [
      'Saúde: Primeiras doses de vacina aplicadas e vermifugado',
      'Temperamento: Energético, alegre e muito esperto',
      'Convivência: Se adapta bem a casas com quintal ou rotina de passeios'
    ]
  },
  luna: {
    nome: 'Luna',
    tag: 'Cão • 11 meses • Porte Pequeno/Médio',
    img: 'https://images.unsplash.com/photo-1762447984990-165426bfec44?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    alt: 'Filhote de cachorro',
    bio: 'Luna é a definição de companheira de sofá. Embora goste de uma caminhada curta, seu passatempo favorito é cochilar encostada no tutor.',
    detalhes: [
      'Saúde: Vacinada, castrada e vermifugada',
      'Temperamento: Tranquila, afetuosa e obediente',
      'Convivência: Ótima opção para apartamentos'
    ]
  },
  duke: {
    nome: 'Duke',
    tag: 'Gato • 9 meses • Porte Pequeno',
    img: 'https://images.unsplash.com/photo-1638947693941-669835e07b4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    alt: 'Filhote de gato',
    bio: 'Duke é um gatinho jovem, super brincalhão e apaixonado por arranhadores e varinhas com penas. Depois de gastar energia, adora dormir no colo.',
    detalhes: [
      'Saúde: Vacinado, castrado e vermifugado',
      'Temperamento: Agitado, curioso e muito carinhoso',
      'Convivência: Se dá muito bem com outros gatos jovens'
    ]
  },
  mel: {
    nome: 'Mel',
    tag: 'Cão • 1 ano • Porte Pequeno',
    img: 'https://images.unsplash.com/photo-1563497425252-36b755215241?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    alt: 'Cachorro pequeno de vestido',
    bio: 'Mel é muito apegada às pessoas e adora seguir o tutor pela casa toda. Procura um lar onde tenha bastante atenção e companhia no dia a dia.',
    detalhes: [
      'Saúde: Vacinada, castrada e vermifugada',
      'Temperamento: Muito amorosa, leal e expressiva',
      'Convivência: Ideal para quem passa boa parte do tempo em casa'
    ]
  }
};

const modalPet = document.getElementById('modal-pet');
const btnFecharModal = document.getElementById('fechar-modal');
const botoesVerMais = document.querySelectorAll('.btn-ver-mais');

if (modalPet) {
  botoesVerMais.forEach(function(botao) {
    botao.addEventListener('click', function() {
      const petId = botao.getAttribute('data-pet');
      const dados = biosPets[petId];
      if (!dados) return;

      document.getElementById('modal-img').src = dados.img;
      document.getElementById('modal-img').alt = dados.alt;
      document.getElementById('modal-tag').textContent = dados.tag;
      document.getElementById('modal-titulo').textContent = dados.nome;
      document.getElementById('modal-bio').textContent = dados.bio;

      const lista = document.getElementById('modal-detalhes');
      lista.innerHTML = dados.detalhes.map(function(item) {
        return '<li>• ' + item + '</li>';
      }).join('');

      modalPet.hidden = false;
      btnFecharModal.focus();
    });
  });

  function fecharModal() {
    modalPet.hidden = true;
  }

  btnFecharModal.addEventListener('click', fecharModal);

  modalPet.addEventListener('click', function(evento) {
    if (evento.target === modalPet) {
      fecharModal();
    }
  });

  document.addEventListener('keydown', function(evento) {
    if (evento.key === 'Escape' && !modalPet.hidden) {
      fecharModal();
    }
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
      card.style.display = textoDoCard.includes(termo) ? 'flex' : 'none';
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
