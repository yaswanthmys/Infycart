document.getElementById("product-share").addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: "Check this out!",
            url: window.location.href
        })
        .then(() => console.log("Shared!"))
        .catch(err => console.log("Error:", err))
    } else {
        alert("Sharing not supported on this device")
    }
});

const track = document.querySelector(".product-imgHolder");
const slides = document.querySelectorAll(".product-displayImg");
const prev = document.querySelector(".product-leftBtn");
const next = document.querySelector(".product-rightBtn");

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

next.onclick = () => {
    index = (index + 1) % slides.length; // infinite loop
    updateCarousel();
};

prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length; // infinite loop
    updateCarousel();
};
