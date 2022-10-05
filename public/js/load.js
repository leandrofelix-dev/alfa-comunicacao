const loadDiv = document.querySelector("#loadSection");
loadDiv.style.display = "none";

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Alfa", "qualidade", "ética"];
const typingDelay = 180;
const erasingDelay = 110;
const newTextDelay = 1200;
let textArrayIndex = 0;
let charIndex = 0;

const scrollButton = document.querySelector('#scrollLoad')
const loadPage = document.querySelector('#loadPage')

function upLoadPage(){
    loadPage.style.transition = "all ease-in-out 1s"
    loadPage.style.opacity= ".75"
    loadPage.style.position="absolute"
    loadPage.style.marginTop="-100%"
    loadPage.style.zIndex = "-1000"
}

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});