const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username"

// 할 것  
// Exist username or Not     in localstorage
function paintGreetings(username){
greeting.innerText=`Hello ${username}`;
greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    
    loginForm.onsubmit =(event)=>{
        event.preventDefault(); 
        loginForm.classList.add("hidden");
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username)
        paintGreetings(username);
    }
} else {
    paintGreetings(savedUsername);
} 