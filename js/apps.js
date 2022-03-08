submitvar=document.querySelector("#btnSubmit");
username_err_var=document.querySelector(".username");
password_err_var=document.querySelector(".password");

submitvar.addEventListener("click", fn);
function fn(){
    usernamevar=document.querySelector("#username");
    passwordvar=document.querySelector("#password");
    if(!username.value){
        username_err_var.innerText="Please enter the username"
    }
    if(!password.value){
        password_err_var.innerText="Please enter the password"
            }
}