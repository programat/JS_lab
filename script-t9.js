const emailInput = document.querySelector('#email');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const phoneInput = document.querySelector('#phone');
const fullNameInput = document.querySelector('#full-name');
const facultyInput = document.querySelector('#faculty');
const departmentInput = document.querySelector('#department');
const aboutInput = document.querySelector('#about');
const photoInput = document.querySelector('#photo');
const avatarImg = document.querySelector('#avatar');

const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/);

emailInput.addEventListener("input", function() {
    if (emailRegex.test(this.value)) {
        this.classList.add("valid");
        this.classList.remove("invalid");
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
});

usernameInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#f5f5f5';
});

usernameInput.addEventListener('blur', function() {
    this.style.backgroundColor = 'transparent';
});

passwordInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#f5f5f5';
});

passwordInput.addEventListener('blur', function() {
    this.style.backgroundColor = 'transparent';
});

confirmPasswordInput.addEventListener("input", function() {
    if (this.value === passwordInput.value) {
        this.classList.add("valid");
        this.classList.remove("invalid");
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
});

phoneInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#f5f5f5';
});

phoneInput.addEventListener('blur', function() {
    this.style.backgroundColor = 'transparent';
});

fullNameInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#f5f5f5';
});

fullNameInput.addEventListener('blur', function() {
    this.style.backgroundColor = 'transparent';
});

facultyInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#f5f5f5';
});

facultyInput.addEventListener('blur', function() {
    this.style.backgroundColor = 'transparent';
});

departmentInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#f5f5f5';
});

departmentInput.addEventListener('blur', function() {
    this.style.backgroundColor = 'transparent';
});

aboutInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#f5f5f5';
});

aboutInput.addEventListener('blur', function() {
    this.style.backgroundColor = 'transparent';
});

photoInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#f5f5f5';
});

photoInput.addEventListener('blur', function() {
    this.style.backgroundColor = 'transparent';
});

photoInput.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function() {
            const img = new Image();
            img.src = reader.result;

            img.onload = function() {
                if (img.height > 250) {
                    img.height = 250;
                }

                avatarImg.innerHTML = '';
                avatarImg.appendChild(img);
            };
        };

        reader.onerror = function() {
            console.log('Error reading file');
        }
    }
});