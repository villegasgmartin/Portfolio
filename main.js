import './style.css';
import './responsive.css';


const close = document.querySelector('.close');
const contactForm = document.querySelector('.contact-form');
const contactButton = document.querySelectorAll('#contact-button');

const porfolioButton = document.querySelector('#portfolio-button');
const portfolioPopup = document.querySelector('.portfolio-popup');
const closeContact = document.querySelector('.close-contact');
const wwu = document.querySelector('#wwu');
const menu = document.querySelector('.ham');

const nav = document.querySelector('.nav');

const liMenu = document.querySelectorAll('.nav-item');
//conctact popuo

contactButton.forEach(el => {
    el.addEventListener('click', () => {
        contactForm.classList.add('active');
    });
})
closeContact.addEventListener('click', () => {
    contactForm.classList.remove('active');
})

liMenu.forEach( li =>{
    li.addEventListener('click', ()=>{
        nav.classList.remove('active');
        spanMiddle.classList.toggle('rotate-center');
        spanTop.classList.toggle('rotate-top'); 
        spanBottom.classList.toggle('rotate-bottom');
    })
})

//portfolio popup

porfolioButton.addEventListener('click', () => {
    portfolioPopup.classList.add('active');
});
close.addEventListener('click', () => {
    portfolioPopup.classList.remove('active');
});



//form alert

const form = document.querySelector('#form');
const message = document.querySelector('.success');

const fullName = document.getElementById('name')
const email = document.getElementById('email')
const telefono = document.getElementById('telefono')
const parrafo = document.getElementById('warning')

form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();
    const formInfo = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body:formInfo,
        headers:{
            'Accept':'application/json'
        }
    })

    let warning = ""
	let entrar = false
	let nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.
	let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	let tel = /^\d{7,14}$/ // 7 a 14 numeros.
    parrafo.innerHTML = ""

    if(!nombre.test(fullName.value) || !regexEmail.test(email.value ) ||!tel.test(telefono.value)) {
		warning += 'Please check your data';
        parrafo.innerHTML = warning;
        parrafo.style.padding= '21px 43px';
        form.reset();

        setTimeout(() => {
            parrafo.style.display = 'none';
        }, 1000);
        return parrafo;

	} else{
        
        this.reset()
        message.classList.add('active');
        setTimeout(() => {
            message.classList.remove('active');
        }, 1000);
        
    }
    
}

//loader


const loader = document.querySelector('#loader');
const widthScreen = window.screen.width;


window.addEventListener('load', () => {
   
   if(widthScreen > 768){
      
           loader.style.display = 'block';
           setTimeout(() => {
                        loader.style.display = 'none';
                        loader.style.setProperty("animation-play-state", "paused"); 
                               
                  }, 1800);
                  
     

   }else{
       
        loader.style.display = 'none';
       
       loader.style.setProperty("animation-play-state", "paused"); 
   }
});
     


// window.addEventListener('load', () => {
//      console.log(widthScreen);
//     if(widthScreen > 768){
//         console.log(widthScreen);
//         setTimeout(() => {
//             loader.style.display = 'block';
//             loader.style.setProperty("animation-play-state", "paused"); 
                   
//       }, 1800);

//     }else{
        
        
//         loader.style.setProperty("animation-play-state", "paused"); 
//     }
//  });
        
    






//logo hablando input*/

const input = document.querySelectorAll('.input');

const cara = document.querySelectorAll('.img-contact');


input.forEach( element =>{
    element.addEventListener('input', (event) => {    
        
        
            let inputSeleccionado = event.target;
            let divInput = inputSeleccionado.closest('.input-field');
            let image = document.createElement('img');
            image.src = './assets/gifs/habla-tinta2.gif';
            image.classList.add('img-contact');
            image.classList.add('active');
            
            
            divInput.append(image);
            
            setInterval(() => {
                image.classList.remove('active');
            }, 500);
        
     
        })
})

//cruz menu //menu popup

const spanMiddle = document.querySelector('.center');
const spanTop    = document.querySelector('.top');
const spanBottom = document.querySelector('.bottom');




menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    spanMiddle.classList.toggle('rotate-center');
    spanTop.classList.toggle('rotate-top'); 
    spanBottom.classList.toggle('rotate-bottom');
    
})

// traducir la pagina 



const translate = document.querySelector('#switch');

translate.addEventListener('click', () => {

    let id = translate.checked

    console.log(id);
    if(id){
        location.href="../indexSpanish.html"
    } else{
        location.href="../index.html"
    }

})
