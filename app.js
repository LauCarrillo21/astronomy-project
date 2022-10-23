   function changeTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}

function Subscribe () {
    let name = prompt("Hello! What's your name?");
    let email = prompt("Write your email please");
    alert(`Thanks for subscribing ${name}, we'll send you an introductory e-mail to ${email} ⭐`);
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click",changeTheme);

let newsLetter = document.querySelector(".newsletter");
newsLetter.addEventListener("click", Subscribe);



console.log("hello");
