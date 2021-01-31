/*  ----- menu mobile ----- */
let menuBurger = document.querySelector('#menu-burger');
let barras = document.querySelector('#barras');
let line1 = document.querySelector('#line-1');
let line2 = document.querySelector('#line-2');
let line3 = document.querySelector('#line-3');
let frameMenu = document.querySelector('#frame');
let navMobile = document.querySelector('.nav-mobile');
let hidde = document.querySelector('#hidden');
let logo = document.querySelector('#logo');
let li = document.querySelector('.li');

barras.addEventListener('click', () => {
    line1.classList.toggle('changeline-1');
    line2.classList.toggle('changeline-2');
    line3.classList.toggle('changeline-3');

    frameMenu.classList.toggle('frame-menu-active');
    menuBurger.classList.toggle('barra-menu-active');

});


li.addEventListener('click', () => {
    line1.classList.remove('changeline-1');
    line2.classList.remove('changeline-2');
    line3.classList.remove('changeline-3');

    frameMenu.classList.remove('frame-menu-active');
    menuBurger.classList.remove('barra-menu-active');
});

// ------------------------------------------- funciones de animacion de scroll ------------------------------------------//
let animacion = document.querySelectorAll(".animacion-arriba");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacion.length; i++) {
        let alturaanimacion = animacion[i].offsetTop;
        if (alturaanimacion - 400 < scrollTop) {
            animacion[i].style.opacity = 1;
            animacion[i].classList.add("mostrar-arriba");
        }
    }
}

let animacionServUp = document.querySelectorAll(".animacion-arriba-servicios");

function mostrarScroll3() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacionServUp.length; i++) {
        let alturaanimacion = animacionServUp[i].offsetTop;
        if (alturaanimacion - 400 < scrollTop) {
            animacionServUp[i].style.opacity = 1;
            animacionServUp[i].classList.add("mostrar-arriba");
        }
    }
}


let animacionAbajo = document.querySelectorAll(".animacion-abajo");

function mostrarScroll1() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacionAbajo.length; i++) {
        let alturaanimacion = animacionAbajo[i].offsetTop;
        if (alturaanimacion - 400 < scrollTop) {
            animacionAbajo[i].style.opacity = 1;
            animacionAbajo[i].classList.add("mostrar-abajo");
        }
    }
}

let animacionServDown = document.querySelectorAll(".animacion-abajo-servicios");

function mostrarScroll4() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacionServDown.length; i++) {
        let alturaanimacion = animacionServDown[i].offsetTop;
        if (alturaanimacion - 400 < scrollTop) {
            animacionServDown[i].style.opacity = 1;
            animacionServDown[i].classList.add("mostrar-abajo");
        }
    }
}

let animacionDerecha = document.querySelectorAll(".animacion-derecha");

function mostrarScroll2() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacionDerecha.length; i++) {
        let alturaanimacion = animacionDerecha[i].offsetTop;
        if (alturaanimacion - 500 < scrollTop) {
            animacionDerecha[i].style.opacity = 1;
            animacionDerecha[i].classList.add("mostrar-derecha");
        }
    }
}

let animacionIzquierda = document.querySelectorAll(".animacion-izquierda");

function mostrarScroll5() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacionIzquierda.length; i++) {
        let alturaanimacion = animacionIzquierda[i].offsetTop;
        if (alturaanimacion - 500 < scrollTop) {
            animacionIzquierda[i].style.opacity = 1;
            animacionIzquierda[i].classList.add("mostrar-izquierda");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('scroll', mostrarScroll1);
window.addEventListener('scroll', mostrarScroll2);
window.addEventListener('scroll', mostrarScroll3);
window.addEventListener('scroll', mostrarScroll4);
window.addEventListener('scroll', mostrarScroll5);