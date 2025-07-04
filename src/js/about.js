const content = document.getElementById("content")

const heartImage = "./img/heart.gif"

const aboutPage = () => {
    const p = document.createElement("p")
    p.textContent = "Welcome to our restaurant! We take pride in offering a diverse menu crafted from the freshest ingredients, prepared daily by our talented chefs. Our cozy atmosphere is perfect for family gatherings, romantic dinners, or casual meals with friends. From our signature dishes to our attentive service, every detail is designed to make your visit memorable. Thank you for choosing us—we look forward to serving you and making your dining experience exceptional!";
    
    p.classList.add("info")

    const img = document.createElement("img")
    img.src = heartImage
    
    img.style.display = "block"
    img.style.margin = "auto"
    img.style.marginTop = '30px';
    
    content.appendChild(p);
    content.appendChild(img)
}
export default aboutPage