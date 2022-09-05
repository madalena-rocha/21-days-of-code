const API_KEY = '3BOkcYexcCk1A3Yprs2D48uy_jqJ4u8YYNkTZLUyRrY'
// const BASE_URL = 'https://api.unsplash.com/'
const IMG_URL = 'https://api.unsplash.com/photos/random'

const randomImages = document.querySelector('#random-images')
const loadImages = document.querySelector('#load-images')

window.onload = () => {
    getRandomImages()
}

loadImages.addEventListener('click', getRandomImages)

function getRandomImage() {
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    const url = `${IMG_URL}?client_id=${API_KEY}`

    axios.get(url)
    .then(response => {
        const data = response.data

        randomImages.innerHTML += `
        <div class="random-image">
            <img src="${data.urls.raw}" alt="${data.alt_description}">
        </div>
        `
    })
    .catch(error => console.error(error))
}

function getRandomImages() {
    for (let i=0; i<3; i++) {
        getRandomImage()
    }
}