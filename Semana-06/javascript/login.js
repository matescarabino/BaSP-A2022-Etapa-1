window.onload = function () {
    var validates = {
        email: false,
        password: false
    };

    var formValues = {
        email: '',
        password: ''
    };

    var emailErrorMessage = 'Enter a valid email.';
    var passwordErrorMessage = 'Must contain at least one Lowercase, one Uppercase, a number and 8 characters.';

    mailValidate();
    passwordValidate();

    function mailValidate() {
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
                validates.password = true;
            };
        };
    };

    //Validate on Submit --------------------------------------------------------------------
    document.form.onsubmit = function (event) {
        var email = document.getElementById('emailInput');
        var password = document.getElementById('passwordInput');

        var success = true;

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

        if (success == true) {
            validateRequest();
        } else {
            showModal(success);
        };

        event.preventDefault();
    };

    function validateRequest() {

        fetch("https://basp-m2022-api-rest-server.herokuapp.com/login?email=" + formValues.email
        + "&password=" + formValues.password)
            .then(res => res.json())
            .then(data => showData(data))
            .catch(error => showError(error))

        const showData = (data) => {
            showModal(data.success);
        };

        const showError = (error) => {
            alert(error);
            console.log(error);
        };
    };

    function showModal(success) {
        var modal = document.getElementById("modalRegistro");
        var span = document.getElementById("close");
        var modalMessage = document.getElementById("modal-message");
        var modalBody = document.getElementById("modal-body");

        modal.classList.add('modal-show');

        if (validates.email === true && validates.password === true && success === true) {
            modalBody.innerHTML = `Mail: ${formValues.email}<br>`;
            modalBody.innerHTML += `Password: ${formValues.password}`;

            modalBody.classList.add('modal-body-show-success');
            modalMessage.classList.add('modal-message-show-success');
            modalMessage.innerHTML = 'SUCCESS';
        } else {

            if (validates.email === false) {
                modalMessage.innerHTML = 'ERROR';
                modalBody.innerHTML = `EMAIL: ${emailErrorMessage}<br>`;
            };

            if (validates.password === false) {
                modalMessage.innerHTML = 'ERROR';
                modalBody.innerHTML += `PASSWORD: ${passwordErrorMessage}<br>`;
            };

            if (validates.email === true && validates.password === true && (success === false)) {
                modalMessage.innerHTML = 'ERROR';
                modalBody.innerHTML += `Invalid user or password`;
            };
        };

        span.onclick = function () {
            modal.classList.remove('modal-show');
            modalBody.innerHTML = "&nbsp;";
            if (success) {
                document.getElementById("form").submit();
            };
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.classList.remove('modal-show');
                modalBody.innerHTML = "&nbsp;";
                if (success) {
                    document.getElementById("form").submit();
                };
            };
        };
    };
};
