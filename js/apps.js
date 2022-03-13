submitvar=document.querySelector("#btnSubmit");
username_err_var=document.querySelector(".username");
password_err_var=document.querySelector(".password");
modal_box_var=document.querySelector(".overlay-modal");
toast_box_var=document.querySelector(".toast-box-content");
modal_box_close_var=document.querySelector("#modal-close");
console.log(modal_box_close_var)
if(submitvar)
{
submitvar.addEventListener("click", validate);
}

function validate(){
    usernamevar=document.querySelector("#username");
    passwordvar=document.querySelector("#password");
    if(!username.value){
        username_err_var.innerText="Please enter the username"
    }
    if(!password.value){
        password_err_var.innerText="Please enter the password"
            }
}

modalvar=document.querySelector("#modal-id");
if(modalvar)
{
modalvar.addEventListener("click", ()=>
{
    modal_box_var.style.display="flex";

}
);
}
if(modal_box_close_var)
{
    modal_box_close_var.addEventListener("click", ()=>
    {
        modal_box_var.style.display="none";
    
    }); 

}

toastvar=document.querySelector("#toast-id");
if(toastvar)
{
    toastvar.addEventListener("click", ()=>
{
    toast_box_var.style.display="block";

});
}