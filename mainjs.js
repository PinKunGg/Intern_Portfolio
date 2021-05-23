window.onload = pageload;

//Get the button
var ToTopButton = document.getElementById("GoToTopButton");
var NavBar = document.getElementById("header");
var VerNavBar = document.getElementById("dropdownheader");

var contactelement = document.getElementById("contact");

function pageload() {
    NavBar.style.display = "none";
    VerNavBar.style.display = "block";
    loadfooter();
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        ToTopButton.style.display = "block";
        NavBar.style.display = "block";
        VerNavBar.style.display = "none";
    } else {
        ToTopButton.style.display = "none";
        NavBar.style.display = "none";
        VerNavBar.style.display = "block";
    }
}

// When the user clicks on the button, scroll to the top of the document
function GoTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* GoToTop Button ref: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */

function loadfooter() {
    document.getElementById("footercontent").innerHTML = '<h2>Contact</h2>';
    document.getElementById("footercontent").innerHTML += '<table><tr><td>Facebook : Nattapat Suracheep</td></tr><tr><td>Email : nattapat_suracheep@hotmail.com</td></tr><tr><td>GitHub : <a href="https://github.com/PinKunGg" target="_blank">https://github.com/PinKunGg</a></td></tr></table>';
    document.getElementById("footercontent").innerHTML += '<br><hr>';
    document.getElementById("footercontent").innerHTML += '<table><tr><td>Coding Ref : <a href="https://www.w3schools.com/" target="_blank">w3school.com</a> , <a href="https://stackoverflow.com/" target="_blank">stackoverflow.com</a></td></tr><tr><td>Font by : <a href="https://fonts.google.com/specimen/Athiti?subset=thai&preview.text=Hi!&preview.text_type=custom#standard-styles" target="_blank">Google Font</a></td></tr></table>';
}