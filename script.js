let bar = document.querySelector('p');
let title = document.querySelector('.mobile-nav');
let nav = document.querySelector('.main-nav');

let isShowing = true;
function toggleNav() {
    if(!isShowing) {
        isShowing = true;
        // title.style.display = 'flex';
        title.style.top = '-1000px';
    } else {
        title.style.top = '88px';
        // title.style.display = 'none';
        isShowing = false;
        nav.style.boxShadow = 'none';
        
    }
}

bar.addEventListener('click',toggleNav);

let check = document.querySelector('#check');
let check1 = document.querySelector('#check1');

let shoeAlign = document.querySelector('.shoe-align');
let img = shoeAlign.querySelector('img');

function changeBlue() {
    shoeAlign.style.backgroundImage = 'linear-gradient(to top, rgba(250, 250, 250, 0),rgba(64, 252, 227, 0.336))';
    shoeAlign.style.boxShadow = '0px -20px 30px rgba(114, 255, 236, 0.671)';
    img.src = 'resources/nike-mag-main.png';
}

function changeRed() {
    shoeAlign.style.backgroundImage = 'linear-gradient(to top, rgba(250, 250, 250, 0),rgba(252, 64, 64, 0.336))';
    shoeAlign.style.boxShadow = '0px -20px 30px rgba(255, 123, 114, 0.671)';
    img.src = 'resources/nike-adapt-main.png';
}

check.addEventListener('click', changeBlue);
check1.addEventListener('click', changeRed);