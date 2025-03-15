// main js file

// color Swatches Btn
document.querySelectorAll(".colorSwatchesBtn").forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("btn-light");
    });
});

// Footer
// document.getElementById("copyrightYear").textContent = new Date().getFullYear();