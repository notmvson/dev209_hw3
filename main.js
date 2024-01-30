document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("newUserInfo").disabled = true;
    document.getElementById('existingUserInfo').disabled = true;

    document.getElementById("newUser").addEventListener("click", function() {
        document.getElementById("newUserInfo").disabled = false;
        document.getElementById("userType").disabled = true;
    })

    document.getElementById("existingUser").addEventListener("click", function() {
        document.getElementById("existingUserInfo").disabled = false;
        document.getElementById("userType").disabled = true;
    })

    document.getElementById("newLoginButton").addEventListener("click", function() {
        newUserSubmitEvent();
    })
    
    function newUserSubmitEvent() {
        let userName = document.getElementById("newUserName").value;
        let password = document.getElementById("newPassword").value;
        let city = document.getElementById("city").value;
        let state = document.getElementById("state").value;

        if (userName !== "" && password !== "" && city !== "" && state.length === 2) {
            localStorage.setItem("userName", userName);
            localStorage.setItem("password", password);
            localStorage.setItem("city", city);
            localStorage.setItem("state", state);
            alert("Welcome " + userName);
        }
        else {
            alert("Please fill in all the fields");
        }
    }

    document.getElementById("existingLoginButton").addEventListener("click", function() {
        existingUserSubmitEvent();
    })

    function existingUserSubmitEvent() {
        let userName = document.getElementById("existingUserName").value;
        let password = document.getElementById("existingPassword").value;

        console.log(localStorage.getItem("userName"));
        console.log(localStorage.getItem("password"));

        if (userName === localStorage.getItem("userName") && password === localStorage.getItem("password")) {
            alert("Welcome back " + userName);
        }
        else {
            alert("Invalid login");
        }
    }
})