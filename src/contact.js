function createContactElement() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-content");
    const contacts = document.createElement("p");
    contacts.innerHTML = "<p>Phone: 123-456-7890 <br>Email: info@yourbusiness.com</p>";
    const location = document.createElement("p");
    location.innerHTML = "<p>Visit Us:<br>123 Tropical Street,<br>Sunshine City,<br>Paradise Island</p>";
    const hours = document.createElement("p");
    hours.innerHTML = "<p>We're open:<br>Monday - Saturday: 9:00 AM to 21:00 PM<br>Sunday: Closed</p>";
    const socials = document.createElement("p");
    socials.innerHTML = "<p>Follow Us:<br>[Social Media Icons/Links]</p>";
    const sayHi = document.createElement("p");
    sayHi.innerHTML = "<p>We can't wait to connect with you and share the tropical vibes! Feel free to reach out for any inquiries, feedback, or just to say aloha.</p>";
    contactContainer.appendChild(contacts);
    contactContainer.appendChild(location);
    contactContainer.appendChild(hours);
    contactContainer.appendChild(socials);
    contactContainer.appendChild(sayHi);
    return contactContainer;
}

export default createContactElement();