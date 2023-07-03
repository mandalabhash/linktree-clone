let slideIndex = 0;
avatarSlides();

function avatarSlides() {
    let i;
    let slides = document.getElementsByClassName("image-container");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(avatarSlides, 2000);
}