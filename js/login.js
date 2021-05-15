$(document).ready(function () {
    $("#btn-login").click(function () {
        doLogin();
    });

    $(function () {
        $('#login-form').keypress(function (e) {
            if (e.which == 13) {
                doLogin();
            }
        })
    });
});

function doLogin() {
    let username = $("#txt_login_user").val().trim();
    let password = $("#txt_login_pwd").val().trim();
    if (username != "" && password != "") {
        $.ajax({
            url: 'https://localhost:44308/api/Login',
            type: 'post',
            data: JSON.stringify({ username: username, password: password }),
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                if (response.success) {
                    window.location = "mainPanel.html";
                } else {
                    $(".alert-danger").text("Invalid username or password!").fadeIn(2000);
                    $(".alert-danger").text("Invalid username or password!").fadeOut(1000);
                }
            }
        });
    } else {
        $(".info-alert").text("You need to fill the username and password.").fadeIn(2000);
        $(".info-alert").text("You need to fill the username and password.").fadeOut(1000);
    }
}