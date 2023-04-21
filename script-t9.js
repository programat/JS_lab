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
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

const passwordMessage = document.createElement('span');
passwordInput.insertAdjacentElement('afterend', passwordMessage);
passwordMessage.style.display = 'none';


const form = document.querySelector("form"),
    nextBtn = document.querySelector(".nextBtn"),
    backBtn = document.querySelector(".backBtn"),
    allInput = document.querySelectorAll(".form-first input");

const formSecond = document.querySelector('.form-second')
    formFirst = document.querySelector('.form-first');

function ValidateForm() {
    let formIsValid = true;
    allInput.forEach(input => {
        if(input.value === ""){
            formIsValid = false;
        }
    });
    if (emailInput.classList.contains("invalid")){
        formIsValid = false;
    }

    if (passwordInput.classList.contains("invalid"))
    {formIsValid=false;}
    if (confirmPasswordInput.classList.contains("invalid")) {formIsValid=false;}

    if(formIsValid){
        form.classList.add('secActive');
        formFirst.style.display = 'none';
        formSecond.style.display = 'block';
    } else {
        form.classList.remove('secActive');
        formSecond.style.display = 'none';
    }
    console.log(formIsValid)
}

backBtn.addEventListener("click", () => {
    formFirst.style.display = 'block';
    form.classList.remove('secActive');
    formSecond.style.display = 'none';
});

nextBtn.onclick=ValidateForm;

emailInput.addEventListener("input", function() {
    if (emailRegex.test(this.value)) {
        // console.log("true")
        this.classList.add("valid");
        this.classList.remove("invalid");
    } else {
        // console.log("false")
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
});
passwordInput.addEventListener("input", function() {
    if (passwordRegex.test(this.value)) {
        console.log("Password is true")
        this.classList.add("valid");
        this.classList.remove("invalid");
        passwordMessage.style.display = 'none';
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
        passwordMessage.innerText = "The password must contain at least one lowercase and one uppercase letter, one number, one special character and must be at least 5 characters";
        passwordMessage.style.display = 'block';
    }
});

confirmPasswordInput.addEventListener("input", function() {
    if (this.value === passwordInput.value) {
        console.log("CPassword is true")
        this.classList.add("valid");
        this.classList.remove("invalid");
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
});

//Hello1@


