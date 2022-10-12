

const form = document.querySelector('#form');
function clearErrors(id){

    document.getElementsByClassName('error')[id].innerHTML ="";


}

function seterror(id, error){
    document.getElementsByClassName('error')[id].innerHTML = error;
}
form.firstname.addEventListener('input',()=>{
    var first_name = form.firstname.value;   

 if( first_name.match(/^[a-zA-Z]{3,}$/)){
    clearErrors(0);
  } 
    else {
    seterror(0,'*Name too short and alphabets only.');
  
    }

})
form.lastname.addEventListener('input',()=>{
    var name = form.lastname.value;   

 if(name.match(/^[a-zA-Z]{3,}$/)){
    clearErrors(1);
  }
    else{
    seterror(1,'*Name too short and alphabets only.');
    }
    
})

form.contact_number.addEventListener('input',()=>{
    var number = form.contact_number.value;
  
    if(number.match(/^\d{10}$/)){
        clearErrors(3);
    }
    else{
        seterror(3,'*invalid phone number');
    }
})
form.email.addEventListener('input',()=>{
    var email = form.email.value;
    if (email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
        clearErrors(4);
    }
    else{
        seterror(4,'incorrect email address');
    }
})
form.password.addEventListener('input',()=>{
    var pass = form.password.value;
    if(pass.match(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/)){
        clearErrors(6);
      
    }
    else{
seterror(6,'Password should contain one capital,one special and atleast 8 in length');

    }
})

form.password2.addEventListener('input',()=>{
    var pass = form.password.value;
    var cpass = form.password2.value;
    if (pass==cpass){
        clearErrors(7);
    } 
    else{
seterror(7,'Password does not match.');
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
   console.log("First Name : "+form.firstname.value)
    console.log("last Name : "+form.lastname.value)
    console.log("Phone Number : "+form.contact_number.value)
    console.log("Email : "+form.email.value)
    console.log("Password : "+form.password.value)
    

})
// form.submit.addEventListener('input',()=>){

// }