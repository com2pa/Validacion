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

// -- validaciones
let usernameValidation = false;



// paso 1 
[... countries].forEach(option=>{
   option.innerHTML= option.innerHTML.split('(')[0];
})
// paso 3
// estado
usernameInput.addEventListener('input',e =>{
    // console.log(e.target.value);
    
    usernameValidation= USERNAME_REGEX.test(e.target.value)
    console.log(usernameValidation);
    const texto= usernameInput.parentElement.children[1]
    // const informacion= e.target.parentElement.children[1]
    console.log(texto);
    if(usernameValidation.value== ''){
        usernameInput.classList.remove('correct')
        usernameInput.classList.remove('incorrect')
        texto.classList.remove('show-informacion')
    }else if(usernameValidation){
        usernameInput.classList.add('correct')
        usernameInput.classList.remove('incorrect')
        texto.classList.remove('show-informacion')
    }else{
        usernameInput.classList.add('incorrect')
        usernameInput.classList.remove('correct')
        texto.classList.add('show-informacion')
    }
})