document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ script.js cargado correctamente");

  /* ================================
     AÑO AUTOMÁTICO EN FOOTER
  ================================ */
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  /* ================================
     VALIDACIÓN DEL FORMULARIO (contacto.html)
  ================================ */
  const formulario = document.getElementById("formulario-contacto");
  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !correo || !mensaje) {
        alert("⚠️ Por favor, completa todos los campos.");
        return;
      }

      // Crear toast dinámico
      const toastEl = document.createElement("div");
      toastEl.className = "toast align-items-center text-bg-success border-0 position-fixed bottom-0 end-0 m-3";
      toastEl.setAttribute("role", "alert");
      toastEl.innerHTML = `
        <div class="d-flex">
          <div class="toast-body">
            ✅ ¡Gracias por tu mensaje, ${nombre}! Me pondré en contacto pronto.
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      `;
      document.body.appendChild(toastEl);

      const toast = new bootstrap.Toast(toastEl);
      toast.show();

      toastEl.addEventListener("hidden.bs.toast", () => {
        toastEl.remove();
      });

      formulario.reset();
    });
  }

  /* ================================
     ANIMACIÓN SCROLL (reveal)
  ================================ */
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) {
        el.classList.add("active");
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  /* ================================
     PROGRESS BARS (habilidades.html)
  ================================ */
  const barras = document.querySelectorAll(".progress-bar");

  const animarBarras = () => {
    barras.forEach((bar) => {
      const porcentaje = bar.getAttribute("aria-valuenow");
      if (!bar.classList.contains("animado") && bar.getBoundingClientRect().top < window.innerHeight - 50) {
        bar.style.width = porcentaje + "%";
        bar.classList.add("animado");
      }
    });
  };

  animarBarras();
  window.addEventListener("scroll", animarBarras);

  /* ================================
     SMOOTH SCROLL
  ================================ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ================================
     SCROLLSPY DE BOOTSTRAP
  ================================ */
  const body = document.body;
  if (body) {
    new bootstrap.ScrollSpy(body, {
      target: "#navbarMain",
      offset: 80,
    });
  }

  /* ================================
     BOTÓN "IR ARRIBA"
  ================================ */
  const btnTop = document.createElement("button");
  btnTop.id = "btnTop";
  btnTop.innerHTML = `<i class="bi bi-arrow-up-short"></i>`;
  document.body.appendChild(btnTop);

  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const toggleBtnTop = () => {
    if (window.scrollY > 200) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
  };

  window.addEventListener("scroll", toggleBtnTop);
  toggleBtnTop();
});
