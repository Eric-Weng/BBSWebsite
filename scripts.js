const selectElement = (s) => document.querySelector(s);
//Open menu
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//Close menu
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

$('nav a[href*="#"]').on('click',function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1100);
});

  $('#up').on('click',function(){
    $('html, body').animate({
      scrollTop: 0
    }, 1100);
});
AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
});