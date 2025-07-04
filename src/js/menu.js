const content = document.getElementById("content")

const hamburgerImage = './img/hamburger.jpeg';
const köfteImage = './img/köfte.jpeg';
const saladImage = './img/salad.jpeg';
const pizzaImage = './img/pizza.jpeg';
const tatliImage = './img/tatli.jpeg';
const adanaImage = './img/adana.jpeg';

const menuPage = () => {
    const ul = document.createElement('ul');
    ul.innerHTML = `
        <li>
            <img src=${hamburgerImage} alt="hamburger" width="360" height="240">
            <div class="menu-item">
                <p>Hamburger</p>
                <p>Price: 12$</p>
            </div>
        </li>
        <li>
            <img src=${köfteImage} alt="köfte" widdth="360" height="240">
            <div class="menu-item">
                <p>Köfte Kebab</p>
                <p>Price: 12$</p>
            </div>
        </li>
        <li>
            <img src=${saladImage} alt="salad" width="360" height="240">
            <div class="menu-item">
                <p>Salad</p>
                <p>Price: 6$</p>
            </div>
        </li>
        <li>
            <img src=${pizzaImage} alt="pizza" width="360" height="240">
            <div class="menu-item">
                <p>Pizza</p>
                <p>Price: 10$</p>
            </div>
        </li>
        <li>
            <img src=${tatliImage} alt="baklava" width="360" height="240">
            <div class="menu-item">
                <p>Baklava</p>
                <p>Price: 8$</p>
            </div>
        </li>
        <li>
            <img src=${adanaImage} alt="baklava" width="360" height="240">
            <div class="menu-item">
                <p>Adana Kebab</p>
                <p>Price: 12$</p>
            </div>
        </li>
    `;
    ul.classList.add('menu-list');

    content.appendChild(ul)
}
export default menuPage;