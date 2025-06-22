function e(e){return e&&e.__esModule?e.default:e}var s=globalThis,t={},r={},a=s.parcelRequire94c2;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,s){r[e]=s},s.parcelRequire94c2=a),(0,a.register)("27Lyk",function(e,s){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,r=new Map;t=function(e,s){for(var t=0;t<s.length-1;t+=2)r.set(s[t],{baseUrl:e,path:s[t+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["9vqfN","index.29d8aebf.js","1Ysh9","season-one.a9f648a8.jpg","7Ifx9","season-two.b7947ea0.jpg","lrC9S","season-three.d8e55b4f.jpg","8BYbt","season-four.8c8a02cf.jpg","9o9yT","season-five.b97db3ad.jpg","77bQ6","season-six.656176ac.jpg"]'));const n=async()=>await fetch("https://rickandmortyapi.com/api/character").then(e=>e.json()),i=e=>e.map(e=>`
    <li class="characters__item">
              <img
                src="${e.image}"
                alt="characters"
                class="characters__img"
              />
              <h4 class="characters__name">${e.name}</h4>
              <div class="characters__box">
                <p class="characters__subtitle-gray">Origin: </p>
                <p class="characters__subtitle">${"unknown"===e.origin.name?"":(()=>{if(!e.origin.name.includes("(Replacement Dimension)"))return e.origin.name;{let s=e.origin.name.indexOf("(Replacement Dimension)");return e.origin.name.slice(0,s)}})()}</p>
              </div>
              <div class="characters__box">
                <p class="characters__subtitle-gray">Location: </p>
                <p class="characters__subtitle">${"unknown"===e.location.name?"":(()=>{if(!e.location.name.includes("(Replacement Dimension)"))return e.location.name;{let s=e.location.name.indexOf("(Replacement Dimension)");return e.location.name.slice(0,s)}})()}</p>
              </div>
          </li>
    `).join(""),o=async()=>await fetch("https://rickandmortyapi.com/api/episode").then(e=>e.json());var c={};c=new URL("season-one.a9f648a8.jpg",import.meta.url).toString();var l={};l=new URL("season-two.b7947ea0.jpg",import.meta.url).toString();var d={};d=new URL("season-three.d8e55b4f.jpg",import.meta.url).toString();var _={};_=new URL("season-four.8c8a02cf.jpg",import.meta.url).toString();var p={};p=new URL("season-five.b97db3ad.jpg",import.meta.url).toString();var u={};u=new URL("season-six.656176ac.jpg",import.meta.url).toString();const m=s=>s.map(s=>{let t=null,r=s.episode.slice(2,3);return console.log(r),"1"===r?t=e(c):"2"===r?t=e(l):"3"===r?t=e(d):"4"===r?t=e(_):"5"===r?t=e(p):"6"===r&&(t=e(u)),`
<li class="episodes__item-type">
            <img src= ${t} alt="">
            <div class="episodes-overlay">
            <h4 class="episodes__title-type">${s.name}</h4>
             <div class="episdoes__box-flex">
              <div class="episdoes__box">
                <p class="episodes__title-gray">Season</p>
                <p class="episodes__subtitle-season"></p>
              </div>
              <div class="episdoes__box">
                <p class="episodes__title-gray">Air date</p>
                <p class="episodes__subtitle-date">${s.air_date}</p>
              </div>
            </div>
            </div>
          </li>
    `}).join(""),h=document.querySelector(".episodes__list-js"),g=document.querySelector("#episodes-select");let f=[];const b=e=>{if(!e)return f;let s={"first-season":"1","second-season":"2","third-season":"3","fourth-season":"4","fifth-season":"5","sixth-season":"6"}[e];return f.filter(e=>e.episode.slice(2,3)===s)};null!==g&&g.addEventListener("change",e=>{h.innerHTML=m(b(e.target.value))}),o().then(e=>{f=e.results,null!==h&&(h.innerHTML=m(f))});const v=document.querySelector(".characters__js-fix"),S=document.querySelector(".episodes__list-js");console.log(v),n().then(e=>{let s=i(e.results);null!==v&&(v.innerHTML=s)}),o().then(e=>{null!==S&&(S.innerHTML=m(e.results))}),document.querySelectorAll(".characters__item");const H=document.querySelector(".backdrop"),y=document.querySelector(".modal__close-btn"),R=document.querySelector(".characters__js-fix");console.log(R),R.addEventListener("click",e=>{e.target.closest(".characters__item")&&null!==H&&(H.classList.remove("characters-is-hidden"),y.addEventListener("click",e=>{H.classList.add("characters-is-hidden")}))});let j=4;const x=document.querySelector(".js-characters"),L=document.querySelector(".characters__btn-load");null!==L&&L.addEventListener("click",()=>{var e;j+=4,e=j,Array.from(x.children).forEach((s,t)=>{s.style.display=t<e?"block":"none"})});
//# sourceMappingURL=index.29d8aebf.js.map
