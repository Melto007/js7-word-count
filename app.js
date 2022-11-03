const message = document.querySelector('#message')
let display = document.querySelector('.display-output p')

function findLength(event) {
    let value = event.target.value
    let trimValue = value.trim()
    display.innerText = `Total Length: ${trimValue.length}`
}

message.addEventListener('input', findLength)