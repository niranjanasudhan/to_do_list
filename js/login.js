$(document).ready(function() {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('logged');
    if (myParam == '0') {
        $('.error_login').css('display', 'block');
    }

    //Login Section
    function login_check(username, password, validate) {

        let flag = false;
        if (username.trim() == "admin" && password.trim() == "12345") {
            flag = true;
        } else {
            flag = false;
        }
        validate(flag, username.trim());
        // if()

    }

    function validate(flag, username) {
        if (flag == true) {
            $('.error_msg').css('display', 'none');
            // Check browser support
            if (typeof(Storage) !== "undefined") {
                // Store
                localStorage.setItem("username", username);
                // Retrieve
                //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
            }
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