const emailInput = document.querySelector("#exampleFormControlInput1");
const emailError = document.querySelector("#emailError");
const nextBtn = document.querySelector("#nextBtn");

console.log(emailInput);
console.log(emailError);


// emailInput, emailError
exampleFormControlInput1.addEventListener("focus", function(){
    exampleFormControlInput1.style.border = "1px solid red";
});

exampleFormControlInput1.addEventListener("blur", function () {
    emailInput.style.border = ""; 
    emailError.innerHTML = "";

  });

  exampleFormControlInput1.addEventListener("input", function(){
    const emailValue = exampleFormControlInput1.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailValue.length >= 5 && emailRegex.test(emailValue)) {
        exampleFormControlInput1.style.border = "1px solid blue";
        emailError.textContent = "";
      }else if(emailValue.length <= 3){
        exampleFormControlInput1.style.border = "1px solid bred";
        emailError.textContent = "must be 6 characters long or more";
      }else {
        exampleFormControlInput1.style.border = "1px solid red";
        emailError.innerHTML = "Invalid email format";
      }
});

// set localStorage
const emailValue = exampleFormControlInput1.value.trim();

const formData = {
   
    email: exampleFormControlInput1,
    
  }
localStorage.setItem("formData", JSON.stringify(formData));

// nextBtn
//create a function to check the overall form validation
function isFormValid(){
    const emailValue = emailInput.value.trim();


    // check each input validation rule
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailValue.length >= 5 && emailRegex.test(emailValue);
    return isEmailValid;
}

// add click event to the nextBtn
nextBtn.addEventListener('click', function(event){
    if(!isFormValid()){
        event.preventDefault();
        emailInput.style.border = '1px solid red';
        emailError.innerHTML = "This field is required";
        return
    }
    // set localStorage
    
    const emailValue = emailInput.value.trim();

    const formData = {
      email: emailValue,
    }
localStorage.setItem("formData", JSON.stringify(formData));

})
