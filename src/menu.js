import img1 from "./cocktails/01.jpg";
import img2 from "./cocktails/02.jpg";
import img3 from "./cocktails/03.jpg";
import img4 from "./cocktails/04.jpg";
import img5 from "./cocktails/05.jpg";
import img6 from "./cocktails/06.jpg";
import img7 from "./cocktails/07.jpg";
import img8 from "./cocktails/08.jpg";
import img9 from "./cocktails/09.jpg";
import img10 from "./cocktails/10.jpg";

const cocktails = [
    {
        name: "Tropical Sunset",
        description: "A delightful blend of pineapple juice, coconut rum, and a splash of grenadine, creating a mesmerizing gradient reminiscent of a tropical sunset.",
        url: img1
    },
    {
        name:"Caribbean Breeze",
        description:"Experience the refreshing breeze of the Caribbean with this mix of white rum, fresh lime juice, mint leaves, and a hint of simple syrup, serving as a perfect companion on warm summer days.",
        url: img2
    },
    {
        name:"Mango Tango",
        description:"Get ready to dance with the exotic flavors of mango, vodka, orange juice, and a touch of lime. This vibrant and fruity cocktail will have your taste buds doing the tango.",
        url: img3
    },
    {
        name:"Island Mule",
        description:"A tropical twist on the classic Moscow Mule. This version combines ginger beer, vodka, fresh lime juice, and a splash of pineapple juice for a zesty and invigorating treat.",
        url: img4
    },
    {
        name:"Coconut Mojito",
        description:"A tropical variation of the beloved Mojito. This cocktail blends coconut rum, muddled mint leaves, lime juice, simple syrup, and club soda, resulting in a refreshing and aromatic delight.",
        url: img5
    },
    {
        name:"Pineapple Paradise",
        description:"Transport yourself to a tropical paradise with this sweet and tangy blend of pineapple juice, rum, a hint of coconut cream, and a squeeze of fresh lime.",
        url: img6
    },
    {
        name:"Guava Margarita",
        description:"Add a burst of tropical flavor to the classic Margarita. This cocktail combines tequila, guava nectar, lime juice, and a touch of agave syrup for a fruity and tangy twist.",
        url: img7
    },
    {
        name:"Passionfruit Punch",
        description:"A luscious and tropical punch featuring passionfruit juice, rum, orange juice, and a splash of grenadine. Sip on this vibrant concoction and let it transport you to an island paradise.",
        url: img8
    },
    {
        name:"Kiwi Mojito",
        description:"A refreshing twist on the traditional Mojito. Fresh kiwi muddled with mint leaves, lime juice, simple syrup, and a splash of soda water, creating a delightful balance of sweetness and freshness.",
        url: img9
    },
    {
        name:"Blue Lagoon",
        description:"Dive into the vibrant blue hues of this cocktail composed of vodka, blue curaçao, lemonade, and a garnish of a juicy orange slice. It's a visually stunning and delicious drink to enjoy by the beach or poolside.",
        url: img10
    }
]



function createMenuElement() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-content");
    cocktails.forEach((cocktail,index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add(`card${index+1}`);
        const image = new Image();
        image.src = cocktail.url;
        const namePara = document.createElement("p");
        namePara.classList.add("cocktail-name");
        namePara.textContent = `${cocktail.name}`;
        const descriptionPara = document.createElement("p");
        descriptionPara.classList.add("cocktail-description");
        descriptionPara.textContent = `${cocktail.description}`;
        card.appendChild(image);
        card.appendChild(namePara);
        card.appendChild(descriptionPara);
        menuContainer.appendChild(card);
    });
    return menuContainer;
}

export default createMenuElement();