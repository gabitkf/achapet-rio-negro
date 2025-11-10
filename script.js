// --- FUNÇÃO PARA CARREGAR ANIMAIS SALVOS ---
function carregarAnimais() {
  const lista = document.getElementById("listaAnimais");
  const animaisSalvos = JSON.parse(localStorage.getItem("animais")) || [];

  lista.innerHTML = ""; // Limpa a lista antes de exibir novamente

  animaisSalvos.forEach((animal, index) => {
    const div = document.createElement("div");
    div.classList.add("animal");
    div.innerHTML = `
      <h3>${animal.nome}</h3>
      <p>${animal.descricao}</p>
      <p><strong>Contato:</strong> ${animal.contato}</p>
      <button class="remover" data-index="${index}">Remover</button>
    `;
    lista.appendChild(div);
  });

  // Adiciona função de remover
  document.querySelectorAll(".remover").forEach(botao => {
    botao.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      removerAnimal(i);
    });
  });
}

// --- FUNÇÃO PARA REMOVER UM ANIMAL ---
function removerAnimal(index) {
  const animais = JSON.parse(localStorage.getItem("animais")) || [];
  animais.splice(index, 1); // remove o item pelo índice
  localStorage.setItem("animais", JSON.stringify(animais));
  carregarAnimais();
}

// --- FUNÇÃO PARA CADASTRAR NOVO ANIMAL ---
document.getElementById("cadastroForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const contato = document.getElementById("contato").value;

  // Recupera lista atual do localStorage
  const animais = JSON.parse(localStorage.getItem("animais")) || [];

  // Adiciona novo cadastro
  animais.push({ nome, descricao, contato });

  // Salva de volta no localStorage
  localStorage.setItem("animais", JSON.stringify(animais));

  // Atualiza lista na tela
  carregarAnimais();

  alert("Animal cadastrado com sucesso!");
  this.reset();
});

// --- CARREGA AUTOMATICAMENTE AO ABRIR A PÁGINA ---
document.addEventListener("DOMContentLoaded", carregarAnimais);

