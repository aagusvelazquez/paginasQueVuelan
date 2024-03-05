const loginBtn = document.getElementById("login-btn");
const homeBtn = document.getElementById("home-btn");
const loginFrame = document.querySelector(".contentLogin");
const content = document.querySelector(".content");
const contentFooter = document.querySelector(".contentFooter");
const navBarCollapse = document.querySelector(".navbar-collapse");
const login = document.querySelector(".login");
const create = document.querySelector(".create");
const container = document.querySelector(".contentLogin");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const countDisplay = document.getElementById("count");
let count = 0;

loginBtn.addEventListener("click", () => {
    loginFrame.style.display = "block";
    content.style.display = "none";
    contentFooter.style.display = "none";
    navBarCollapse.classList.remove("show");
});

document.addEventListener('click', function (event) {
    var clicInsideLogin = loginFrame.contains(event.target);
    var clicOnBotton = (event.target === loginBtn);

    if (!clicInsideLogin && !clicOnBotton) {
        content.style.display = "block";
        contentFooter.style.display = "block";
        loginFrame.style.display = "none";
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
