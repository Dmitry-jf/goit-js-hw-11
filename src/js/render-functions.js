
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 


const galleryEl = document.getElementById("gallery");
const loaderEl = document.getElementById("loader");


const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

/**
 * 
 * @param {Array} images 
 */
export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;


  const markup = images
    .map(img => {
      const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = img;
      return `
<li class="photo-card">
  <a href="${largeImageURL}" class="gallery-link" aria-label="${tags}">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item"><b>Likes</b><span>${likes}</span></p>
    <p class="info-item"><b>Views</b><span>${views}</span></p>
    <p class="info-item"><b>Comments</b><span>${comments}</span></p>
    <p class="info-item"><b>Downloads</b><span>${downloads}</span></p>
  </div>
</li>`;
    })
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", markup);

  lightbox.refresh();
}


export function clearGallery() {
  galleryEl.innerHTML = "";
}

export function showLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add("is-active");
}

export function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.remove("is-active");
}
