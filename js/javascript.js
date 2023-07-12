const form_logIn=document.getElementById('form-log-in');
const form_registration=document.getElementById('form-registration');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const age=document.getElementById('age');

const email_log_in=document.getElementById('email-log-in');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password_log_in=document.getElementById('password-log-in');
const passworda=document.getElementById('passworda');
const btn_color=document.getElementById('btn-color');
const registration=document.getElementById('registration');
const logIn=document.getElementById('log-in');


function register(){
    btn_color.style.left="0px";
    logIn.style.left="500px";
    registration.style.left="50px";
}

function LogIn(){
    btn_color.style.left="115px";
    logIn.style.left="50px";
    registration.style.left="-500px";
}


form_registration.addEventListener('submit',e => {
    e.preventDefault();


    validateinputs();
   
    
})

form_logIn.addEventListener('submit',e => {
    e.preventDefault();


    validateinputs_lg();
   
    
})

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess= element => {
    const inputControl= element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText= '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');

}

const validateinputs= ()=>{
    
    const fnameValue =fname.value.trim();
    const lnameValue =lname.value.trim();
    const ageValue =age.value.trim();
    const emailValue =email.value.trim();
    const passswordValue =password.value.trim();
    const passswordAgainValue =passworda.value.trim();
     
    
    if(fnameValue==''){

        setError(fname,'Firstname is required');
    }else{
        setSuccess(fname);
    } 


   if(lnameValue == ''){

        setError(lname,'Lastname is required');
    }else{
        setSuccess(lname);
    }


    if(ageValue ==''){

        setError(age,'age is required');
    }else{
        setSuccess(age);
    }

   

    if( emailValue == ''){

        setError(email,'Provide valid email address');
    }else{
        setSuccess(email);
    }
    
    if( passswordValue == ''){

        setError(password,'Password can not be empty');
    }else if(passswordValue.length < 6 || passswordValue.length> 20){
        setError(password,'Password min 6 and max 20 charecters');
    }else{
        setSuccess(password);
    }
    if(passswordAgainValue == ''){

        setError(passworda,"Password can not be empty");
    }else if(passswordAgainValue !== passswordValue){
        setError(passworda,"Password does not match");
    }else{
        setSuccess(passworda);
    }
}




const validateinputs_lg= ()=>{
    
   
    const emailValue_lg =email_log_in.value.trim();
    const passswordValue_lg =password_log_in.value.trim();
   
     
   
    if(emailValue_lg == ''){

        setError(email_log_in,'Provide valid email address');
    }else{
        setSuccess(email_log_in);
    }

    
    
    if( passswordValue_lg == ''){

        setError(password_log_in,'Password can not be empty');
    }else if(passswordValue_lg.length < 6 || passswordValue_lg.length> 20){
        setError(password_log_in,'Password min 6 and max 20 charecters');
    }else{
        setSuccess(password_log_in);
    }
    
}