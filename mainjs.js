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
    document.getElementById("footercontent").innerHTML += '<table><tr><td>Resume : <a href="https://drive.google.com/file/d/1jDGiyJlcrmOzmr-a0KWX8Br1vHHiQgah/view?usp=sharing" target="_blank">Download</a></td></tr></table>';
}