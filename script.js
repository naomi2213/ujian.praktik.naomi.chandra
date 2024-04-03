function LoginVerification() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "Naomi" && password == "naomi") {
        window.alert("Login Berhasil");
        window.location="pages/participant.html";
    }
    else if (username == "" || password == ""){
        window.alert("Masukkan Email Atau passowrd");
    }
    else {
        window.alert("Login Gagal");
    }
}
