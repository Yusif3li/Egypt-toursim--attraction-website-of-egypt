var email = document.getElementById("email")
var password =document.getElementById("password")



function signin() {
  var user = {
  
      password: password.value,
      email: email.value

  };
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (user.email=="admin"&&user.password=="admin") {
    window.location.href="admin.html"

  }
   else if (!emailRegex.test(user.email)) {
    alert("البريد الإلكتروني غير صحيح. يرجى إدخال بريد إلكتروني صحيح.");
}

else if (!passwordRegex.test(user.password)) {
    alert("كلمة المرور يجب أن تحتوي على ثمانية أحرف على الأقل، وحرف كبير واحد، وحرف صغير واحد، ورقم واحد، ورمز واحد.");
}




 else{
    
 
    var emails = JSON.parse(localStorage.getItem("AccountList"));
    
  
    const found = emails.find(item => item.email ===  user.email && item.password === user.password);
    console.log(found);
    
        if (found==undefined) {
         alert("هذا الحساب غير موجود ")
  
        }
     
        else{
            window.location.href="index.html"
        }
    }
  }

   
     
    
  

    