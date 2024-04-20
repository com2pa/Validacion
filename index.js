// paso 1 el numero de area de los paises 
// paso 2  seleccioanar el input de username para la validacion de los datos
const PASSWORD_REGEX=/^(?=.*[a-z])(?=.*[0-9]).{6,24}$/
const USERNAME_REGEX=/^(?=.*[a-z])(?=.*[0-9]).{6,16}$/
const EMAIL_REGEX=/^\S+@\S+\.\S+$/
const NUMBER_REGEX=/^[0-9]{6,16}$/

//selectores 
const countries = document.querySelector('#countries');
// paso 2
const usernameInput = document.querySelector('#username');
const emailInput=document.querySelector('#email');
const phoneCode = document.querySelector('#phone-code')
const phone = document.querySelector('#phone')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')

// -- validaciones
let usernameValidation = false;
let emailValidation= false;
let phoneValidation=false;
let passwordValidation =false;
let confirmPasswordValidation=false;
// paso3.1
// funcion para validacion estados input

const validacion=(e, validacion,element)=>{
   
    // const texto= usernameInput.parentElement.children[1]
    const informacion= e.target.parentElement.children[1]
   
    if(validacion.value== ''){
        element.classList.remove('correct')
        element.classList.remove('incorrect')
        informacion.classList.remove('show-informacion')
    }else if(validacion){
        element.classList.add('correct')
        element.classList.remove('incorrect')
        informacion.classList.remove('show-informacion')
    }else{
        element.classList.add('incorrect')
        element.classList.remove('correct')
        informacion.classList.add('show-informacion')
    }
}

// paso 1 
[... countries].forEach(option=>{
   option.innerHTML= option.innerHTML.split('(')[0];
})
// paso 3
// estado
usernameInput.addEventListener('input',e =>{
    usernameValidation= USERNAME_REGEX.test(e.target.value)
    validacion(e,usernameValidation,usernameInput)//e= evento, usernameValidation =validacion ,usernameInput = input
    
})

emailInput.addEventListener('input',e =>{
    emailValidation= EMAIL_REGEX.test(e.target.value)
    validacion(e,emailValidation,emailInput)
})
// paso3.2 evento para seleccionar el pais y codigo de telf 
countries.addEventListener('input',e =>{
    const optionSelected =[... e.target.children].find(option => option.selected);
    phoneCode.innerHTML=`+${optionSelected.value}`
})

phone.addEventListener('input',e =>{
    phoneValidation= NUMBER_REGEX.test(e.target.value)
    const informacion= e.target.parentElement.parentElement.children[1]
    if(phoneValidation.valueOf== ''){
        phone.classList.remove('correct')
        phone.classList.remove('incorrect')
        informacion.classList.remove('show-informacion')
    }else if(phoneValidation){
        phone.classList.add('correct')
        phone.classList.remove('incorrect')
        informacion.classList.remove('show-informacion')
    }else{
        phone.classList.add('incorrect')
        phone.classList.remove('correct')
        informacion.classList.add('show-informacion')
    }
})


password.addEventListener('input',e =>{
    passwordValidation= PASSWORD_REGEX.test(e.target.value)
    validacion(e,passwordValidation,password,)
    
})
confirmPassword.addEventListener('input',e=>{
    confirmPasswordValidation= e.target.value === password.value
    validacion(e,confirmPasswordValidation,confirmPassword)
})