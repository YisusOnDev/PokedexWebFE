$(document).ready(function () {
    $("#btn-register").click(function () {
        doRegister();
    });

    $(function () {
        $('#register-form').keypress(function (e) {
            if (e.which == 13) {
                doRegister();
            }
        })
    });
});

function doRegister() {
    let username = $("#txt_register_user").val().trim();
    let password = $("#txt_register_pwd").val().trim();
    let password2 = $("#txt_register_pwd2").val().trim();
    if (username != "" && password != "" && password2 != "") {
        if (password == password2) {
            $.ajax({
                url: 'https://localhost:44308/api/User/register',
                type: 'post',
                data: JSON.stringify({ username: username, password: password }),
                contentType: "application/json; charset=utf-8",
                success: function (response) {
                    if (response.succes) {
                        setTimeout(() => { window.location = "index.html"; }, 2000);
                        $(".ok-alert").text("Register completed.").fadeIn(1500);
                        $(".ok-alert").text("Register completed.").fadeOut(1000);
                    } else if (!response.success) {
                        switch (response.exceptionMessage) {
                            case "DuplicateUser": {
                                $(".alert-danger").text("User already exist").fadeIn(2000);
                                $(".alert-danger").text("User already exist").fadeOut(1000);
                                break;
                            }
                            default: {
                                $(".alert-danger").text("Error, please try again later").fadeIn(2000);
                                $(".alert-danger").text("Error, please try again later").fadeOut(1000);
                                break;
                            }
                        }
                    }
                }
            });
        } else {
            $(".alert-danger").text("Password and password confirmation must be the same password!").fadeIn(2000);
            $(".alert-danger").text("Password and password confirmation must be the same password!").fadeOut(1000);
        }
    }
}