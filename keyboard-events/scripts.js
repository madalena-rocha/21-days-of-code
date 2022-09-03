const keyPress = document.querySelector(".key-press")

const clearBtn = document.querySelector(".clear-btn")
clearBtn.addEventListener('click', clearKeyPress)

window.addEventListener("keydown", (event) => {
    keyPress.innerHTML = `
    ${keyPress.innerHTML} <span class="key-item">${event.key == " " ? "Spacebar" : event.key}</span>
    `
    clearBtn.classList.remove("hide")
})

function clearKeyPress() {
    keyPress.innerHTML = " "
    clearBtn.classList.add("hide")
}
