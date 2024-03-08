const login = document.querySelector(".login");
const create = document.querySelector(".create");
const container = document.querySelector(".contentLogin");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const countDisplay = document.getElementById("count");
const scrollToTopBtn = document.querySelector(".scroll-to-top");
let count = 0;

document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
});


login.onclick = function () {
  container.classList.add("signinForm");
};

create.onclick = function () {
  container.classList.remove("signinForm");
};

// Función para actualizar el contador y mostrarlo
function updateCount() {
  countDisplay.textContent = count;
}

// Al hacer clic en el botón de incremento, incrementar el contador
incrementBtn.addEventListener('click', () => {
  count++;
  updateCount();
});

// Al hacer clic en el botón de decremento, decrementar el contador
decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});

// Inicializar el contador al cargar la página
updateCount();

