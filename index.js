let name=document.getElementById('name');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let validname;
let validemail;
let validphone;

$('#failure').hide();
$('#success').hide();

email.addEventListener('blur',()=>
{

    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-z]){2,7}$/;
    let str=email.value;
    if(regex.test(str))
    {
      email.classList.remove('is-invalid');  
      validemail=true;
    }
    else
    {
        email.classList.add('is-invalid');  
      validemail=false;
    }

})

phone.addEventListener('blur',()=>
{

    let regex=/^([0-9]){10}$/;
    let str=phone.value;
    if(regex.test(str))
    {
      phone.classList.remove('is-invalid');  
      validphone=true;
    }
    else
    {
        phone.classList.add('is-invalid');  
      validphone=false;
    }

})

name.addEventListener('blur',()=>
{

    let regex=/^([a-zA-Z])([0-9a-zA-Z]+){2,10}\s([a-zA-z]){2,7}$/;
    let str=name.value;
    if(regex.test(str))
    {
      name.classList.remove('is-invalid');  
      validname=true;
    }
    else
    {
        name.classList.add('is-invalid');  
      validname=false;
    }

})

let failure=document.getElementById('failure');
let success=document.getElementById('success');
let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>
{
    console.log("submit button has been clicked");
    e.preventDefault();
    if(validemail && validphone && validname)
    {
        success.classList.add('show');
        failure.classList.remove('show');

        $('#failure').hide();
        $('#success').show();
    }
    else
    {
        failure.classList.add('show');
        success.classList.remove('show');
        // let failure=document.getElementById('failure');

        $('#success').hide();
        $('#failure').show();
    }
});