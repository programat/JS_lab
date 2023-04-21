const emailInput = document.querySelector('#email');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const phoneInput = document.querySelector('#phone');
const fullNameInput = document.querySelector('#full-name');
const facultyInput = document.querySelector('#faculty');
const departmentInput = document.querySelector('#department');
const aboutInput = document.querySelector('#about');

// const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/);
const emailRegex = new RegExp(/^[a-zA-Z0-9]{2,}([.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]{2,})+$/);


const form = document.querySelector("form"),
    nextBtn = document.querySelector(".nextBtn"),
    backBtn = document.querySelector(".backBtn"),
    allInput = document.querySelectorAll(".form-first input");

const formSecond = document.querySelector('.form-second')
    formFirst = document.querySelector('.form-first');

nextBtn.onclick=function() {
    let formIsValid = true;
    allInput.forEach(input => {
        if(input.value === ""){
            formIsValid = false;
        }
    });
    if (emailInput.classList.contains("invalid")){
        formIsValid = false;
    }
    if(formIsValid){
        form.classList.add('secActive');
        formFirst.style.display = 'none';
        formSecond.style.display = 'block';
    } else {
        form.classList.remove('secActive');
        formSecond.style.display = 'none';
    }
};
backBtn.addEventListener("click", () => {
    formFirst.style.display = 'block';
    form.classList.remove('secActive');
    formSecond.style.display = 'none';
});


emailInput.addEventListener("input", function() {
    if (emailRegex.test(this.value)) {
        console.log("true")
        this.classList.add("valid");
        this.classList.remove("invalid");
    } else {
        console.log("false")
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
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

