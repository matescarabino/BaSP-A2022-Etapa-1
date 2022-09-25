//Call onFocus/onBlur validate function
validateOnFocus();

function validateOnFocus() {
    // validate Mail ------------------------------------------------------------------------
    var mail = document.getElementById('emailInput');
    var mailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    mail.onblur = function () {
        if (!((mail.value).toLowerCase()).match(mailExpression)) {
            mail.classList.add('invalid');
            errorMail.innerHTML = 'Enter a valid email.';
        };
    };
    mail.onfocus = function () {
        if (mail.classList.contains('invalid')) {
            mail.classList.remove('invalid');
            errorMail.innerHTML = "&nbsp;";
        };
    };

    // validate password ------------------------------------------------------------------------
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
            errorPassword.innerHTML = 'It must contain at least one lowercase, a number and at least 8 characters.';
        };
    };

    password.onfocus = function () {
        if (password.classList.contains('invalid')) {
            password.classList.remove('invalid');
            errorPassword.innerHTML = "&nbsp;";
        };
    };
}

//Validación on Submit --------------------------------------------------------------------
document.form.onsubmit = function (event) {
    // validate Mail ------------------------------------------------------------------------
    var mail = document.getElementById('emailInput');
    var mailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (!((mail.value).toLowerCase()).match(mailExpression)) {
        mail.classList.add('invalid');
        errorMail.innerHTML = 'Enter a valid email.'
        showModal(mail.value,false);
        return false;
    };

    // validate password ------------------------------------------------------------------------
    var password = document.getElementById('passwordInput');
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
        errorPassword.innerHTML = 'It must contain at least one lowercase, a number and at least 8 characters.';
        showModal(false,password.value);
        return false;
    };

    showModal(mail.value,password.value);

    event.preventDefault();
}

function showModal(mail,password) {
    var modal = document.getElementById("modalRegistro");
    var span = document.getElementById("close");
    var modalMessage = document.getElementById("modal-message");
    var modalBody = document.getElementById("modal-body");

    modal.style.display = "block";

    if (mail != false && password != false) {
        modalBody.innerHTML = `Mail: ${mail}<br>`;
        modalBody.innerHTML += `Password: ${password}`;
        modalBody.style.color = '#000';

        modalMessage.style.backgroundColor = "#007282";
        modalMessage.innerHTML = 'SUCCESSFUL LOGIN'

        var success = true;
    } else if (password === false) {
        modalMessage.innerHTML = 'ERROR';
        modalBody.innerHTML = 'Enter a valid email.';

    } else if (mail === false) {
        modalMessage.innerHTML = 'ERROR';
        modalBody.innerHTML = 'Password must contain at least one lowercase, a number and at least 8 characters.';
    };

    span.onclick = function () {
        modal.style.display = "none";
        if(success){
            document.getElementById("form").submit();
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            if(success){
                document.getElementById("form").submit();
            }
        }
    }
}