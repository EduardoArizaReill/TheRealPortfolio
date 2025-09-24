// Sidebar toggle
(function(){
  const sidebar = document.querySelector("[data-sidebar]");
  const btn = document.querySelector("[data-sidebar-btn]");
  if(sidebar && btn){
    btn.addEventListener("click", ()=>{
      sidebar.classList.toggle("is-open");
      const span = btn.querySelector("span");
      if(span){
        span.textContent = sidebar.classList.contains("is-open") ? "Hide Contacts" : "Show Contacts";
      }
    });
  }
})();

// Navegación
(function(){
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("article[data-page]");
  function setActive(name){
    pages.forEach(p=>p.classList.toggle("active", p.getAttribute("data-page")===name));
    navLinks.forEach(b=>b.classList.toggle("active", b.textContent.trim().toLowerCase()===name));
  }
  navLinks.forEach(b=>b.addEventListener("click",()=>{
    setActive(b.textContent.trim().toLowerCase());
    document.querySelector(".main-content")?.scrollTo({top:0,behavior:"smooth"});
  }));
  setActive("about");
})();

// Formulario
(function(){
  const form = document.querySelector("[data-form]");
  if(!form) return;
  const inputs = form.querySelectorAll("[data-form-input]");
  const btn = form.querySelector("[data-form-btn]");
  function validate(){
    const ok = Array.from(inputs).every(el=>el.value.trim()!=="");
    if(btn) btn.disabled=!ok;
  }
  inputs.forEach(el=>el.addEventListener("input",validate));
  validate();
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("¡Gracias! Tu mensaje ha sido enviado.");
    form.reset();validate();
  });
})();
