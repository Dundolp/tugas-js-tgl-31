// let nama = document.getElementById("name").value;
// let pw = document.getElementById("pw").value;
// window.location.href = "validasi.html";

// function login() {
//   if (nama.value == "wildun" && pw.value == "namakamu") {
//     window.alert("Log In , Berhasil");
//   } else {
//     window.alert("Maaf Username atau Password yang anda masukkan salah");
//   }
// }
function Login() {
  var username = document.getElementById("name").value;
  username = username.toLowerCase();
  var password = document.getElementById("pw").value;
  password = password.toLowerCase();

  if (username == "wildan" && password == "wildan123") {
    window.alert("Login Berhasil");
    window.location.href = "succes.html";
  } else {
    window.alert("Username atau password anda salah!");
  }
}
