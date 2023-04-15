document.addEventListener("DOMContentLoaded", function(event) {
    const forms = document.querySelectorAll('form');
    // console.log(`Number of forms: ${forms.length}`);
    const textT3P = document.querySelector(".t3-p");
    textT3P.textContent = `Число элементов форм в массиве: ${forms.length}`;
});