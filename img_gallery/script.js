document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-item img");
    const imagePreview = document.getElementById("imagePreview");
    const previewImg = document.getElementById("previewImg");
    const closePreview = document.getElementById("closePreview");

    images.forEach(image => {
        image.addEventListener("click", function () {
            previewImg.src = image.src;
            imagePreview.style.display = "flex";
        });
    });

    closePreview.addEventListener("click", function () {
        imagePreview.style.display = "none";
    });
});