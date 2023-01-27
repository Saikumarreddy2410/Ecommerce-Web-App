let form = document.querySelector('.formpage');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let conformPass = document.getElementById('cpassword');

// Login page 

let loginUser = document.getElementById('login_username')
console.log(loginUser);
let loginPassword = document.getElementById('login_password')
console.log(loginPassword);
let login = document.getElementById('loginform')


// let user = { }

// let appState = JSON.parse(localStorage.getItem('dataBase')) || localStorage.setItem("dataBase",JSON.stringify([]))

// console.log(appState)

// form.addEventListener('submit', e =>{
//     e.preventDefault();

//     formValidate();
// });

// //  function formValidate(){
// //     const usernameValue = username.value.trim();
// //     const emailValue = email.value.trim();
// //     const passwordValue = password.value.trim();
// //     const conformPassValue = conformPass.value.trim();

// //     console.log(usernameValue, emailValue, passwordValue, conformPassValue);



// //     if(usernameValue === ""){
// //         setError(username, "Username can't be Empty")
// //     } else if(usernameValue <= 6){
// //         setError(username, '')
// //     }else {
// //         setSuccess(username)
// //     }



// //     if(emailValue === ''){
// //         setError(email, "Email can't be Empty")
// //     } else if(!emailValue.includes('@gmail.com')){
// //         setError(email, 'Invalid Email')
// //     }else {
// //         setSuccess(email)
// //     }



// //     if(passwordValue === ''){
// //         setError(password, "Password can't be Empty")
// //     } else if(passwordValue.length <= 5){
// //         setError(password, 'Password must contain atleast 6 characters')
// //     }else {
// //         setSuccess(password)
// //     }


// //     if(conformPassValue === ''){
// //         setError(conformPass, 'Confirm Password cannot be Empty')
// //     } else if(conformPassValue !== passwordValue){
// //         setError(conformPass, 'Password doesn"t Match')
// //     }else {
// //         setSuccess(conformPass)
// //     }

// //  }

// let usernameValid = () => {

//     const usernameValue = username.value.trim();

//     let valid = false;
//     console.log(usernameValue);

//     if(usernameValue === ""){
//         setError(username, "Username can't be Empty")
//     } else if(usernameValue.length <= 6){
//         setError(username, "Username must be 6 Charatcers" )
//     } else {
//         setSuccess(username)

//         valid = true; 

//         user.username = usernameValue
//     }
//     return valid;
// }

// let emailNameValid = () => {

//     const emailValue = email.value.trim();

//     let valid = false;

//     if(emailValue === ''){
//         setError(email, "Email can't be Empty")
//     } else if(!emailValue.includes('@gmail.com')){
//         setError(email, 'Invalid Email')
//     }else {
//         setSuccess(email)
//         valid = true;

//          user.email = emailValue;
//         let unknown = localStorage.setItem(emailValue,appState)
//         console.log(unknown);
//     }
//     return valid;

// }

// let passwordValid = () => {

//     const passwordValue = password.value.trim();

//     let valid = false;

//     if(passwordValue === ''){
//         setError(password, "Password can't be Empty")
//     } else if(passwordValue.length <= 5){
//         setError(password, 'Password must contain atleast 6 characters')
//     }else {
//         setSuccess(password)
//         valid = true;

//         user.password = passwordValue
        
//     }
//     return valid;
// }

// let confirmValid = () => {

//     const conformPassValue = conformPass.value.trim();
//     const passwordValue = password.value.trim();

//     let valid = false;

//     if(conformPassValue === ''){
//         setError(conformPass, 'Confirm Password cannot be Empty')
//     }else if(conformPassValue.length <= 5){
//         setError(conformPass, 'Password must contain atleast 6 characters')
//     } else if(conformPassValue !== passwordValue){
//         setError(conformPass, 'Password doesn"t Match')
//     }else {
//         setSuccess(conformPass)
//         valid = true;
        
//     }
//     return valid;
// }

// // function formValidate(){

// // let userName = usernameValid(), 
// // emailName = emailNameValid(), 
// // passwordName = passwordValid(), 
// // confirmPassword = confirmValid()



// // let isValid = userName && emailName && passwordName && confirmPassword

// // if(isValid){
// //      user = {...user,cartItem : [], totalPrice : 0 }
// //      console.log(user);
// //      if(appState.length == 0){
// //         let usersData  = {...appState, user}
// //         appState = localStorage.setItem(appState, JSON.stringify(usersData)); 
// //         console.log(appState);
        
// //      }
// // } else {
// //     console.log(false); 
// // }
// // }


// function formValidate(){

//     let userName = usernameValid(), 
//     emailName = emailNameValid(), 
//     passwordName = passwordValid(), 
//     confirmPassword = confirmValid()

//     let isValid = userName && emailName && passwordName && confirmPassword

//     if(isValid){
//         alert("Register Successfully")
//     } else {
//         alert("Register Failed"); 
//     }
// }

//----------------------  Login Page Validation -------------------------

login.addEventListener('submit', loginValidate)

function loginEmail(){
    if(loginUserValue == " "){
        setError(loginUser,"Email Cannot be Blank")
    }
    else if(loginUserValue !== emailNameValid()){
        setError(loginUser,"Email Doesn't Match")
    }
    else{
        setSuccess(loginUserValue)
    }
}

function loginValidate(){
    let loginUserValue = loginUser.Value.trim();
    let loginPasswordValue = loginPassword.Value.trim();
    loginEmail()
}


// --------------------------  Error Messages  --------------------------

function setError(input, message){
    let formControl = input.parentElement;
    let small = formControl.querySelector('.small');
    formControl.className = 'form_control error';
    small.innerText = message;
}


function setSuccess(input){
    let formControl = input.parentElement;

    formControl.className = 'form_control success'
}
