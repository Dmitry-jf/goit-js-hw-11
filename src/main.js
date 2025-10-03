
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formEl = document.getElementById("search-form");
const inputEl = document.getElementById("search-text");

formEl.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const query = inputEl.value.trim();

  if (query === "") {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term.",
      position: "topRight",
    });

    return;
    
  }

  showLoader();
  clearGallery();


  getImagesByQuery(query)
    .then(data => {
      if (!data || !Array.isArray(data.hits)) {
        throw new Error("Invalid response from server");
      }

      if (data.hits.length === 0) {
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      console.error("Error fetching images:", error);
      iziToast.error({
        title: "Error",
        message: "Something went wrong while fetching images. Please try later.",
        position: "topRight",
      });
    })
    .finally(() => {
      hideLoader();
      inputEl.value = "";
    });
}


















// // ./js/main.js
// import { getImagesByQuery } from "./pixabay-api.js";
// import { createGallery, clearGallery, showLoader, hideLoader } from "./render-functions.js";

// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// // Селектори
// const formEl = document.getElementById("search-form");
// const inputEl = document.getElementById("search-text");
// const galleryEl = document.getElementById("gallery");

// // Перехоплюємо сабміт форми
// formEl.addEventListener("submit", handleSearch);

// function handleSearch(event) {
//   event.preventDefault();

//   const query = inputEl.value.trim();

//   if (query === "") {
//     iziToast.warning({
//       title: "Warning",
//       message: "Please enter a search term.",
//       position: "topRight",
//     });
//     return;
//   }

//   // Починаємо пошук: показати лоадер, очистити попередні результати
//   showLoader();
//   clearGallery();

//   // Виконуємо HTTP-запит через модуль pixabay-api (функція повертає response.data)
//   getImagesByQuery(query)
//     .then(data => {
//       // data має містити поле hits (масив)
//       if (!data || !Array.isArray(data.hits)) {
//         throw new Error("Invalid response from server");
//       }

//       if (data.hits.length === 0) {
//         iziToast.error({
//           message: "Sorry, there are no images matching your search query. Please try again!",
//           position: "topRight",
//         });
//         return;
//       }

//       // Є результати — додаємо їх в DOM за одну операцію
//       createGallery(data.hits);

//       // (опціонально) повідомлення про успіх
//       // iziToast.success({
//       //   title: "Success",
//       //   message: `Found ${data.totalHits} images.`,
//       //   position: "topRight",
//       // });
//     })
//     .catch(error => {
//       console.error("Error fetching images:", error);
//       iziToast.error({
//         title: "Error",
//         message: "Something went wrong while fetching images. Please try later.",
//         position: "topRight",
//       });
//     })
//     .finally(() => {
//       // ховаємо лоадер після завершення
//       hideLoader();
//       // optional: очистити поле або залишити введений запит
//       // inputEl.value = "";
//     });
// }




