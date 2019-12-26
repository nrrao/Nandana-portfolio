
// Event Listeners
$('nav').find('a').not( ':last-child' ).click(function(e) {
  e.preventDefault();
  let section = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(section).offset().top - 70
  });
});

function toggleMobileMenu() {
  let menu = document.getElementById('nav-bar');
     
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    document.getElementById('icon').classList.remove('fa-times');
    document.getElementById('icon').classList.add('fa-bars');
  } else {
    menu.style.display = 'block';
    document.getElementById('icon').classList.remove('fa-bars');
    document.getElementById('icon').classList.add('fa-times');
  }
}
     

