document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector(".t8-image");
    const text = document.querySelector(".t8-text");

    setTimeout(function() {
        image.style.opacity = '1';
    }, 1000);

    image.addEventListener('mouseenter', function() {
        this.style.opacity = '0.4';
        text.style.opacity = '0.8';
    });

    image.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
        text.style.opacity = '0';
    });
});
