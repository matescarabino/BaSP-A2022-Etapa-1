var validates = {
    name: false,
    surname: false,
    dni: false,
    birth: false,
    phone: false,
    address: false,
    location: false,
    postalCode: false,
    mail: false,
    password: false,
    repeatPassword: false
};

var nameErrorMessage = 'Must have more than 3 letters.'
var surnameErrorMessage = 'Must have more than 3 letters.'
var dniErrorMessage = 'Must have more than 7 numbers.'
var birthErrorMessage = 'Select a date.'
var phoneErrorMessage = 'Must have more than 10 numbers.'
var addressErrorMessage = 'Must have at least 5 characters with letters, numbers and a space in between.'
var locationErrorMessage = 'Must have at least 3 characters with alphanumeric text.'
var postalCodeErrorMessage = 'Must have between 4 and 5 numbers.'
var mailErrorMessage = 'Enter a valid email.';
var passwordErrorMessage = 'Must contain at least one lowercase, a number and at least 8 characters.';
var repeatPasswordErrorMessage = 'Passwords must match.'

nameValidate();
surnameValidate();
dniValidate();
birthValidate();
phoneValidate();
addressValidate();
locationValidate();
postalCodeValidate();
mailValidate();
passwordValidate();
repeatPasswordValidate();

function nameValidate() {
    var name = document.getElementById('nameInput');

    name.onblur = function () {
        var hasLetter = false;
        var hasOther = false;
        var hasLenght = false;

        for (var i = 0; i < name.value.length; i++) {
            var charCode = name.value.charCodeAt(i);
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                hasLetter = true;
            }else{
                hasOther = true;
            };
        };

        if (name.value.length > 3) {
            hasLenght = true;
        };

        if (hasLetter && hasLenght) {
            var nameExpression = true;
        };

        if(hasOther == true){
            var nameExpression = false;
        };

        if (!nameExpression) {
            name.classList.add('invalid');
            nameError.innerHTML = nameErrorMessage;
            validates.name = false;
        };
    };

    name.onfocus = function () {
        if (name.classList.contains('invalid')) {
            name.classList.remove('invalid');
            nameError.innerHTML = "&nbsp;";
            validates.name = true;
        };
    };
};

function surnameValidate() {
    var surname = document.getElementById('surnameInput');

    surname.onblur = function () {
        var hasLetter = false;
        var hasOther = false;
        var hasLenght = false;

        for (var i = 0; i < surname.value.length; i++) {
            var charCode = surname.value.charCodeAt(i);
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                hasLetter = true;
            }else{
                hasOther = true;
            };
        };

        if (surname.value.length > 3) {
            hasLenght = true;
        };

        if (hasLetter && hasLenght) {
            var surnameExpression = true;
        };

        if(hasOther == true){
            var surnameExpression = false;
        };

        if (!surnameExpression) {
            surname.classList.add('invalid');
            surnameError.innerHTML = surnameErrorMessage;
            validates.surname = false;
        };
    };

    surname.onfocus = function () {
        if (surname.classList.contains('invalid')) {
            surname.classList.remove('invalid');
            surnameError.innerHTML = "&nbsp;";
            validates.surname = true;
        };
    };
};

function dniValidate() {
    var dni = document.getElementById('dniInput');

    dni.onblur = function () {
        var hasNumber = false;
        var hasOther = false;
        var hasLenght = false;

        for (var i = 0; i < dni.value.length; i++) {
            var charCode = dni.value.charCodeAt(i);
            if (charCode > 47 && charCode < 58) {
                hasNumber = true;
            }else{
                hasOther = true;
            };
        };

        if (dni.value.length > 7) {
            hasLenght = true;
        };

        if (hasNumber && hasLenght) {
            var dniExpression = true;
        };

        if(hasOther == true){
            var dniExpression = false;
        };

        if (!dniExpression) {
            dni.classList.add('invalid');
            dniError.innerHTML = dniErrorMessage;
            validates.dni = false;
        };
    };

    dni.onfocus = function () {
        if (dni.classList.contains('invalid')) {
            dni.classList.remove('invalid');
            dniError.innerHTML = "&nbsp;";
            validates.dni = true;
        };
    };
};

function birthValidate() {
    var birth = document.getElementById('birthInput');

    birth.onblur = function () {
        if (birth.value == '') {
            birth.classList.add('invalid');
            birthError.innerHTML = birthErrorMessage;
            validates.birth = false;
        };
    };

    birth.onfocus = function () {
        if (birth.classList.contains('invalid')) {
            birth.classList.remove('invalid');
            birthError.innerHTML = "&nbsp;";
            validates.birth = true;
        };
    };
};

function phoneValidate() {
    var phone = document.getElementById('phoneInput');

    phone.onblur = function () {
        var hasNumber = false;
        var hasOther = false;
        var hasLenght = false;

        for (var i = 0; i < phone.value.length; i++) {
            var charCode = phone.value.charCodeAt(i);
            if (charCode > 47 && charCode < 58) {
                hasNumber = true;
            }else{
                hasOther = true;
            };
        };

        if (phone.value.length > 10) {
            hasLenght = true;
        };

        if (hasNumber && hasLenght) {
            var phoneExpression = true;
        };

        if(hasOther == true){
            var phoneExpression = false;
        };

        if (!phoneExpression) {
            phone.classList.add('invalid');
            phoneError.innerHTML = phoneErrorMessage;
            validates.phone = false;
        };
    };

    phone.onfocus = function () {
        if (phone.classList.contains('invalid')) {
            phone.classList.remove('invalid');
            phoneError.innerHTML = "&nbsp;";
            validates.phone = true;
        };
    };
};

function addressValidate() {
    var address = document.getElementById('addressInput');

    address.onblur = function () {
        var hasLetter = false;
        var hasNumber = false;
        var hasSpace = 0;
        var hasLenght = false;

        for (var i = 0; i < address.value.length; i++) {
            var charCode = address.value.charCodeAt(i);
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                hasLetter = true;
            };
            if (charCode > 47 && charCode < 58) {
                hasNumber = true;
            };
            if (charCode == 32 && (i != 0 && i != address.value.length)) {
                hasSpace ++;
            };
            if (address.value.length > 5) {
                hasLenght = true;
            };

            if (hasLetter && hasNumber && (hasSpace == 1) && hasLenght) {
                var addressExpression = true;
            } else{
                var addressExpression = false;
            };
        };

        if (!addressExpression) {
            address.classList.add('invalid');
            addressError.innerHTML = addressErrorMessage;
            validates.address = false;
        };
    };

    address.onfocus = function () {
        if (address.classList.contains('invalid')) {
            address.classList.remove('invalid');
            addressError.innerHTML = "&nbsp;";
            validates.address = true;
        };
    };
};

function locationValidate() {
    var location = document.getElementById('locationInput');

    location.onblur = function () {
        var hasAlphanumeric = false;
        var hasOther = false;
        var hasLenght = false;

        for (var i = 0; i < location.value.length; i++) {
            var charCode = location.value.charCodeAt(i);
            if ((charCode > 64 && charCode < 91)||(charCode > 96 && charCode < 123)||(charCode > 47 && charCode < 58)){
                hasAlphanumeric = true;
            }else{
                hasOther = true;
            };
        };

        if (location.value.length > 3) {
            hasLenght = true;
        };

        if (hasAlphanumeric && hasLenght) {
            var locationExpression = true;
        };

        if(hasOther == true){
            var locationExpression = false;
        };

        if (!locationExpression) {
            location.classList.add('invalid');
            locationError.innerHTML = locationErrorMessage;
            validates.location = false;
        };
    };

    location.onfocus = function () {
        if (location.classList.contains('invalid')) {
            location.classList.remove('invalid');
            locationError.innerHTML = "&nbsp;";
            validates.location = true;
        };
    };
};

function postalCodeValidate() {
    var postalCode = document.getElementById('postalCodeInput');

    postalCode.onblur = function () {
        var hasNumber = false;
        var hasOther = false;
        var hasLenght = false;

        for (var i = 0; i < postalCode.value.length; i++) {
            var charCode = postalCode.value.charCodeAt(i);
            if ((charCode > 47 && charCode < 58)){
                hasNumber = true;
            }else{
                hasOther = true;
            };
        };

        if (postalCode.value.length > 3) {
            hasLenght = true;
        };

        if (hasNumber && hasLenght) {
            var postalCodeExpression = true;
        };

        if(hasOther == true){
            var postalCodeExpression = false;
        };

        if (!postalCodeExpression) {
            postalCode.classList.add('invalid');
            postalCodeError.innerHTML = postalCodeErrorMessage;
            validates.postalCode = false;
        };
    };

    postalCode.onfocus = function () {
        if (postalCode.classList.contains('invalid')) {
            postalCode.classList.remove('invalid');
            postalCodeError.innerHTML = "&nbsp;";
            validates.postalCode = true;
        };
    };
};

function mailValidate() {
    var mail = document.getElementById('emailInput');
    var mailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    mail.onblur = function () {
        if (!((mail.value).toLowerCase()).match(mailExpression)) {
            mail.classList.add('invalid');
            mailError.innerHTML = mailErrorMessage;
            validates.mail = false;
        }else{
            validates.mail = true;
        };
    };
    mail.onfocus = function () {
        if (mail.classList.contains('invalid')) {
            mail.classList.remove('invalid');
            mailError.innerHTML = "&nbsp;";
        };
    };
}

function passwordValidate(){
    var password = document.getElementById('passwordInput');

    password.onblur = function () {
        var hasBigLetter = false;
        var hasSmallLetter = false;
        var hasNumber = false;
        var hasLenght = false;

        for (var i = 0; i < password.value.length; i++) {
            var charCode = password.value.charCodeAt(i);
            if (charCode > 47 && charCode < 58) {
                hasNumber = true;
            };
            if (charCode > 64 && charCode < 91) {
                hasBigLetter = true;
            };
            if (charCode > 96 && charCode < 123) {
                hasSmallLetter = true;
            };
        };

        if (password.value.length > 7) {
            hasLenght = true;
        };

        if (hasBigLetter && hasSmallLetter && hasNumber && hasLenght) {
            var passExpression = true;
        } else {
            var passExpression = false;
        };

        if (!passExpression) {
            password.classList.add('invalid');
            passwordError.innerHTML = passwordErrorMessage;
            validates.password = false;
        };
    };

    password.onfocus = function () {
        if (password.classList.contains('invalid')) {
            password.classList.remove('invalid');
            passwordError.innerHTML = "&nbsp;";
            validates.password = true;
        };
    };
};

function repeatPasswordValidate(){
    var password = document.getElementById('passwordInput');
    var repeatPassword = document.getElementById('repeatPasswordInput');

    repeatPassword.onblur = function () {
        if (password.value != repeatPassword.value) {
            repeatPassword.classList.add('invalid');
            repeatPasswordError.innerHTML = repeatPasswordErrorMessage;
            validates.repeatPassword = false;
        };
    };

    repeatPassword.onfocus = function () {
        if (repeatPassword.classList.contains('invalid')) {
            repeatPassword.classList.remove('invalid');
            repeatPasswordError.innerHTML = "&nbsp;";
            validates.repeatPassword = true;
        };
    };
}

//Validate on Submit --------------------------------------------------------------------
document.form.onsubmit = function (event) {

    var name = document.getElementById('nameInput');
    var surname = document.getElementById('surnameInput');
    var dni = document.getElementById('dniInput');
    var birth = document.getElementById('birthInput');
    var phone = document.getElementById('phoneInput');
    var address = document.getElementById('addressInput');
    var location = document.getElementById('locationInput');
    var postalCode = document.getElementById('postalCodeInput');
    var mail = document.getElementById('emailInput');
    var password = document.getElementById('passwordInput');
    var repeatPassword = document.getElementById('repeatPasswordInput');

    if(validates.name === false){
        name.classList.add('invalid');
        nameError.innerHTML = nameErrorMessage;
    };
    if(validates.surname === false){
        surname.classList.add('invalid');
        surnameError.innerHTML = surnameErrorMessage;
    };
    if(validates.dni === false){
        dni.classList.add('invalid');
        dniError.innerHTML = dniErrorMessage;
    };
    if(validates.birth === false){
        birth.classList.add('invalid');
        birthError.innerHTML = birthErrorMessage;
    };
    if(validates.phone === false){
        phone.classList.add('invalid');
        phoneError.innerHTML = phoneErrorMessage;
    };
    if(validates.address === false){
        address.classList.add('invalid');
        addressError.innerHTML = addressErrorMessage;
    };
    if(validates.location === false){
        location.classList.add('invalid');
        locationError.innerHTML = locationErrorMessage;
    };
    if(validates.postalCode === false){
        postalCode.classList.add('invalid');
        postalCodeError.innerHTML = postalCodeErrorMessage;
    };
    if(validates.mail === false){
        mail.classList.add('invalid');
        mailError.innerHTML = mailErrorMessage;
    };
    if(validates.password === false){
        password.classList.add('invalid');
        passwordError.innerHTML = passwordErrorMessage;
    };
    if(validates.repeatPassword === false){
        repeatPassword.classList.add('invalid');
        repeatPasswordError.innerHTML = repeatPasswordErrorMessage;
    };


    showModal(name.value
        , surname.value
        , dni.value
        , birth.value
        , phone.value
        , address.value
        , location.value
        , postalCode.value
        , mail.value
        , password.value
        );

    event.preventDefault();
};

function showModal(name
    , surname
    , dni
    , birth
    , phone
    , address
    , location
    , postalCode
    , mail
    , password
    ) {

    var modal = document.getElementById("modalRegistro");
    var span = document.getElementById("close");
    var modalMessage = document.getElementById("modal-message");
    var modalBody = document.getElementById("modal-body");

    modal.style.display = "block";

    if (validates.name
        && validates.surname
        && validates.dni
        && validates.birth
        && validates.phone
        && validates.address
        && validates.location
        && validates.postalCode
        && validates.mail
        && validates.password
        && validates.repeatPassword
    ) {
        var [year, month, day] = birth.split('-');
        var birthFormated = [day, month, year].join('/');

        modalBody.innerHTML = `Name: ${name}<br>`;
        modalBody.innerHTML += `Surname: ${surname}<br>`;
        modalBody.innerHTML += `DNI: ${dni}<br>`;
        modalBody.innerHTML += `Birth: ${birthFormated}<br>`;
        modalBody.innerHTML += `Phone: ${phone}<br>`;
        modalBody.innerHTML += `Address: ${address}<br>`;
        modalBody.innerHTML += `Location: ${location}<br>`;
        modalBody.innerHTML += `Postal Code: ${postalCode}<br>`;
        modalBody.innerHTML += `Mail: ${mail}<br>`;
        modalBody.innerHTML += `Password: ${password}`;

        modalBody.style.color = '#000';
        modalMessage.style.backgroundColor = "#007282";
        modalMessage.innerHTML = 'SUCCESS'
        var success = true;

    } else {
        if (validates.name === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML = `NAME: ${nameErrorMessage}<br>`;
        };
        if (validates.surname === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `SURNAME: ${surnameErrorMessage}<br>`;
        };
        if (validates.dni === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `DNI: ${dniErrorMessage}<br>`;
        };
        if (validates.birth === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `BIRTH: ${birthErrorMessage}<br>`;
        };
        if (validates.phone === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `PHONE: ${phoneErrorMessage}<br>`;
        };
        if (validates.address === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `ADDRESS: ${addressErrorMessage}<br>`;
        };
        if (validates.location === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `LOCATION: ${locationErrorMessage}<br>`;
        };
        if (validates.postalCode === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `POSTAL CODE: ${postalCodeErrorMessage}<br>`;
        };
        if (validates.mail === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `MAIL: ${mailErrorMessage}<br>`;
        };
        if (validates.password === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `PASSWORD: ${passwordErrorMessage}<br>`;;
        };
        if (validates.repeatPassword === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `REPEAT PASSWORD: ${repeatPasswordErrorMessage}<br>`;;
        };
    }

    span.onclick = function () {
        modal.style.display = "none";
        modalBody.innerHTML = "&nbsp;";
        if(success){
            document.getElementById("form").submit();
            redirectHome();
        };
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalBody.innerHTML = "&nbsp;";
            if(success){
                document.getElementById("form").submit();
                redirectHome();
            };
        };
    };
};

function redirectHome(){
    window.location.href = "./index.html";
};