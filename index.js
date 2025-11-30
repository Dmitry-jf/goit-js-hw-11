import{a as f,S as d,i as m}from"./assets/vendor-CYMld6vM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(s){const o={q:s,key:"52578833-1380a7e48419fcc1cc100434d",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return f.get("https://pixabay.com/api/",{params:o}).then(r=>r.data.hits)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:150});function g(s){const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:a,comments:p,downloads:u})=>`
<li class="photo-card">
  <a href="${n}" class="gallery-link" aria-label="${e}">
    <img src="${r}" alt="${e}" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item"><b>Likes</b><span>${t}</span></p>
    <p class="info-item"><b>Views</b><span>${a}</span></p>
    <p class="info-item"><b>Comments</b><span>${p}</span></p>
    <p class="info-item"><b>Downloads</b><span>${u}</span></p>
  </div>
</li>`).join("");c.innerHTML=o,h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function i(){l.classList.add("hidden")}const v={form:document.querySelector(".form")};v.form.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();b(),L(),y(o).then(r=>{if(i(),r.length===0){m.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(r)}).catch(r=>{i(),console.error(r)}),s.target.reset()});
//# sourceMappingURL=index.js.map
