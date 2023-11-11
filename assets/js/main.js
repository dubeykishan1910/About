/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    //   for small size if hembargar is showing after clicking nav will appear
      if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        })
      }

    //   menu hidding by removeing class name when click on close button

    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
    }


    
/*=============== REMOVE MENU MOBILE ===============*/
// close navbar when click on any link of navbar like home
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
          },
      },
  });

/*=============== EMAIL JS ===============*/
const   contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactProject = document.getElementById('contact-project'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    //check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent = 'write all the input fields'

    }
    else{
                        //serviceID - templateID - #form - publickey
        emailjs.sendForm('service_7hw7dxq','template_skxs5xn','#contact-form','1Pelag6nIuAaDYl39')
        .then(() =>{
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Messsage send ✅'

            //remove after 5 sec
        setTimeout(()=>{
            contactMessage.textContent = ''
        },5000)
        },(error)=>{
            alert('oop somthing went wrong',error)
        } )  
        // to clear form 
        contactName.value=''
        contactEmail.value=''
        contactProject.value=''
    }
}
contactForm.addEventListener('submit',sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-ling'

const selectedTheme = localStorage.getItem('selected-thme')


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // this.scrolly >= 0 ? header.classList.add('bg-header')
    //                    : header.classList.remove('bg-header')
    header.classList.add('bg-header')
}
window.addEventListener('scroll' , scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr= ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__data,.footer__container`)
sr.reveal(`.home__info div`, {delay:600,origin:'bottom',interval:100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin:'left'})
sr.reveal(`.contact__content:nth-child(2)`, {origin:'right'})
sr.reveal(`.qualification__content`, {interval:100})