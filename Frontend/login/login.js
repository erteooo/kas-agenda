document.getElementById("login-button").addEventListener("click", function() {
    const nim = document.getElementById("nim").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const validNIM = document.getElementById("valid-nim").value;
    const validPassword = document.getElementById("valid-password").value;

    function displayError(message) {
        errorMessage.textContent = message;
    }

    function isValidInput(nim, password) {
        return nim.length >= 9 && password.length >= 8;
    }

    if (!isValidInput(nim, password)) {
        displayError("NIM atau Password salah!");
        return;
    }

    if (nim !== validNIM || password !== validPassword) {
        displayError("NIM atau Password salah!");
    } else {
        // Logic for successful login
        alert("Login berhasil!");
        window.location.href = "../laporankas/laporankas.html";
    }
});