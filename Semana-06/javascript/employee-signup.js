window.onload = function () {

    var validates = {
        name: false,
        lastName: false,
        dni: false,
        birth: false,
        phone: false,
        address: false,
        city: false,
        zip: false,
        email: false,
        password: false,
        repeatPassword: false
    };

    var formValues = {
        name: '',
        lastName: '',
        dni: '',
        birth: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        email: '',
        password: '',
        repeatPassword: ''
    };

    var nameErrorMessage = 'Must have more than 3 letters.'
    var lastNameErrorMessage = 'Must have more than 3 letters.'
    var dniErrorMessage = 'Must have between 7 and 8 numbers.'
    var birthErrorMessage = 'Select a valid date.'
    var phoneErrorMessage = 'Must have 10 numbers.'
    var addressErrorMessage = 'Must have at least 5 characters with letters, numbers and a space in between.'
    var cityErrorMessage = 'Must have at least 3 characters with alphanumeric text.'
    var zipErrorMessage = 'Must have between 4 and 5 numbers.'
    var emailErrorMessage = 'Enter a valid email.';
    var passwordErrorMessage = 'Must contain at least one Lowercase, one Uppercase, a number and 8 characters.';
    var repeatPasswordErrorMessage = 'Passwords must match.'

    nameValidate();
    lastNameValidate();
    dniValidate();
    birthValidate();
    phoneValidate();
    addressValidate();
    cityValidate();
    zipValidate();
    emailValidate();
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
                } else {
                    hasOther = true;
                };
            };

            if (name.value.length > 3) {
                hasLenght = true;
            };

            if (hasLetter && hasLenght) {
                validates.name = true;
                formValues.name = name.value;
            };

            if (hasOther === true) {
                validates.name = false;
            };

            if (validates.name === false) {
                name.classList.add('invalid');
                nameError.innerHTML = nameErrorMessage;
            };
        };

        name.onfocus = function () {
            if (name.classList.contains('invalid')) {
                name.classList.remove('invalid');
                nameError.innerHTML = "&nbsp;";
            };
        };
    };

    function lastNameValidate() {
        var lastName = document.getElementById('lastNameInput');

        lastName.onblur = function () {
            var hasLetter = false;
            var hasOther = false;
            var hasLenght = false;

            for (var i = 0; i < lastName.value.length; i++) {
                var charCode = lastName.value.charCodeAt(i);
                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                    hasLetter = true;
                } else {
                    hasOther = true;
                };
            };

            if (lastName.value.length > 3) {
                hasLenght = true;
            };

            if (hasLetter && hasLenght) {
                validates.lastName = true;
                formValues.lastName = lastName.value;
            };

            if (hasOther === true) {
                validates.lastName = false;
            };

            if (validates.lastName === false) {
                lastName.classList.add('invalid');
                lastNameError.innerHTML = lastNameErrorMessage;
            };
        };

        lastName.onfocus = function () {
            if (lastName.classList.contains('invalid')) {
                lastName.classList.remove('invalid');
                lastNameError.innerHTML = "&nbsp;";
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
                } else {
                    hasOther = true;
                };
            };

            if (dni.value.length > 6 && dni.value.length < 9) {
                hasLenght = true;
            };

            if (hasNumber && hasLenght) {
                validates.dni = true;
                formValues.dni = dni.value;
            };

            if (hasOther === true) {
                validates.dni = false;
            };

            if (validates.dni === false) {
                dni.classList.add('invalid');
                dniError.innerHTML = dniErrorMessage;
            };
        };

        dni.onfocus = function () {
            if (dni.classList.contains('invalid')) {
                dni.classList.remove('invalid');
                dniError.innerHTML = "&nbsp;";
            };
        };
    };

    function birthValidate() {
        var birth = document.getElementById('birthInput');

        birth.onblur = function () {

            var [year, month, day] = birth.value.split('-');

            var today = new Date().toLocaleDateString();
            var [dayToday, monthToday, yearToday] = today.split('/');

            var birthFormated = [month, day, year].join('/');

            var age = (yearToday - year);

            if (birth.value == '' || (age > 100) || (age < 18)) {
                birth.classList.add('invalid');
                birthError.innerHTML = birthErrorMessage;
                validates.birth = false;
            }else{
                validates.birth = true;
                formValues.birth = birthFormated;
            };
        };

        birth.onfocus = function () {
            if (birth.classList.contains('invalid')) {
                birth.classList.remove('invalid');
                birthError.innerHTML = "&nbsp;";
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
                } else {
                    hasOther = true;
                };
            };

            if (phone.value.length == 10) {
                hasLenght = true;
            };

            if (hasNumber && hasLenght) {
                validates.phone = true;
                formValues.phone = phone.value;
            };

            if (hasOther === true) {
                validates.phone = false;
            };

            if (validates.phone === false) {
                phone.classList.add('invalid');
                phoneError.innerHTML = phoneErrorMessage;
            };
        };

        phone.onfocus = function () {
            if (phone.classList.contains('invalid')) {
                phone.classList.remove('invalid');
                phoneError.innerHTML = "&nbsp;";
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
                    hasSpace++;
                };
                if (address.value.length > 5) {
                    hasLenght = true;
                };

                if (hasLetter && hasNumber && (hasSpace == 1) && hasLenght) {
                    validates.address = true;
                    formValues.address = address.value;
                } else {
                    validates.address = false;
                };
            };

            if (validates.address === false) {
                address.classList.add('invalid');
                addressError.innerHTML = addressErrorMessage;
            };
        };

        address.onfocus = function () {
            if (address.classList.contains('invalid')) {
                address.classList.remove('invalid');
                addressError.innerHTML = "&nbsp;";
            };
        };
    };

    function cityValidate() {
        var city = document.getElementById('cityInput');

        city.onblur = function () {
            var hasLetter = false;
            var hasOther = false;
            var hasLenght = false;

            for (var i = 0; i < city.value.length; i++) {
                var charCode = city.value.charCodeAt(i);
                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
                    hasLetter = true;
                } else if (!(charCode > 47 && charCode < 58)) {
                    hasOther = true;
                };
            };

            if (city.value.length > 3) {
                hasLenght = true;
            };

            if (hasLetter && hasLenght) {
                validates.city = true;
                formValues.city = city.value;
            };

            if (hasOther === true) {
                validates.city = false;
            };

            if (validates.city === false) {
                city.classList.add('invalid');
                cityError.innerHTML = cityErrorMessage;
            };
        };

        city.onfocus = function () {
            if (city.classList.contains('invalid')) {
                city.classList.remove('invalid');
                cityError.innerHTML = "&nbsp;";
            };
        };
    };

    function zipValidate() {
        var zip = document.getElementById('zipInput');

        zip.onblur = function () {
            var hasNumber = false;
            var hasOther = false;
            var hasLenght = false;

            for (var i = 0; i < zip.value.length; i++) {
                var charCode = zip.value.charCodeAt(i);
                if ((charCode > 47 && charCode < 58)) {
                    hasNumber = true;
                } else {
                    hasOther = true;
                };
            };

            if (zip.value.length > 3 && zip.value.length < 6) {
                hasLenght = true;
            };

            if (hasNumber && hasLenght) {
                validates.zip = true;
                formValues.zip = zip.value;
            };

            if (hasOther == true) {
                validates.zip = false;
            };

            if (validates.zip === false) {
                zip.classList.add('invalid');
                zipError.innerHTML = zipErrorMessage;
            };
        };

        zip.onfocus = function () {
            if (zip.classList.contains('invalid')) {
                zip.classList.remove('invalid');
                zipError.innerHTML = "&nbsp;";
            };
        };
    };

    function emailValidate() {
        var email = document.getElementById('emailInput');
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        email.onblur = function () {
            if (!((email.value).toLowerCase()).match(emailExpression)) {
                email.classList.add('invalid');
                emailError.innerHTML = emailErrorMessage;
                validates.email = false;
            } else {
                validates.email = true;
                formValues.email = email.value;
            };
        };
        email.onfocus = function () {
            if (email.classList.contains('invalid')) {
                email.classList.remove('invalid');
                emailError.innerHTML = "&nbsp;";
            };
        };
    }

    function passwordValidate() {
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
                validates.password = true;
                formValues.password = password.value;
            } else {
                validates.password = false;
            };

            if (validates.password === false) {
                password.classList.add('invalid');
                passwordError.innerHTML = passwordErrorMessage;
            };
        };

        password.onfocus = function () {
            if (password.classList.contains('invalid')) {
                password.classList.remove('invalid');
                passwordError.innerHTML = "&nbsp;";
            };
        };
    };

    function repeatPasswordValidate() {
        var password = document.getElementById('passwordInput');
        var repeatPassword = document.getElementById('repeatPasswordInput');

        repeatPassword.onblur = function () {
            if (password.value != repeatPassword.value) {
                repeatPassword.classList.add('invalid');
                repeatPasswordError.innerHTML = repeatPasswordErrorMessage;
                validates.repeatPassword = false;
            }else{
                validates.repeatPassword = true;
                formValues.repeatPassword = repeatPassword.value;
            };
        };

        repeatPassword.onfocus = function () {
            if (repeatPassword.classList.contains('invalid')) {
                repeatPassword.classList.remove('invalid');
                repeatPasswordError.innerHTML = "&nbsp;";
            };
        };
    }

    //Validate on Submit --------------------------------------------------------------------
    document.form.onsubmit = function (event) {

        var name = document.getElementById('nameInput');
        var lastName = document.getElementById('lastNameInput');
        var dni = document.getElementById('dniInput');
        var birth = document.getElementById('birthInput');
        var phone = document.getElementById('phoneInput');
        var address = document.getElementById('addressInput');
        var city = document.getElementById('cityInput');
        var zip = document.getElementById('zipInput');
        var email = document.getElementById('emailInput');
        var password = document.getElementById('passwordInput');
        var repeatPassword = document.getElementById('repeatPasswordInput');

        var success = true;

        if (validates.name === false) {
            name.classList.add('invalid');
            nameError.innerHTML = nameErrorMessage;
            success = false;
        };
        if (validates.lastName === false) {
            lastName.classList.add('invalid');
            lastNameError.innerHTML = lastNameErrorMessage;
            success = false;
        };
        if (validates.dni === false) {
            dni.classList.add('invalid');
            dniError.innerHTML = dniErrorMessage;
            success = false;
        };
        if (validates.birth === false) {
            birth.classList.add('invalid');
            birthError.innerHTML = birthErrorMessage;
            success = false;
        };
        if (validates.phone === false) {
            phone.classList.add('invalid');
            phoneError.innerHTML = phoneErrorMessage;
            success = false;
        };
        if (validates.address === false) {
            address.classList.add('invalid');
            addressError.innerHTML = addressErrorMessage;
            success = false;
        };
        if (validates.city === false) {
            city.classList.add('invalid');
            cityError.innerHTML = cityErrorMessage;
            success = false;
        };
        if (validates.zip === false) {
            zip.classList.add('invalid');
            zipError.innerHTML = zipErrorMessage;
            success = false;
        };
        if (validates.email === false) {
            email.classList.add('invalid');
            emailError.innerHTML = emailErrorMessage;
            success = false;
        };
        if (validates.password === false) {
            password.classList.add('invalid');
            passwordError.innerHTML = passwordErrorMessage;
            success = false;
        };
        if (validates.repeatPassword === false) {
            repeatPassword.classList.add('invalid');
            repeatPasswordError.innerHTML = repeatPasswordErrorMessage;
            success = false;
        };

        if (success == true) {
            validateRequest();
        } else {
            showModal(success);
        };

        event.preventDefault();
    };

    function validateRequest() {

        fetch("https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" + formValues.name
            + "&lastName=" + formValues.lastName
            + "&dni=" + formValues.dni
            + "&dob=" + formValues.birth
            + "&phone=" + formValues.phone
            + "&address=" + formValues.address
            + "&city=" + formValues.city
            + "&zip=" + formValues.zip
            + "&email=" + formValues.email
            + "&password=" + formValues.password)
            .then(res => res.json())
            .then(data => mostrarData(data))
            .catch(error => console.error(error))
        const mostrarData = (data) => {
            showModal(data.success);
        };
    };

    function showModal(success) {

        var modal = document.getElementById("modalRegistro");
        var span = document.getElementById("close");
        var modalMessage = document.getElementById("modal-message");
        var modalBody = document.getElementById("modal-body");

        modal.style.display = "block";

        if (success) {
            modalBody.innerHTML = `Name: ${formValues.name}<br>`;
            modalBody.innerHTML += `Last Name: ${formValues.lastName}<br>`;
            modalBody.innerHTML += `DNI: ${formValues.dni}<br>`;
            modalBody.innerHTML += `Birth: ${formValues.birth}<br>`;
            modalBody.innerHTML += `Phone: ${formValues.phone}<br>`;
            modalBody.innerHTML += `Address: ${formValues.address}<br>`;
            modalBody.innerHTML += `City: ${formValues.city}<br>`;
            modalBody.innerHTML += `Postal Code: ${formValues.zip}<br>`;
            modalBody.innerHTML += `Email: ${formValues.email}<br>`;
            modalBody.innerHTML += `Password: ${formValues.password}`;

            modalBody.style.color = '#000';
            modalMessage.style.backgroundColor = "#373867";
            modalMessage.innerHTML = 'SUCCESS';

        } else {
            if (validates.name === false) {
                modalMessage.innerHTML = 'ERROR';
                modalBody.innerHTML = `NAME: ${nameErrorMessage}<br>`;
            };
            if (validates.lastName === false) {
                modalMessage.innerHTML = 'ERROR';
                modalBody.innerHTML += `LAST NAME: ${lastNameErrorMessage}<br>`;
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
            if (validates.city === false) {
                modalMessage.innerHTML = 'ERROR';
                modalBody.innerHTML += `CITY: ${cityErrorMessage}<br>`;
            };
            if (validates.zip === false) {
                modalMessage.innerHTML = 'ERROR';
                modalBody.innerHTML += `POSTAL CODE: ${zipErrorMessage}<br>`;
            };
            if (validates.email === false) {
                modalMessage.innerHTML = 'ERROR';
                modalBody.innerHTML += `EMAIL: ${emailErrorMessage}<br>`;
            };
            if (validates.password === false) {
                modalMessage.innerHTML = 'ERROR';
                modalBody.innerHTML += `PASSWORD: ${passwordErrorMessage}<br>`;
            };
            if (validates.repeatPassword === false) {
                modalMessage.innerHTML = 'ERROR';
                modalBody.innerHTML += `REPEAT PASSWORD: ${repeatPasswordErrorMessage}<br>`;
            };

        };

        span.onclick = function () {
            modal.style.display = "none";
            modalBody.innerHTML = "&nbsp;";
            if (success) {
                document.getElementById("form").submit();
            };
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                modalBody.innerHTML = "&nbsp;";
                if (success) {
                    document.getElementById("form").submit();
                };
            };
        };
    };
};