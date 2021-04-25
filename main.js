const btn = document.querySelector('.ber');
const nav = document.querySelector('.nav');

btn.onclick = () => {
    nav.classList.toggle('collapse');
};