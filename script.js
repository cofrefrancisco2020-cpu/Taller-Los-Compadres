const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const quoteForm = document.querySelector("[data-quote-form]");
const serviceSelect = document.querySelector("[data-service-select]");
const whatsappLink = document.querySelector("[data-whatsapp-link]");

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  if (!nav || !navToggle) return;
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

const updateWhatsappMessage = () => {
  if (!serviceSelect || !whatsappLink) return;
  const service = serviceSelect.value;
  const message = `Hola Taller Los Compadres SPA, quiero cotizar ${service} para mi vehículo.`;
  whatsappLink.href = `https://wa.me/56984862938?text=${encodeURIComponent(message)}`;
};

setHeaderState();
updateWhatsappMessage();

window.addEventListener("scroll", setHeaderState, { passive: true });

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });
}

if (quoteForm && serviceSelect) {
  serviceSelect.addEventListener("change", updateWhatsappMessage);
  quoteForm.addEventListener("submit", (event) => event.preventDefault());
}
