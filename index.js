(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const s=document.getElementById("content"),d="./img/hamburger.jpeg",m="./img/köfte.jpeg",p="./img/salad.jpeg",u="./img/pizza.jpeg",g="./img/tatli.jpeg",h="./img/adana.jpeg",f=()=>{const i=document.createElement("h1");i.textContent="Welcome to Our Restaurant",i.classList.add("home-title");const t=document.createElement("p");t.textContent="Welcome to our restaurant, where we serve the best dishes in town. Enjoy a delightful dining experience with us!",t.classList.add("home-description");const r=document.createElement("h2");r.textContent="Our Menu",r.classList.add("menu-title");const a=document.createElement("ul");a.innerHTML=`
        <li>
            <img src=${d} alt="hamburger" width="360" height="240">
            <div class="menu-item">
                <p>Hamburger</p>
                <p>Price: 12$</p>
            </div>
        </li>
        <li>
            <img src=${m} alt="köfte" widdth="360" height="240">
            <div class="menu-item">
                <p>Köfte Kebab</p>
                <p>Price: 12$</p>
            </div>
        </li>
        <li>
            <img src=${p} alt="salad" width="360" height="240">
            <div class="menu-item">
                <p>Salad</p>
                <p>Price: 6$</p>
            </div>
        </li>
        <li>
            <img src=${u} alt="pizza" width="360" height="240">
            <div class="menu-item">
                <p>Pizza</p>
                <p>Price: 10$</p>
            </div>
        </li>
        <li>
            <img src=${g} alt="baklava" width="360" height="240">
            <div class="menu-item">
                <p>Baklava</p>
                <p>Price: 8$</p>
            </div>
        </li>
        <li>
            <img src=${h} alt="baklava" width="360" height="240">
            <div class="menu-item">
                <p>Adana Kebab</p>
                <p>Price: 12$</p>
            </div>
        </li>
    `,a.classList.add("menu-list");const e=document.createElement("footer");e.innerHTML=`
        <ul>
            <li>Location: 123 Forest Drive, Forestville, Maine</li>
            <li></li>
        </ul>
    `,e.classList.add("footer"),s.appendChild(i),s.appendChild(t),s.appendChild(r),s.appendChild(a),s.appendChild(e)},v=document.getElementById("content"),$="./img/hamburger.jpeg",y="./img/köfte.jpeg",b="./img/salad.jpeg",L="./img/pizza.jpeg",P="./img/tatli.jpeg",w="./img/adana.jpeg",I=()=>{const i=document.createElement("ul");i.innerHTML=`
        <li>
            <img src=${$} alt="hamburger" width="360" height="240">
            <div class="menu-item">
                <p>Hamburger</p>
                <p>Price: 12$</p>
            </div>
        </li>
        <li>
            <img src=${y} alt="köfte" widdth="360" height="240">
            <div class="menu-item">
                <p>Köfte Kebab</p>
                <p>Price: 12$</p>
            </div>
        </li>
        <li>
            <img src=${b} alt="salad" width="360" height="240">
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
    `,i.classList.add("menu-list"),v.appendChild(i)},l=document.getElementById("content"),z="./img/heart.gif",E=()=>{const i=document.createElement("p");i.textContent="Welcome to our restaurant! We take pride in offering a diverse menu crafted from the freshest ingredients, prepared daily by our talented chefs. Our cozy atmosphere is perfect for family gatherings, romantic dinners, or casual meals with friends. From our signature dishes to our attentive service, every detail is designed to make your visit memorable. Thank you for choosing us—we look forward to serving you and making your dining experience exceptional!",i.classList.add("info");const t=document.createElement("img");t.src=z,t.style.display="block",t.style.margin="auto",t.style.marginTop="30px",l.appendChild(i),l.appendChild(t)},k=document.querySelector(".home"),j=document.querySelector(".menu"),C=document.querySelector(".about"),c=document.getElementById("content");k.addEventListener("click",()=>{c.innerHTML="",f()});j.addEventListener("click",()=>{c.innerHTML="",I()});C.addEventListener("click",()=>{c.innerHTML="",E()});
//# sourceMappingURL=index.js.map
