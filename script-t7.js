const menuList = document.querySelector('.menu-list');
const menuStatus = document.querySelector('.menu-status');
const menuItems = menuList.children;

const menuTitle = document.querySelector('.menu-title');
menuTitle.addEventListener('click', function() {
    if (menuList.style.display === 'none'){menuList.style.display = 'block'}
    else menuList.style.display = 'none';
});


for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
        this.style.opacity = '0';
        setTimeout(() => {
            menuList.removeChild(this);
            if (menuList.children.length === 0) {
                menuStatus.style.display = 'block';
            }
        }, 1000);
    });
}
