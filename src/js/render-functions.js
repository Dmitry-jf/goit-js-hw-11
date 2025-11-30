// - розмітка

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const gallery = document.querySelector(".gallery");
export const loader = document.querySelector(".loader");

export const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 150,
});

export function createGallery(images) {
 const markup = images
     .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `
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
</li>`
    )
    .join('');
    
    
  gallery.innerHTML = markup;
  lightbox.refresh();
}
  
 export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("hidden");
}

export function hideLoader() {
  loader.classList.add("hidden");
}