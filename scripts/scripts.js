$(document).ready(function() {
    window.sr = ScrollReveal();

    sr.reveal('.scrollFadeIn', {
        duration: 1500,
        origin:'top',
        easing:'ease',
        move: 0,
    });

    sr.reveal('.fadeInBox', {
        duration: 1000,
     }, 50);
});
