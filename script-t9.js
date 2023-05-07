const emailInput = document.querySelector('#email');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const phoneInput = document.querySelector('#phone');
const fullNameInput = document.querySelector('#full-name');
const dateInput = document.querySelector('#date-selector')
const facultyInput = document.querySelector('#faculty');
const departmentInput = document.querySelector('#department');
const aboutInput = document.querySelector('#about');

// const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/);


const form = document.querySelector("form"),
    nextBtn = document.querySelector(".nextBtn"),
    backBtn = document.querySelector(".backBtn"),
    allInput = document.querySelectorAll(".form-first input");

const formSecond = document.querySelector('.form-second')
    formFirst = document.querySelector('.form-first');

// const formIsValid = true;
function ValidateFirstForm() {
    let formIsValid = true;
    allInput.forEach(input => {
        if(input.value === ""){
            formIsValid = false;
        }
    });

    if (fullNameInput.classList.contains("invalid")) formIsValid = false;
    if (emailInput.classList.contains("invalid")) formIsValid = false;
    if (usernameInput.classList.contains("invalid")) formIsValid = false
    if (passwordInput.classList.contains("invalid")) formIsValid=false;
    if (confirmPasswordInput.classList.contains("invalid")) formIsValid=false;

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

nextBtn.onclick=ValidateFirstForm;

const submitButton = document.querySelector(".submit");

function ValidateSecondForm(event) {
    event.preventDefault();

    let form2IsValid = true;

    // Check if all fields are filled
    let allInput2 = [phoneInput, dateInput, facultyInput, departmentInput];
    allInput2.forEach(input => {
        if (input.value === "") {
            form2IsValid = false;
        }
    });

    // Check if any input field is invalid
    if (phoneInput.classList.contains("invalid")) form2IsValid = false;
    if (dateInput.classList.contains("invalid")) form2IsValid = false;
    if (facultyInput.classList.contains("invalid")) form2IsValid = false;
    if (departmentInput.classList.contains("invalid")) form2IsValid = false;
    if (aboutInput.classList.contains("invalid")) form2IsValid = false;

    console.log(form2IsValid)

    if (form2IsValid) {
        // Submit the form
        form.submit();
    }
}

submitButton.addEventListener('click', ValidateSecondForm);


const fullNameRegex = /^[A-ZА-ЯЁ][a-zа-яё]+\s[A-ZА-ЯЁ][a-zа-яё]+(\s[A-ZА-ЯЁ][a-zа-яё]+)?$/;
const fullNameMessage = document.createElement('span');
fullNameInput.insertAdjacentElement('afterend', fullNameMessage);
fullNameMessage.style.display = 'none';
fullNameMessage.classList.add("error-message");
fullNameInput.addEventListener("input", function() {
    if (fullNameRegex.test(this.value)) {
        this.classList.add("valid");
        this.classList.remove("invalid");
        fullNameMessage.style.display = 'none';
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
        fullNameMessage.innerText = "Full name can only contain letters and spaces. It must have at least 2 words and each word must be at least 2 characters long.";
        fullNameMessage.style.display = 'block';
    }
});

const usernameRegex = /^[a-zA-Z0-9]([-_]?[a-zA-Z0-9]){4,}$/;
const usernameMessage = document.createElement('span');
usernameInput.insertAdjacentElement('afterend', usernameMessage);
usernameMessage.style.display = 'none';
usernameMessage.classList.add("error-message");
usernameInput.addEventListener("input", function() {
    if (usernameRegex.test(this.value)) {
        // console.log("username is true")
        this.classList.add("valid");
        this.classList.remove("invalid");
        usernameMessage.style.display = 'none';
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
        usernameMessage.innerText = "Username can only contain letters, numbers, hyphens, and underscores. It must not have spaces or special characters and must be at least 5 characters long. Hyphens and underscores can only be used at the beginning or end and cannot be consecutive";
        usernameMessage.style.display = 'block';
    }
});

const emailRegex = new RegExp(/^[a-zA-Z0-9]{2,}([.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]{2,})+$/);
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


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&]{5,}$/;
const passwordMessage = document.createElement('span');
passwordInput.insertAdjacentElement('afterend', passwordMessage);
passwordMessage.style.display = 'none';
passwordMessage.classList.add("error-message");


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

const phoneRegex = /^\+\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/;
const phoneMessage = document.createElement('span');
phoneInput.insertAdjacentElement('afterend', phoneMessage);
phoneMessage.style.display = 'none';
phoneMessage.classList.add("error-message");

phoneInput.addEventListener("input", function() {
    if (phoneRegex.test(this.value)) {
        console.log("Phone number is valid");
        this.classList.add("valid");
        this.classList.remove("invalid");
        phoneMessage.style.display = 'none';
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
        phoneMessage.innerText = "Please enter a valid phone number in the format +X-XXX-XXX-XX-XX";
        phoneMessage.style.display = 'block';
    }
});

dateInput.addEventListener("input", function() {
    if (dateInput.value) {
        this.classList.add("valid");
        this.classList.remove("invalid");
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
});

const facultyRegex = /^[a-zA-Za-яА-Я]{2,10}$/;
const facultyMessage = document.createElement('span');
facultyInput.insertAdjacentElement('afterend', facultyMessage);
facultyMessage.style.display = 'none';
facultyMessage.classList.add("error-message");

facultyInput.addEventListener("input", function() {
    if (facultyRegex.test(this.value)) {
        console.log("Faculty is valid");
        this.classList.add("valid");
        this.classList.remove("invalid");
        facultyMessage.style.display = 'none';
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
        facultyMessage.innerText = "The faculty name must contain only letters and be between 2 and 10 characters long.";
        facultyMessage.style.display = 'block';
    }
});

const departmentRegex = /^(?:[A-ZА-я][a-zа-я]{0,19}\s){0,4}[A-ZА-я][a-zа-я]{0,19}$/;
const departmentMessage = document.createElement('span');
departmentInput.insertAdjacentElement('afterend', departmentMessage);
departmentMessage.style.display = 'none';
departmentMessage.classList.add("error-message");

departmentInput.addEventListener("input", function() {
    if (departmentRegex.test(this.value)) {
        console.log("Faculty name is valid")
        this.classList.add("valid");
        this.classList.remove("invalid");
        departmentMessage.style.display = 'none';
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
        departmentMessage.innerText = "The faculty name must contain 1 to 5 words, each word can have maximum 20 characters, and each word should start with an uppercase letter followed by lowercase letters only";
        departmentMessage.style.display = 'block';
    }
});

const aboutMessage = document.createElement('span');
aboutInput.insertAdjacentElement('afterend', aboutMessage);
aboutMessage.style.display = 'none';
aboutMessage.classList.add("error-message");

aboutInput.addEventListener("input", function() {
    if (this.value.length <= 300) {
        console.log("About is true")
        this.classList.add("valid");
        this.classList.remove("invalid");
        aboutMessage.style.display = 'none';
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
        aboutMessage.innerText = "The about field cannot exceed 300 characters";
        aboutMessage.style.display = 'block';
    }
});

//Hello1@


