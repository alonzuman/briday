const mobileMenu = document.querySelector('.mobile-nav-menu');
const mobileMenuButton = document.getElementById('menu-toggle-button');
const navbar = document.getElementById('navbar');

const contactFormSection = document.getElementById('contact-form-section');
const contactForm = document.getElementById('contact-form');
const contactButton = document.getElementById('contact-button');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');
const contactFormAlert = document.getElementById('contact-form-alert');

contactForm.addEventListener('submit', e => {
  e.preventDefault()
  if (contactName.value.trim().length === 0 || contactEmail.value.trim().length === 0 || contactMessage.value.trim().length === 0) {
    contactFormAlert.style.display = 'block'
  } else if (contactName.value.length !== 0 && contactEmail.value.length !== 0 && contactMessage.value.length !== 0){
    console.log(contactName.value, contactEmail.value, contactMessage.value)
    contactForm.style.display = 'none'
    contactFormSection.innerHTML = '<h1>Thank you for contacting us, we will reach you as soon as possible</h1>'
  }
})

window.addEventListener('scroll', () => {
  if (window.scrollY !== 0) {
    navbar.style.backgroundColor = 'white'
    navbar.style.boxShadow = '0px 0px 10px #00000015'
  } else {
    navbar.style.boxShadow = 'none'
    navbar.style.backgroundColor = 'transparent'
  }
})

mobileMenuButton.addEventListener('click', () => {
  console.log('opening menu')
  if (mobileMenu.style.display === 'block') {
    mobileMenuButton.innerText = 'Open Menu'
    mobileMenu.style.display = 'none'
  } else {
    mobileMenuButton.innerText = 'Close Menu'
    mobileMenu.style.display = 'block'
  }
})

mobileMenu.addEventListener('click', () => mobileMenu.style.display = 'none')
