/* global $ */



// Event Listeners
$('nav').find('a').not( ':last-child' ).click(function(e) {
  e.preventDefault();
  let section = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(section).offset().top - 70
  });
});


$('nav').find('a').last().click(function myFunction() {
  let x = document.getElementById('myTopNav');
  let f = document.getElementById('fafa');
  if (x.className === 'navbar') {
    x.className += ' responsive';
    f.className = 'fa fa-close';
    
  } else {
    x.className = 'navbar';
    f.className = 'fa fa-bars';
  }
});

