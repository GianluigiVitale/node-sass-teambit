$('.remove').click(function () {    // al click di .remove nascondo la scritta dei cookies
    $('.cookies').hide();
});

$('.icona .fa-bars').click(function () {    // quando si clicca l'hamburgher mostra l'icona della X e il menu a tendina
    $(this).hide();
    $('.icona .fa-times').show();
    $('.hamburger-menu').show();
});

$('.icona .fa-times').click(function () {   // quando si clicca la X nasconde il menu a tendina e mostra l'hamburgher
    $(this).hide();
    $('.icona .fa-bars').show();
    $('.hamburger-menu').hide();
});
