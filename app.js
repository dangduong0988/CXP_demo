
const btn = document.getElementById("login");
btn.addEventListener("click", function () {
  const account = document.getElementById("acc");
  const pass = document.getElementById("pass");
  if (account.value == "") {
    alert("Chưa nhập tài khoản!!!");
  } else if (pass.value == "") {
    alert("Chưa nhập mật khẩu!!!");
  }
});


