
const inputBox1=document.getElementById('first');
const inputBox2=document.getElementById('second');
const button1=document.getElementById('btn1');
const button2=document.getElementById('btn2');

button1.addEventListener('click',function(e){
  e.preventDefault();
  if(first())
  {
    window.location.assign("https://www.netflix.com/signup/registration?locale=en-IN");
    inputBox1.value="";
  }
})

button2.addEventListener("click", function (e) {
  e.preventDefault();
  if (second()) 
  {
    window.location.assign("https://www.netflix.com/signup/registration?locale=en-IN");
    inputBox2.value = "";
  }
});

function first()
{
    const box1=inputBox1.value.trim();
    success=true;

    if(box1==="")
    {
        setError(inputBox1,"Email is required");
        success=false;
    }
    else if(!validateEmail(box1))
    {
        setError(inputBox1, "Email is Invalid");
        success = false;
    }
    else
    {
        setSuccess(inputBox1);
        success=true;
    }
    return success
}

function second()
{
    const box2 = inputBox2.value.trim();
    success = true;

    if (box2 === "") 
    {
      setError(inputBox2, "Email is required");
      success = false;
    } 
    
    else if(!validEmail(box2)) 
    {
      setError(inputBox2, "Email is Invalid");
      success = false;
    } 
    else 
    {
      setSuccess(inputBox2);
      success = true;
    }
    return success;

}

const setError=(element,message)=>
{
    const parentDiv=element.parentElement;
    const errorMsg=parentDiv.querySelector('#error');
    errorMsg.innerHTML=message;
    parentDiv.classList.add('error');
    parentDiv.classList.remove('success');
}

const setSuccess=(element)=>
{
    const parentDiv = element.parentElement;
    const errorMsg = parentDiv.querySelector("#error");
    errorMsg.innerHTML ='';
    parentDiv.classList.add("success");
    parentDiv.classList.remove("error");

}

const validateEmail = (inputBox1) => {
  return String(inputBox1)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validEmail = (inputBox2) => {
  return String(inputBox2)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
