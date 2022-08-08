let isModalOpen = false;
let contrast = false;
const scaleFactor = 1 / 20;

let pageLoaded = false;
let timeElapsed = false;

loadPage();
alert();

function alert() {
  alert('Hi! Welcome to my page! I am currently running Adobe Target tests so if you see some wonky stuff try not to pay too much attention to it. Thanks!')
}

function loadPage() {
    $(window).on("load", function() {
        setTimeout(() => {
            $(".loader-wrapper").fadeOut("slow");
        }, 2000)
      });
}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for (let i = 0; i < shapes.length; i++) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;

      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
  }

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal-overlay-loading');
    const success = document.querySelector('.modal-overlay-success');

    loading.classList += ' modal-overlay-visible'
     emailjs
        .sendForm (
            'service_rh0kavb', 'template_7fa317p', event.target, 'user_DRxJ18uk3xgkYakVhvZLw'
    ).then(() => {
        console.log('this worked');
        loading.classList.remove('modal-overlay-visible');
        success.classList += ' modal-overlay-visible';
    }).catch(() => {
        loading.classList.remove('modal-overlay-visible');
        alert('The email service is temporarily unavailable. Please contact me directly at henrysama58@gmail.com.');
    }
    )
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal-open');
    }
    isModalOpen = true;
    document.body.classList += ' modal-open';
}

function toggleContrast() {
    contrast = !contrast;
    if (contrast) {
        document.body.classList += ' dark-mode';
    } else {
    document.body.classList.remove('dark-mode');
    }
}
