const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const Farmer = document.getElementById('farmer');
const Local = document.getElementById('local');
const DeptAgri = document.getElementById('deptagri');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
}); 

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



