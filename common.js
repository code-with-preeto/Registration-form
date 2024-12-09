const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phonenumber = document.getElementById("phonenumber");

form.addEventListener("submit",(event)=>{
    //  alert("hi");
    event.preventDefault();
    formValidation();
})

const setErrorMsg=(element,message)=>{
   const inputControl=element.parentElement;
   const errorDis = inputControl.querySelector(".error-msg");
   errorDis.innerText = message;
   inputControl.classList.add("error");
   inputControl.classList.remove("success");

}

const setSuccessMsg=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDis = inputControl.querySelector(".error-msg");
    errorDis.innerText = '';
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
 
 }
 const emailValid=(email)=>{
    const regex= /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
 }
const formValidation=()=>{
    const nameValue= name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const phoneNumberValue =phonenumber.value.trim();
    if(nameValue ===""){
        setErrorMsg(name,"name can not be blank");
    }
    else if(nameValue.length<3){
        setErrorMsg(name,"name must be 3 character");
    }
    else if(nameValue.length>20){
        setErrorMsg(name,"name should be  less than 20 character");
    }
    
    else{
        setSuccessMsg(name);
    }


    if(emailValue ===""){
        setErrorMsg(email,"email cannot be blank");
    }
    else if(!emailValid(emailValue)){
        setErrorMsg(email,"email can not be valid")
    }
    else{
        setSuccessMsg(email);
    }

    if(passwordValue===""){
        setErrorMsg(password,"Password can not be blank");
    }
    else if(passwordValue.length<8){
        setErrorMsg(password,"Password must be at least 8 characters");
    }
    else{
        setSuccessMsg(password);
    }

    if(phoneNumberValue == ""){
        setErrorMsg(phonenumber,"Mobile Number not be blank");
    }
    else if(isNaN(phoneNumberValue)){
        setErrorMsg(phonenumber,"Only numbers are allowed")
    }
    else if(phoneNumberValue.length<10){
        setErrorMsg(phonenumber,"Mobile number must be 10 digits ");
    }
    else if(phoneNumberValue.length>10){
        setErrorMsg(phonenumber,"Mobile number must be 10 digits ");
    }
    else if(phoneNumberValue.charAt(0) !=9 && phoneNumberValue.charAt(0) !=8 && phoneNumberValue.charAt(0) !=7){
        setErrorMsg(phonenumber,"Phone Number must start with 9,8,7")
    }
    else{
        setSuccessMsg(phonenumber);
    }


}