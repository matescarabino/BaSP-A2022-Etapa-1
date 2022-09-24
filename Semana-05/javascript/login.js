window.onload = function () {

    //Call onFocus/onBlur validate function
    validateOnFocus();

    function validateOnFocus() {
        // validate Mail ------------------------------------------------------------------------
        var mail = document.getElementById('emailInput');
        var mailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        mail.onblur = function () {
            if (!((mail.value).toLowerCase()).match(mailExpression)) {
                mail.classList.add('invalid');
                errorMail.innerHTML = 'Enter a valid email.'
            }
        };
        mail.onfocus = function () {
            if (mail.classList.contains('invalid')) {
                mail.classList.remove('invalid');
                errorMail.innerHTML = "&nbsp;";
            }
        };

     }
}