// Função para carregar os animais salvos no localStorage
function carregarAnimais() {
  const lista = document.getElementById("listaAnimais");
  const animaisSalvos = JSON.parse(localStorage.getItem("animais")) || [];

  lista.innerHTML = ""; // limpa a lista antes de exibir novamente

  animaisSalvos.forEach(animal => {
    const div = document.createElement("div");
    div.classList.add("animal");
    div.innerHTML = `
      <h3>${animal.nome}</h3>
      <p>${animal.descricao}</p>
      <p><strong>Contato:</strong> ${animal.contato}</p>
    `;
    lista.appendChild(div);
  });
}

// Função para adicionar um novo animal
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

// Carrega os cadastros automaticamente ao abrir a página
document.addEventListener("DOMContentLoaded", carregarAnimais);
