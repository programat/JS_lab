const tasksItems = document.querySelectorAll('.tasks-item');

tasksItems.forEach(item => {
    const header = item.querySelector('.tasks-header');

    header.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});