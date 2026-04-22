// ================= ACTIVE NAV HIGHLIGHT =================
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

if (window.location.pathname.includes("index.html")) {
  // LIMPA busca antiga quando entra na home
  localStorage.removeItem("busca");
}

// FUNÇÃO BUSCAR
function buscar() {
  const valor = document.getElementById("busca").value.trim();

  if (!valor) {
    alert("Digite o nome de uma raça 😿");
    return;
  }

  localStorage.setItem("busca", valor);
  window.location.href = "detalhes.html";
}

// ================= DETALHES =================
if (window.location.pathname.includes("detalhes.html")) {

  const busca = localStorage.getItem("busca");

  const div = document.getElementById("resultado");

  // SE NÃO TEM BUSCA → NÃO MOSTRA NADA
  if (!busca) {
    div.innerHTML = `
      <div style='text-align: center;'>
        <p style='font-family: Poppins, sans-serif; font-size: 18px; margin: 0;'>Faça uma busca primeiro 🐱</p>
        <img src='Images/gato_=D.jpg' alt='cat_looking_at_you' style='max-width: 200px; margin-top: 20px; display: block; margin-left: auto; margin-right: auto;'>
      </div>
    `;
  } else {

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    fetch("https://api.thecatapi.com/v1/breeds")
      .then(r => r.json())
      .then(data => {

        const gatos = data.filter(cat =>
          cat.name.toLowerCase().includes(busca.toLowerCase())
        );

        // SE NÃO ENCONTRAR
        if (gatos.length === 0) {
          div.innerHTML = "<p style='text-align:center; font-family: Poppins, sans-serif; font-size: 18px;'>Raça não encontrada 😿</p>";
          return;
        }

        div.innerHTML = "";

        gatos.forEach(cat => {

          const imagem = cat.reference_image_id
            ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
            : "https://via.placeholder.com/200";

          div.innerHTML += `
            <div class="card">
              <h3>${cat.name}</h3>

              <div class="img-box">
                <img src="${imagem}">
                <button class="fav-btn" onclick='favoritar(${JSON.stringify(cat)})'>⭐</button>
              </div>

              <p><b>Origem:</b> ${cat.origin}</p>
              <p><b>Peso:</b> ${cat.weight.metric} kg</p>
              <p><b>Tempo de vida:</b> ${cat.life_span} anos</p>
              <p><b>Temperamento:</b> ${cat.temperament}</p>
            </div>
          `;
        });
      });
  }

  // FAVORITAR
  function favoritar(cat) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // EVITA DUPLICAR
    if (!favoritos.some(f => f.id === cat.id)) {
      favoritos.push(cat);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }

    const msg = document.getElementById("mensagem");
    msg.innerText = `Parabéns! Você favoritou a raça ${cat.name} 🐱💖`;
    msg.style.display = "block";

    setTimeout(() => msg.style.display = "none", 3000);
  }
}

// ================= FAVORITOS =================
if (window.location.pathname.includes("favoritos.html")) {

  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const div = document.getElementById("lista");

  if (favoritos.length === 0) {
    div.innerHTML = "<p style='text-align:center;'>Nenhum favorito ainda 😿</p>";
  }

  favoritos.forEach(cat => {

    const imagem = cat.reference_image_id
      ? `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
      : "https://via.placeholder.com/200";

    div.innerHTML += `
      <div class="card">
        <h3>${cat.name}</h3>
        <img src="${imagem}">

        <p><b>Origem:</b> ${cat.origin}</p>
        <p><b>Peso:</b> ${cat.weight.metric} kg</p>
        <p><b>Tempo de vida:</b> ${cat.life_span} anos</p>
        <p><b>Temperamento:</b> ${cat.temperament}</p>
      <button class="remove-fav-btn" data-cat-id="${cat.id}">Remover ❌</button>
      </div>
    `;
  });

  document.querySelectorAll(".remove-fav-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const catId = this.getAttribute("data-cat-id");
      removerFavorito(catId);
    });
  });

  // REMOVER FAVORITO
  function removerFavorito(catId) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter(f => f.id !== catId);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
   
    window.location.reload();
  }
}
