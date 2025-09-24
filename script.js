// ================================
// Sidebar: mostrar/ocultar contactos
// ================================
(function () {
  const sidebar = document.querySelector("[data-sidebar]");
  const toggleBtn = document.querySelector("[data-sidebar-btn]");
  if (sidebar && toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("is-open");
      // Si quieres cambiar el texto del botón:
      const span = toggleBtn.querySelector("span");
      if (span) {
        span.textContent = sidebar.classList.contains("is-open")
          ? "Hide Contacts"
          : "Show Contacts";
      }
    });
  }
})();

// ================================
// Navegación: cambiar de sección
// ================================
(function () {
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("article[data-page]");

  function setActive(pageName) {
    // activar/desactivar artículos
    pages.forEach((p) => {
      p.classList.toggle("active", p.getAttribute("data-page") === pageName);
    });
    // activar estado visual en navbar
    navLinks.forEach((btn) => {
      btn.classList.toggle("active", btn.textContent.trim().toLowerCase() === pageName);
    });
  }

  navLinks.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.textContent.trim().toLowerCase(); // "About" -> "about"
      setActive(target);
      // scroll al inicio de contenido en móviles
      document.querySelector(".main-content")?.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Asegura una sección por defecto (about) al cargar
  if (pages.length) setActive("about");
})();

// ================================
// Formulario de contacto: habilitar botón al validar
// ================================
(function () {
  const form = document.querySelector("[data-form]");
  if (!form) return;

  const inputs = form.querySelectorAll("[data-form-input]");
  const submitBtn = form.querySelector("[data-form-btn]");

  function validate() {
    const valid = Array.from(inputs).every((el) => el.value.trim() !== "");
    if (submitBtn) submitBtn.disabled = !valid;
  }

  inputs.forEach((el) => el.addEventListener("input", validate));
  validate();

  // Evita navegación real (demo)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Aquí podrías integrar EmailJS o tu backend
    alert("¡Gracias! Tu mensaje ha sido enviado.");
    form.reset();
    validate();
  });
})();

// ================================
// Utilidad: links externos del footer (opcional)
// (Se abre en nueva pestaña si tienen data-external)
// ================================
(function () {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-external]");
    if (!a) return;
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });
})();
