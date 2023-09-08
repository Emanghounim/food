
let submitBtn=document.getElementById("submitBtn")

submitBtn.addEventListener("click",function(){
    validateAll()
})

function validateAll() {
    validateName()
    validateEmail()
    validatePhone()
    validateage()
    validatepassword()
    validatepassword()
    validateRepassword()

}

function validateName() {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let name = document.getElementById('nameInput').value;
    if (!regName.test(name)) {
        let nameAlert = document.getElementById("nameAlert")
        nameAlert.classList.remove("d-none")
        return false;
    } else {
        alert('Valid name given.');
        return true;
    }
}

function validateEmail() {

    var mail = /^[a-z A-Z]@[a-z]{3}(.com)/
    let emailInput = document.getElementById("emailInput")
    if (!emailInput.test(mail)) {
        let emailAlert = document.getElementById("emailAlert")
        emailAlert.classList.remove("d-none")
        return false;
    } else {
        alert('Valid name given.');
        return true;
    }

}


function validatePhone() {
    var phone = /^[1-9]\d{2}-\d{3}-\d{4}/
    let phoneInput = document.getElementById("phoneInput")
    if (!phoneInput.test(phone)) {
        let phoneAlert = document.getElementById("phoneAlert")
        phoneAlert.classList.remove("d-none")
        return false;
    } else {
        alert('Valid phone given.');
        return true;
    }

}


function validateage() {
    var age = /^[1-9]{5}/
    let ageInput = document.getElementById("ageInput")
    if (!ageInput.test(age)) {
        let ageAlert = document.getElementById("ageAlert")
        ageAlert.classList.remove("d-none")
        return false;
    } else {
        alert('Valid age given.');
        return true;
    }

}

function validatepassword() {
    var password = /^[1-9]{5}[a-z]{1}[1-9]{1,2}/
    let passwordInput = document.getElementById("passwordInput")
    if (!passwordInput.test(password)) {
        let passwordAlert = document.getElementById("passwordAlert")
        passwordAlert.classList.remove("d-none")
        return false;
    } else {
        alert('Valid password given.');
        return true;
    }

}

function validateRepassword() {

    let pass = validateage()
    let repasswordInput = document.getElementById("repasswordInput")
    if (pass == repasswordInput) {
        alert('Valid password given.');
        return true;
    }

    else {
        let repasswordAlert = document.getElementById("repasswordAlert")
        repasswordAlert.classList.remove("d-none")
    }

}
