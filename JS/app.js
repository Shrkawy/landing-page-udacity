// select elements
const sections = document.querySelectorAll('section');
const nav = document.querySelector('#nav-list');
const header = document.querySelector('header');



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
  liActive.classList.add('active')
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
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-60px";
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