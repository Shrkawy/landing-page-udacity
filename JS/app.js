// smooth scrolling

const links = document.querySelectorAll("#header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(link) {
  link.preventDefault();

  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  })
}

// hide scrollBar when scroll down

let prevScrollpos = window.pageYOffset;
const header = document.getElementById('header');

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

// avtive class Navbar

let scrollPos = window.scrollY;
let liActive = document.querySelector('.active');

window.addEventListener('scroll', toggleActive);

function toggleActive() {
  scrollPos = window.scrollY;
  if (scrollPos < 550) {
    liActive.classList.remove('active')
    let newLiActive = document.querySelector('#company')
    newLiActive.classList.add('active')
    liActive = newLiActive;

  } else if (scrollPos >= 550 && scrollPos < 1070 ) {
    liActive.classList.remove('active')
    let newLiActive = document.querySelector('#features')
    newLiActive.classList.add('active')
    liActive = newLiActive

  } else if (scrollPos >= 1070 && scrollPos < 1710){
    liActive.classList.remove('active')
    let newLiActive = document.querySelector('#pricing')
    newLiActive.classList.add('active')
    liActive = newLiActive

  } else {
    liActive.classList.remove('active')
    let newLiActive = document.querySelector('#subscribe')
    newLiActive.classList.add('active')
    liActive = newLiActive
  }
}