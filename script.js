// Shared interactions: mobile navigation, scroll progress, gallery filtering and lightbox.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const progress = document.querySelector(".progress-bar");
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const filterItems = (filter) => {
    galleryItems.forEach(item => {
      item.hidden = filter !== "all" && item.dataset.category !== filter;
    });
    filterButtons.forEach(button => button.classList.toggle("active", button.dataset.filter === filter));
  };
  filterButtons.forEach(button => button.addEventListener("click", () => filterItems(button.dataset.filter)));
  if (galleryItems.length) {
    const requestedFilter = new URLSearchParams(window.location.search).get("filter");
    if (["old", "new"].includes(requestedFilter)) filterItems(requestedFilter);
  }

  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const lightboxImage = lightbox.querySelector("img");
    const title = lightbox.querySelector(".lightbox-caption b");
    const caption = lightbox.querySelector(".lightbox-caption span");
    const closeButton = lightbox.querySelector(".lightbox-close");
    let lastFocused = null;
    const close = () => {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    };
    galleryItems.forEach(item => item.addEventListener("click", () => {
      const image = item.querySelector("img");
      lastFocused = item;
      lightboxImage.src = image.src.replace(/w=\d+/, "w=1800");
      lightboxImage.alt = image.alt;
      title.textContent = item.dataset.title || "";
      caption.textContent = item.dataset.caption || "";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      closeButton.focus();
    }));
    closeButton.addEventListener("click", close);
    lightbox.addEventListener("click", event => { if (event.target === lightbox) close(); });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !lightbox.hidden) close();
    });
  }
});
