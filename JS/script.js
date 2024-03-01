const loginBtn = document.getElementById("login-btn");
const homeBtn = document.getElementById("home-btn");
const loginFrame = document.querySelector(".contentLogin");
const content = document.querySelector(".content");
const contentFooter = document.querySelector(".contentFooter");
const login = document.querySelector(".login");
const create = document.querySelector(".create");
const container = document.querySelector(".contentLogin");

loginBtn.addEventListener("click", () => {
    loginFrame.style.display = "block";
    content.style.display = "none";
    contentFooter.style.display = "none";
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