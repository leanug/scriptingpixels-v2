document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("main-image") as HTMLImageElement | null;
  const thumbnails = document.querySelectorAll("#thumbnail-container > div");

  if (!mainImage) return;

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const target = thumb as HTMLDivElement;
      const newSrc = target.dataset.image;
      
      if (newSrc) {
        mainImage.src = newSrc;
      }
    });
  });
});