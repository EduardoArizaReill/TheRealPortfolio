// Año del footer
document.getElementById('year').textContent = new Date().getFullYear();

$(function () {
  // Scroll suave para enlaces internos .scroll
  $('a[href^="#"].scroll').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    var $el = $(target);
    if ($el.length) {
      $('html, body').animate({ scrollTop: $el.offset().top - 60 }, 700);
    }
  });

  // Tooltips (si los usas)
  $('[data-toggle="tooltip"]').tooltip();

  // ---- Animación al entrar en viewport (timeline + experiencia) ----
  function revealOnScroll() {
    var winTop = $(window).scrollTop();
    var winH = $(window).height();

    $('.timeline-item, .xp-card').each(function () {
      var top = $(this).offset().top;
      if (top < winTop + winH - 100) {
        $(this).addClass('visible');
      }
    });
  }

  // Lanzar al cargar y al hacer scroll/resize
  revealOnScroll();
  $(window).on('scroll resize', revealOnScroll);
});
