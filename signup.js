const btn_signUp = document.getElementById("signup");
btn_signUp.addEventListener('click', function(){
  const acct = document.getElementById('acc1').value
  const pass1 = document.getElementById('pass1').value
  const pass2 = document.getElementById('pass2').value
  if (acct == "") {
    alert("Chưa nhập tài khoản!!!");
  } else if (pass1 == "") {
    alert("Chưa nhập mật khẩu!!!");
  } else if (pass2 == "") {
    alert("Chưa nhập lại mật khẩu!!!");
  }
})