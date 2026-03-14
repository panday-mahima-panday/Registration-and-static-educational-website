const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit',(event)=>{
event.preventDefault();
validate();
});

function validate(){

const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const phoneVal = phonenumber.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();

if(usernameVal === ""){
setErrorMsg(username,"Name cannot be empty");
}else{
setSuccessMsg(username);
}

if(emailVal === ""){
setErrorMsg(email,"Email cannot be empty");
}else if(!isEmail(emailVal)){
setErrorMsg(email,"Not a valid email");
}else{
setSuccessMsg(email);
}

if(phoneVal === ""){
setErrorMsg(phonenumber,"Phone number cannot be empty");
}else if(phoneVal.length != 10){
setErrorMsg(phonenumber,"Enter valid number");
}else{
setSuccessMsg(phonenumber);
}

if(passwordVal === ""){
setErrorMsg(password,"Password cannot be empty");
}else if(passwordVal.length < 6){
setErrorMsg(password,"Password must be at least 6 characters");
}else{
setSuccessMsg(password);
}

if(cpasswordVal === ""){
setErrorMsg(cpassword,"Re-enter password");
}else if(passwordVal !== cpasswordVal){
setErrorMsg(cpassword,"Password does not match");
}else{
setSuccessMsg(cpassword);
}

}

function setErrorMsg(input,message){

const formControl = input.parentElement;
const small = formControl.querySelector("small");

formControl.className="form-control error";
small.innerText = message;

}

function setSuccessMsg(input){

const formControl = input.parentElement;
formControl.className="form-control success";

}

function isEmail(email){
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click',()=>{
window.open(
"experiment-8.html",
"newWindow",
"width=600,height=400,left=200,top=200"
);
});

const colors = ["lightblue","lightgreen","lightpink","lavender","khaki","peachpuff"];
let colorIndex = 0;

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click",()=>{
document.body.style.backgroundColor = colors[colorIndex];
colorIndex = (colorIndex + 1) % colors.length;
});