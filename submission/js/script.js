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

