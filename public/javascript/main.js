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