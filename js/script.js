const darkModeBtn = document.querySelector(".btn")
const topPage = document.querySelector(".top-page")
const title = document.querySelector(".title")
const btnDark = document.querySelector(".btn")
const circleChanger = document.querySelector(".circle")
const sunImg = document.querySelector(".sun")
const moonImg = document.querySelector(".moon")
const infoSection = document.querySelector(".info")
const titleText = document.querySelector(".title-text")


darkModeBtn.addEventListener("click", darkMode)

function darkMode(){
    topPage.classList.toggle("dark-top")
    title.classList.toggle("dark-title")
    btnDark.classList.toggle("dark-btn")
    circleChanger.classList.toggle("circle")
    circleChanger.classList.toggle("dark-circle")
    circleChanger.classList.toggle("move-circle-right")
    sunImg.classList.toggle("dark-sun")
    sunImg.classList.toggle("sun")
    moonImg.classList.toggle("dark-moon")
    moonImg.classList.toggle("moon")
    infoSection.classList.toggle("dark-info")
    titleText.classList.toggle("dark-title-text")
}