
let themeContainer = document.getElementById("theme-container");

themeContainer.addEventListener("click", e => {

    let body = document.querySelector("body");

    if(body.className == "theme-dark"){ e.target.src = "http://mattprofe.com.ar:81/alumno/11994/personal/portfolio/src/static/img/sun.svg"; }
    else{ e.target.src = "http://mattprofe.com.ar:81/alumno/11994/personal/portfolio/src/static/img/moon.svg"; }

    if(body.className == "theme-dark"){
        body.className = "theme-light";
    }
    else{
        body.className = "theme-dark";
    }
});