const textBlock = document.getElementById("t6-text-block");
textBlock.addEventListener("mouseleave", () => {
    textBlock.style.color = "red";
    textBlock.style.fontStyle = "italic";
    textBlock.style.textDecoration = "underline";
});

textBlock.addEventListener('mouseenter', () => {
    // Изменяем стили текста при наведении на блок
    textBlock.style.color = '';
    textBlock.style.textDecoration = '';
    textBlock.style.fontStyle = '';
});