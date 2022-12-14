var validates = {
    mail: false,
    password: false
};

var mailErrorMessage = 'Enter a valid email.';
var passwordErrorMessage = 'It must contain at least one lowercase, a number and at least 8 characters.';

mailValidate();
passwordValidate();

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

//Validate on Submit --------------------------------------------------------------------
document.form.onsubmit = function (event) {
    var mail = document.getElementById('emailInput');
    var password = document.getElementById('passwordInput');

    if(validates.mail === false){
        mail.classList.add('invalid');
        mailError.innerHTML = mailErrorMessage;
    };

    if(validates.password === false){
        password.classList.add('invalid');
        passwordError.innerHTML = passwordErrorMessage;
    };

    showModal(mail.value,password.value);

    event.preventDefault();
};

function showModal(mail,password) {
    var modal = document.getElementById("modalRegistro");
    var span = document.getElementById("close");
    var modalMessage = document.getElementById("modal-message");
    var modalBody = document.getElementById("modal-body");

    modal.style.display = "block";

    if (validates.mail === true && validates.password === true) {
        modalBody.innerHTML = `Mail: ${mail}<br>`;
        modalBody.innerHTML += `Password: ${password}`;

        modalBody.style.color = '#000';
        modalMessage.style.backgroundColor = "#373867";
        modalMessage.innerHTML = 'SUCCESS'
        var success = true;
    } else {

        if (validates.mail === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML = `Mail: ${mailErrorMessage}<br>`;
        };

        if (validates.password === false) {
            modalMessage.innerHTML = 'ERROR';
            modalBody.innerHTML += `Password: ${passwordErrorMessage}<br>`;;
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