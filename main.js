//ESERCIZIO
//Seleziono il burger-menu e al click cambio il display da 'none' a 'block' per renderlo visibile.
var menu = $('.header-right > a');

menu.click (function() {
  $ ('.hamburger-menu').fadeIn(1000);
});

//Ora seleziono il close e al click ripristino la proprietà.
var close = $('.close');

close.click (function() {
  $ ('.hamburger-menu').fadeOut(1000);
});
