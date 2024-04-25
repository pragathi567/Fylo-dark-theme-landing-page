let inputEle = document.getElementById("email");
let buttonEle = document.getElementById("form");
let errorMsg = document.getElementById("errorMsg");

buttonEle.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(inputEle.length === 0){
        errorMsg.innerHTML = "Email is required";
        return false;
    }
    if(!inputEle.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        errorMsg.innerHTML = "please enter a valid email";
        return false;
    }
    errorMsg.innerHTML = "valid email";
    errorMsg.classList.add("green");
    errorMsg.classList.remove("error");
    inputEle.value = '';
    return true;
})