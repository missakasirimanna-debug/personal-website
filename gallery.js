// Gallery page: empty-state handling and photo lightbox.
const photoGrid = document.querySelector("#photoGrid");
const galleryEmpty = document.querySelector("#galleryEmpty");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxClose = document.querySelector("#lightboxClose");

function updateGalleryEmptyState() {
  if (photoGrid && galleryEmpty) {
    const photos = photoGrid.querySelectorAll("img");
    galleryEmpty.hidden = photos.length > 0;
  }
}
if (photoGrid) {
  photoGrid.querySelectorAll(".photo-card img").forEach((img) => {
    img.addEventListener("click", () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
    img.addEventListener("error", () => {
      const card = img.closest(".photo-card");
      if (card) card.hidden = true;
      updateGalleryEmptyState();
    });
  });
}
updateGalleryEmptyState();
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}
if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightbox) lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeLightbox(); });
