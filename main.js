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
    
})