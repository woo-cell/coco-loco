import Logo from "./img/logo-B.png";
import homeContent from "./home.js";
import menuContent from "./menu.js";
import contactContent from "./contact.js";
import './style.css';

const b = document.querySelector(".content");

initialise(homeContent);

function createHeader() {
    const headerContainer = document.createElement("header");
    const img = new Image();
    img.src = Logo;
    const linksList = document.createElement("ul");
    const linkOne = document.createElement("li");
    const linkTwo = document.createElement("li");
    const linkThree = document.createElement("li");
    linkOne.innerHTML = '<button id="home-link">Home</button>';
    linkTwo.innerHTML = '<button id="menu-link">Menu</button>';
    linkThree.innerHTML = '<button id="contact-link">Contact</button>';
    linksList.appendChild(linkOne);
    linksList.appendChild(linkTwo);
    linksList.appendChild(linkThree);
    headerContainer.appendChild(img);
    headerContainer.appendChild(linksList);
    b.appendChild(headerContainer);
    linkOne.addEventListener("click", () => initialise(homeContent));
    linkTwo.addEventListener("click", () => initialise(menuContent));
    linkThree.addEventListener("click", () => initialise(contactContent)); 
}

function createMain(element){
    const mainContainer = document.createElement("main");
    mainContainer.innerHTML = "";
    mainContainer.appendChild(element);
    b.appendChild(mainContainer);
}

function createFooter() {
    const footerContainer = document.createElement("footer");
    const year = new Date().getFullYear();
    const footerPara = document.createElement("p");
    footerPara.innerHTML = `<p>&copy; ${year} Woo-Cell</p>`; 
    footerContainer.appendChild(footerPara);
    b.appendChild(footerContainer);
}

function initialise(element) {
    b.innerHTML = "";
    createHeader();
    createMain(element);
    createFooter();
}