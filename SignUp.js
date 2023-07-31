    function validateForm() {
        var password = document.getElementById("password").value;
        var confirm_password = document.getElementById("confirm_password").value;

        if (password !== confirm_password) {
            alert("Passwords do not match!");
            return false; // Prevent form submission
        }

        // If passwords match, the form will be submitted
        return true;
    }

