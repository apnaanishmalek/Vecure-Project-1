// dom : document object manupulation


// var x = document.querySelector(".targeted"); // to fetch the html data into the variable
// x.innerHTML = "Hello"; // to change the text of html
// x.style.color = "red"; // to change the style of html data
// x.style.backgroundColor = "yellow";


// var x = document.querySelector("#first-sec-container-content-span");
// x.innerHTML = "hey";
// x.style.color = "green";
// x.style.backgroundColor= "red";
// x.style.marginTop = "120px";

// var  x = document.querySelector(".footer-text-p");
// x.innerHTML = "this is the best website for use ";
// x.style.color = "red";



var login = document.querySelector('.pop-up-div');
var button = document.querySelector('#button')
button.addEventListener('click', function() {
    login.style.backgroundColor = "red";
})

