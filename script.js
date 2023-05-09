// Seleciona todos os elementos com a classe "card"
const cards = document.querySelectorAll('.card');

// Adiciona um listener de mouseover para cada card
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    // Cria o botão
    const button = document.createElement('button');
    button.innerText = 'COMPRAR AGORA';

    // Adiciona o botão ao card
    card.appendChild(button);

    // Adiciona um listener de clique no botão
    button.addEventListener('click', () => {
      // Altera a posição do botão para "fixed" quando for clicado
      button.style.position = 'fixed';
    });
  });

  // Adiciona um listener de mouseout para cada card
  card.addEventListener('mouseout', () => {
    // Remove o botão
    const button = card.querySelector('button');
    card.removeChild(button);
  });

  // Adiciona um listener de clique fora do botão
  card.addEventListener('click', (event) => {
    // Altera a posição do botão de volta para "relative" quando o clique for fora do botão
    const button = card.querySelector('button');
    if (button && !button.contains(event.target)) {
      button.style.position = 'relative';
    }
  });
});


// Seleciona o modal
var modal = document.getElementById("myModal");

// Seleciona o botão que abre o modal
var btn = document.getElementById("myBtn");

// Seleciona o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close1")[0];

//Quando clicar no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando clicar em <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando clicar em qualquer lugar fora do modal ele fecha
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}