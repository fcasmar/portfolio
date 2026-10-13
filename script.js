"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  navigation.classList.toggle("is-open", !isOpen);
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", event => {
  if (!event.target.closest(".site-header")) closeMenu();
});
window.matchMedia("(min-width: 761px)").addEventListener("change", event => {
  if (event.matches) closeMenu();
});

if ("IntersectionObserver" in window) {
  const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-18% 0px -55% 0px", threshold: 0 });
  ["proyectos", "experiencia", "perfil", "contacto"].forEach(id => sectionObserver.observe(document.getElementById(id)));
}

const copyButton = document.querySelector(".copy-email");
const copyStatus = document.getElementById("copy-status");
let copyResetTimer;
copyButton.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(email);
    copyButton.querySelector("span").textContent = "Email copiado";
    copyButton.querySelector("use").setAttribute("href", "#i-check");
    copyStatus.textContent = "Dirección de email copiada al portapapeles.";
  } catch {
    copyButton.querySelector("span").textContent = email;
    copyStatus.textContent = "Puedes seleccionar y copiar la dirección de email que aparece arriba.";
  }
  clearTimeout(copyResetTimer);
  copyResetTimer = setTimeout(() => {
    copyButton.querySelector("span").textContent = "Copiar email";
    copyButton.querySelector("use").setAttribute("href", "#i-copy");
    copyStatus.textContent = "";
  }, 4500);
});

document.getElementById("year").textContent = String(new Date().getFullYear());
