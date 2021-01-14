// select elements
const sections = document.querySelectorAll('section');
const nav = document.querySelector('#nav-list');
const header = document.querySelector('#header');
const sliderMenu = document.getElementById('slider');


// Build navbar
for (const section of sections) {
  let navItem = `
    <li>
      <a id="${section.id + "-nav"}" class href="${section.id}">${section.dataset.nav}</a>
    </li>`;
  nav.insertAdjacentHTML('beforeend', navItem);
}

// add active class to Section 1

document.addEventListener('readystatechange', () => {
  const liActive = document.querySelector('#section-1-nav');
  if (window.pageYOffset === 0) {
    liActive.classList.add('active')
  }
})



// smooth scrolling

const links = document.querySelectorAll("#header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(link) {
  link.preventDefault();

  const href = this.getAttribute("href");

  document.getElementById(href).scrollIntoView({
    behavior: "smooth"
  })
}

// hide scrollBar when scroll down

let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if(currentScrollPos <= 45) {
    // adding active class at the top of page
    const liActive = document.querySelector('#section-1-nav');
    liActive.classList.add('active')
    // show and hide header
  } else if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-45px";
  }
  prevScrollpos = currentScrollPos;
}

// avtive class Navbar

onScroll = () => {
  const sections = [...document.querySelectorAll('#header ul a')];
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  sections.forEach((currLink) => {
    const val = currLink.getAttribute('href');
    const refElement = document.getElementById(val);
    if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
      currLink.classList.add('active');
    } else {
      currLink.classList.remove('active');
    }
  });
}

document.addEventListener('scroll', onScroll);

// adding slider

const btn = document.querySelector('.menu');
const navContainer = document.querySelector('#nav')

btn.addEventListener('click', () => {
  if (navContainer.style.top === "" ) {
    navContainer.style.top = "-90px"
  } else {
    navContainer.style.top = ""
  }
})