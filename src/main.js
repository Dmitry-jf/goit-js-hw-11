
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

// ПОДІЯ -> ЗАПИТ -> РЕНДЕР

// Для зручності 3 функціі:
//   - функція - ЗАПИТ (axios)
//   - функція - розмітка (рендер)
//  - функція - прослуховувач (подія)

const refs = {
  form: document.querySelector('.form'),
  
};


refs.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const query = e.target.elements['search-text'].value.trim(); 


  clearGallery();
  showLoader();


  getImagesByQuery(query)
    .then(images => {
      hideLoader();

      if (images.length === 0) {
        iziToast.error({
          title: "",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return
      }
       createGallery(images);
    })
    .catch(error => {
      hideLoader()
      console.error(error);
    })
  e.target.reset();
});

