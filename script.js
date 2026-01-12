function carregarAnimais() {
  const listaCadastro = document.getElementById("listaAnimais");
  const listaAdocao = document.getElementById("listaAdocao");
  const animais = JSON.parse(localStorage.getItem("animais")) || [];

  if (listaCadastro) listaCadastro.innerHTML = "";
  if (listaAdocao) listaAdocao.innerHTML = "";

  animais.forEach((animal) => {
    const card = document.createElement("div");
    card.className = "animal";
    card.innerHTML = `
      <h3>${animal.nome}</h3>
      <p>${animal.descricao}</p>
      <p><strong>Contato:</strong> ${animal.contato}</p>
    `;

    if (listaCadastro) listaCadastro.appendChild(card.cloneNode(true));
    if (listaAdocao) listaAdocao.appendChild(card);
  });
}

document.getElementById("cadastroForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const contato = document.getElementById("contato").value;

  const animais = JSON.parse(localStorage.getItem("animais")) || [];
  animais.push({ nome, descricao, contato });

  localStorage.setItem("animais", JSON.stringify(animais));
  this.reset();
  carregarAnimais();
});

document.addEventListener("DOMContentLoaded", carregarAnimais);
