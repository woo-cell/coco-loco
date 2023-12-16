function createHomeElement() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-content");
    const homeTitle = document.createElement("h1");
    homeTitle.classList.add("home-title");
    homeTitle.textContent = "COCO LOCO!";
    const homePara = document.createElement("p");
    homePara.classList.add("welcome");
    homePara.textContent = "Savor the taste of paradise in every sip. Cheers to an unforgettable experience!";
    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(homePara);
    return homeContainer;
}

export default createHomeElement();