var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var email = document.getElementById("email")
var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirmPassword")
console.log(document.getElementById("firstName"));

if (localStorage.getItem("AccountList") == null) {
  Accounts = [];
} else {
  Accounts = JSON.parse(localStorage.getItem("AccountList"));
}


function signUp() {
  var user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  };
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (user.password !== user.confirmPassword) {
    alert("كلمتا المرور غير متطابقتين. حاول مرة أخرى.");
  } else if (!emailRegex.test(user.email)) {
    alert("البريد الإلكتروني غير صحيح. يرجى إدخال بريد إلكتروني صحيح.");
}

else if (!passwordRegex.test(user.password)) {
    alert("كلمة المرور غير قوية بما فيه الكفاية. يجب أن تحتوي على ثمانية أحرف على الأقل، وحرف كبير واحد، وحرف صغير واحد، ورقم واحد، ورمز واحد.");
}

else if (user.password !== user.confirmPassword) {
    alert("كلمتا المرور غير متطابقتين. حاول مرة أخرى.");
}


  else{

    console.log(Accounts);

    Accounts.push(user);
      localStorage.setItem("AccountList", JSON.stringify(Accounts));
      window.location.href = "sign-in.html";
  }
}
    
        
     