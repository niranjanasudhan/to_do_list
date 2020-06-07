$(document).ready(function() {


    //Login Section
    function login_check(username, password, validate) {

        let flag = false;
        if (username.trim() == "admin" && password.trim() == "12345") {
            flag = true;
        } else {
            flag = false;
        }
        validate(flag);
        // if()

    }

    function validate(flag) {
        if (flag == true) {
            $('.error_msg').css('display', 'none');
            window.location = "home.html";
        } else {
            // document.getElementsByClassName('error').style.display = "block";
            $('.error_msg').css('display', 'block');
        }
    }

    $('#btn_login').click(function() {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        login_check(username, password, validate);
    });



});