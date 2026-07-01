/*Loop-rendered dynamic content
my list of item consist of types of tattos one can hav*/

const services = [
    {
        name: "NEOTRADITIONAL TATTOOS",
        image: "f:/tattoo stuff/neotrad.jpg",
        description: "We specialize in neotraditional tattoos, blending classic techniques with modern designs."
    },
    {
        name: "BLACKWORK TATTOOS",
        image: "f:/tattoo stuff/blackwork.jpg",
        description: "Our blackwork tattoos are bold and striking, perfect for making a statement."
    },
    {
        name: "WATERCOLOR TATTOOS",
        image: "f:/tattoo stuff/watercolor.jpg",
        description: "Experience the beauty of watercolor tattoos, with vibrant colors and artistic designs."
    },
    {
        name: "REALISM TATTOOS",
        image: "f:/tattoo stuff/realism2.jpg",
        description: "Our realism tattoos capture intricate details and lifelike representations."
    },
    {
        name: "COLOR TATTOOS",
        image: "f:/tattoo stuff/color.jpg",
        description: "Vibrant and colorful tattoos that make a bold statement."
    }
];
const serviceContainer = document.getElementById("service-container");
if(serviceContainer){
services.forEach(service => {

    serviceContainer.innerHTML += `
        <div class="service-card">
            <img src="${service.image}" alt="${service.name}">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        </div>
    `;

});
}
console.log("Service cards generated successfully.");

//Click-to-reveal on your banner
/* clicking on my banner toggles the overlay which takes the user directly to my portfolio then to the booking form */
const heroBanner = document.getElementById("heroBanner");
const heroOverlay = document.getElementById("heroOverlay");

if(heroBanner && heroOverlay){

    heroBanner.addEventListener("click", function(){

        heroOverlay.classList.toggle("show");

    });

}
console.log("Hero banner toggle functionality initialized successfully.");
 //Form handling with validation feedback
 /* This section handles the booking form submission, providing feedback to the user based on input validation giving short alerts and comments */
const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");

if(bookingForm && message){

bookingForm.addEventListener("submit", function(event){

    event.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const tattoo = document.getElementById("tattoo-type").value;
    const date = document.getElementById("appointment-date").value;

    if(fullName === "" || email === "" || tattoo === "" || date === ""){

        message.textContent = "Please fill in all required fields.";
        message.style.color = "red";

    }else{

        message.textContent = "Booking submitted successfully!";
        message.style.color = "green";

        bookingForm.reset();

    }

});
}
