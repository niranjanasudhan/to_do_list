    //home section
    $(document).ready(function() {
        if (typeof(Storage) !== "undefined") {
            if (!localStorage.getItem("username")) {
                window.location = "index.html?logged=0";
            }
            // Store
            // localStorage.setItem("username", username);
            // Retrieve
            //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
        } else {

        }
        $.ajax({
            type: "GET",
            datatype: "json",
            url: "https://jsonplaceholder.typicode.com/todos",
            success: function(data) {
                // res.push(data);
                // array(res);
                for (var i in data) {
                    console.log(data[i].userId);
                    if (data[i].completed == true) {
                        $(".container").append('<input type="checkbox" onclick="option_checked(this)" class="check" name="check" id="check" checked disabled> <label class="check_value">' + data[i].title + '</label><br>');
                    } else {
                        $(".container").append('<input type="checkbox" onclick="option_checked(this)" class="check" name="check" id="check"> <label class="check_value">' + data[i].title + '</label><br>');
                    }


                }
            }
        });


    });


    var count = 0;


    function check(cnt) {
        return new Promise(function(resolve, reject) {
            if (cnt === 5) {
                resolve('success');
            } else {
                reject('error');
            }
        });
    }


    function option_checked(el) {
        if ($(el).prop("checked") == true) {
            count = count + 1;
            let promise = check(count);
            promise
                .then(function(data) {
                    // alert("Congrats,  5 tasks have been successfully completed");
                    $('.overlay').css("display", "block");
                }).catch(function(error) {
                    $('.overlay').css("display", "none");
                });

        }

        if ($(el).prop("checked") == false) {
            count = count - 1;

        }
    }

    function logout() {
        if (typeof(Storage) !== "undefined") {
            localStorage.removeItem("username");
        }
        window.location = "index.html";
    }

    function close_win() {
        $('.overlay').css("display", "none");
    }