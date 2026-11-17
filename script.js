
const button = document.getElementById("openButton");
const surprise = document.getElementById("surprise");

button.addEventListener("click", function () {
    surprise.classList.remove("hidden");
    button.style.display = "none";

    surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
