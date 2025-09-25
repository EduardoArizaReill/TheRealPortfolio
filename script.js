// Año del footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll suave para enlaces internos con clase .scroll
$(function () {
  $('a[href^="#"].scroll').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var $el = $(target);
    if ($el.length) {
      $('html, body').animate({ scrollTop: $el.offset().top - 60 }, 700);
    }
  });

  // Activa tooltips si los usas en algún icono
  $('[data-toggle="tooltip"]').tooltip();
});
