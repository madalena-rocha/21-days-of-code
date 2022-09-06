const API_KEY = '47876ad74e054c6e21605a003b685301d381e899'
// const BASE_URL = 'https://emoji-api.com/'
const IMG_URL = 'https://emoji-api.com/emojis'

const emojisBox = document.querySelector('.emojis-box')

let emoji

window.onload = () => {
    getEmojis()
}

function getEmojis() {
    // https://emoji-api.com/emojis?access_key=47876ad74e054c6e21605a003b685301d381e899
    const url = `${IMG_URL}?access_key=${API_KEY}`

    axios.get(url)
    .then(response => {
        const data = response.data

        for (let i=0; i<55; i++) {
            emojisBox.innerHTML += `
            <div class="emoji">${data[i].character}</div>
            `
        }

        emoji = document.querySelectorAll('.emoji')

        copyEmoji()
    })
    .catch(error => console.error(error))
}

function copyEmoji() {
    let emojiArray = [...emoji]

    emojiArray.forEach(item => {
        item.addEventListener('click', () => {
            navigator.clipboard.writeText(item.innerText)

            alert("Emoji copiado para a área de transferência!")
        })
    })
}
