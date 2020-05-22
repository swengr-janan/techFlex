const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    document.getElementsByTagName("body")[0].style = 'margin: 10px 50px;';
    links.forEach(link =>{
        link.classList.toggle('fade');
    });
});