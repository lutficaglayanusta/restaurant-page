(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const r=document.getElementById("content"),d="https://lutficaglayanusta.github.io/restaurant-page/img/hamburger.jpeg",g="https://lutficaglayanusta.github.io/restaurant-page/img/k%C3%B6fte.jpeg",m="https://lutficaglayanusta.github.io/restaurant-page/img/salad.jpeg",p="https://lutficaglayanusta.github.io/restaurant-page/img/pizza.jpeg",h="https://lutficaglayanusta.github.io/restaurant-page/img/tatli.jpeg",f="https://lutficaglayanusta.github.io/restaurant-page/img/adana.jpeg",u=()=>{const i=document.createElement("h1");i.textContent="Welcome to Our Restaurant",i.classList.add("home-title");const t=document.createElement("p");t.textContent="Welcome to our restaurant, where we serve the best dishes in town. Enjoy a delightful dining experience with us!",t.classList.add("home-description");const s=document.createElement("h2");s.textContent="Our Menu",s.classList.add("menu-title");const n=document.createElement("ul");n.innerHTML=`
        <li>
            <img src=${d} alt="hamburger" width="360" height="240">
            <div class="menu-item">
                <p>Hamburger</p>
                <p>Price: 12$</p>
            </div>
        </li>
        <li>
            <img src=${g} alt="köfte" widdth="360" height="240">
            <div class="menu-item">
                <p>Köfte Kebab</p>
                <p>Price: 12$</p>
            </div>
        </li>
        <li>
            <img src=${m} alt="salad" width="360" height="240">
            <div class="menu-item">
                <p>Salad</p>
                <p>Price: 6$</p>
            </div>
        </li>
        <li>
            <img src=${p} alt="pizza" width="360" height="240">
            <div class="menu-item">
                <p>Pizza</p>
                <p>Price: 10$</p>
            </div>
        </li>
        <li>
            <img src=${h} alt="baklava" width="360" height="240">
            <div class="menu-item">
                <p>Baklava</p>
                <p>Price: 8$</p>
            </div>
        </li>
        <li>
            <img src=${f} alt="baklava" width="360" height="240">
            <div class="menu-item">
                <p>Adana Kebab</p>
                <p>Price: 12$</p>
            </div>
        </li>
    `,n.classList.add("menu-list");const e=document.createElement("footer");e.innerHTML=`
        <ul>
            <li>Location: 123 Forest Drive, Forestville, Maine</li>
            <li></li>
        </ul>
    `,e.classList.add("footer"),r.appendChild(i),r.appendChild(t),r.appendChild(s),r.appendChild(n),r.appendChild(e)},v=document.getElementById("content"),y="https://lutficaglayanusta.github.io/restaurant-page/img/hamburger.jpeg",b="https://lutficaglayanusta.github.io/restaurant-page/img/k%C3%B6fte.jpeg",$="https://lutficaglayanusta.github.io/restaurant-page/img/salad.jpeg",L="https://lutficaglayanusta.github.io/restaurant-page/img/pizza.jpeg",P="https://lutficaglayanusta.github.io/restaurant-page/img/tatli.jpeg",w="https://lutficaglayanusta.github.io/restaurant-page/img/adana.jpeg",I=()=>{const i=document.createElement("ul");i.innerHTML=`
        <li>
            <img src=${y} alt="hamburger" width="360" height="240">
            <div class="menu-item">
                <p>Hamburger</p>
                <p>Price: 12$</p>
            </div>
        </li>
        <li>
            <img src=${b} alt="köfte" widdth="360" height="240">
            <div class="menu-item">
                <p>Köfte Kebab</p>
                <p>Price: 12$</p>
            </div>
        </li>
        <li>
            <img src=${$} alt="salad" width="360" height="240">
            <div class="menu-item">
                <p>Salad</p>
                <p>Price: 6$</p>
            </div>
        </li>
        <li>
            <img src=${L} alt="pizza" width="360" height="240">
            <div class="menu-item">
                <p>Pizza</p>
                <p>Price: 10$</p>
            </div>
        </li>
        <li>
            <img src=${P} alt="baklava" width="360" height="240">
            <div class="menu-item">
                <p>Baklava</p>
                <p>Price: 8$</p>
            </div>
        </li>
        <li>
            <img src=${w} alt="baklava" width="360" height="240">
            <div class="menu-item">
                <p>Adana Kebab</p>
                <p>Price: 12$</p>
            </div>
        </li>
    `,i.classList.add("menu-list"),v.appendChild(i)},c=document.getElementById("content"),z="./img/heart.gif",E=()=>{const i=document.createElement("p");i.textContent="Welcome to our restaurant! We take pride in offering a diverse menu crafted from the freshest ingredients, prepared daily by our talented chefs. Our cozy atmosphere is perfect for family gatherings, romantic dinners, or casual meals with friends. From our signature dishes to our attentive service, every detail is designed to make your visit memorable. Thank you for choosing us—we look forward to serving you and making your dining experience exceptional!",i.classList.add("info");const t=document.createElement("img");t.src=z,t.style.display="block",t.style.margin="auto",t.style.marginTop="30px",c.appendChild(i),c.appendChild(t)},k=document.querySelector(".home"),C=document.querySelector(".menu"),j=document.querySelector(".about"),o=document.getElementById("content");u();k.addEventListener("click",()=>{o.innerHTML="",u()});C.addEventListener("click",()=>{o.innerHTML="",I()});j.addEventListener("click",()=>{o.innerHTML="",E()});
//# sourceMappingURL=index.js.map
