
const email= document.getElementById("email");
const passWord = document.getElementById("password");
const form=document.getElementById('form');

form.addEventListener('submit',function(e)
{
   e.preventDefault();

  if(validateForm())
  {
    // window.location.href="index.html";
    // window.location.assign("index.html");
    // window.location.replace("index.html");
    window.location.href = "index.html";
    email.value="";
  }
})


function validateForm() 
{
  let signInVal = email.value.trim();
  let passwordVal = passWord.value.trim();
  let success = true;

  if(signInVal ==="") 
  {
    setError(email,"Email or Mobile number required");
    success = false;
  }
  else if(!validateEmail(signInVal))
  {
    setError(email,"Email is Invalid");
    success = false;
  }
  else  
  {
    setSuccess(email);
    success = true;
    
  }

  if (passwordVal === "") 
  {
    setError(passWord,"Password is required");
    success = false;
  } 
  else if (passwordVal.length < 8) 
  {
    setError(passWord,"Password must be atleast 8 characters long");
  } 
  else
  {
    setSuccess(passWord);
    success = true;
  }
  return success;
}

function setError(element, message)
 {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector("#error_msg");
  errorElement.innerHTML = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) 
{
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector("#error_msg");
  errorElement.innerHTML = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const validateEmail = (email) => 
  {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
