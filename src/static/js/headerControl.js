
let themeContainer = document.getElementById("theme-container");

themeContainer.addEventListener("click", e => {

    let body = document.querySelector("body");

    if(body.className == "theme-dark"){ e.target.src = "src/static/svg/sun.svg"; }
    else{ e.target.src = "src/static/svg/moon.svg"; }

    if(body.className == "theme-dark"){
        body.className = "theme-light";
    }
    else{
        body.className = "theme-dark";
    }
});