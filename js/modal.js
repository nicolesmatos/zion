// Seleciona os elementos do modal na página
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalList = document.getElementById('modalList');

// Função chamada ao clicar em qualquer bloco de serviço
function openModal(elemento) {
  // 1. Pega o nome do serviço (ex: "Serralheria")
  const tituloServico = elemento.querySelector('p').innerText;
  
  // 2. Pega os itens do atributo data-itens do bloco clicado
  const itensString = elemento.getAttribute('data-itens');

  // 3. Atualiza o título do Modal
  modalTitle.innerText = tituloServico;

  // 4. Limpa os itens anteriores da lista
  modalList.innerHTML = '';

  // 5. Se existirem itens, cria as tags <li> dinamicamente
  if (itensString) {
    const listaDeItens = itensString.split(',');

    listaDeItens.forEach(item => {
      const li = document.createElement('li');
      li.innerText = item.trim();
      modalList.appendChild(li);
    });
  }

  // 6. Abre o modal e trava a rolagem da página
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Fecha o modal ao clicar no fundo escuro
function closeModalOnOverlay(e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
}

// Fecha o modal ao apertar a tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});