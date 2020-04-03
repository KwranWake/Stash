var botonpopup = document.getElementById('button-aside'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    botoncerrar = document.getElementById('botoncerrar');

botonpopup.addEventListener('click', function name(params) {
     overlay.classList.add('active');    
});

botoncerrar.addEventListener('click', function name(params) {
    overlay.classList.remove('active');    
});

