// import "./Style.css";
// import "./Style1.css";

// import products from "products.json";
// var count = 0;
function btnfn(event) {
  event.preventDefault();

  var storedName = localStorage.getItem('Rusername');
  var storedPw = localStorage.getItem('Rpass');

  var loguser = document.getElementById('username');
  var logpass = document.getElementById('pass');

  if (loguser.value == storedName && logpass.value === storedPw) {
    alert("successful !");
    window.location.replace("index.html");
  } else {
    alert("Username or password Mismatch");
  }
  return false;
}

function regRed() {
  window.location.assign("Register.html");
  event.preventDefault();
}

function RegBtn(event) {
  var Rusername = document.getElementById('Rusername');
  var Rpass = document.getElementById('Rpass');
  var email = document.getElementById('email');

  if (Rusername.value.length == 0 || Rpass.value.length == 0 || email.value.length == 0) {
    alert("Fill all the fields");
  } else {
    localStorage.setItem('Rusername',Rusername.value);
    localStorage.setItem('Rpass',Rpass.value);
    alert("Succesfully Registered!!");
    window.location.replace("login.html");
  }

  event.preventDefault();
}
