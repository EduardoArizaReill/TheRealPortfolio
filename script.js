/* =========================================================
   script.js — Portfolio Eduardo Ariza Reillo
   Requiere jQuery y Bootstrap 3 (cargados en index.html)
   Estructura en raíz: index.html, styles.css, script.js, /assest
   ========================================================= */

/* ---------- Año dinámico en el footer ---------- */
(function setYear() {
  var yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();
})();

/* ---------- Utilidad: throttling para scroll ---------- */
function throttle(fn, wait) {
  var last = 0;
  return function () {
    var now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, arguments);
    }
  };
}

/* ---------- DOM Ready ---------- */
$(function () {
  var $win = $(window);
  var $doc = $(document);
  var $body = $('html, body');
  var $navbar = $('#main-nav');
  var navOffset = 60; // coincide con data-offset del ScrollSpy

  /* ----- Scroll suave para enlaces internos con .scroll ----- */
  $('a[href^="#"].scroll').on('click', function (e) {
    var target = $(this).attr('href');
    if (target.length && $(target).length) {
      e.preventDefault();
      $body.stop(true).animate({ scrollTop: $(target).offset().top - navOffset }, 700);
    }
  });

  /* ----- Cerrar menú colapsable tras hacer clic (móvil) ----- */
  $('.navbar-collapse a').on('click', function () {
    if ($('.navbar-toggle').is(':visible')) {
      $('.navbar-collapse').collapse('hide');
    }
  });

  /* ----- Tooltips de Bootstrap (si hay elementos con data-toggle) ----- */
  $('[data-toggle="tooltip"]').tooltip();

  /* ----- Añade target/rel seguro a enlaces externos marcados con data-external ----- */
  $(document).on('click', 'a[data-external]', function () {
    $(this).attr('target', '_blank').attr('rel', 'noopener noreferrer');
  });

  /* =========================================================
     REVEAL-ON-SCROLL (animación sutil)
     Aplica a: .xp-card, .timeline-item, .card (portfolio)
     Añade la clase .is-visible cuando el elemento entra en viewport
     Requiere en styles.css (ya incluido):
       .xp-card, .timeline-item { opacity:0; transform:translateY(20px); transition:all .6s ease; }
       .xp-card.is-visible, .timeline-item.is-visible { opacity:1; transform:none; }
     ========================================================= */
  var $reveals = $('.xp-card, .timeline-item, .card');

  function inViewport($el, offsetPx) {
    var rect = $el[0].getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= vh - (offsetPx || 100);
  }

  function revealOnScroll() {
    $reveals.each(function () {
      var $el = $(this);
      if (!$el.hasClass('is-visible') && inViewport($el, 120)) {
        $el.addClass('is-visible');
      }
    });
  }

  // Disparos iniciales
  revealOnScroll();

  // Eventos de scroll/resize con throttle
  $win.on('scroll resize', throttle(revealOnScroll, 100));

  /* ----- Opcional: sombrear navbar al hacer scroll ----- */
  function toggleNavShadow() {
    if ($win.scrollTop() > 10) {
      $navbar.addClass('nav-scrolled');
    } else {
      $navbar.removeClass('nav-scrolled');
    }
  }
  toggleNavShadow();
  $win.on('scroll', throttle(toggleNavShadow, 100));
});
