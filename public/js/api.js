const token = process.env.INSTAGRAM_TOKEN

const instagramSection = document.querySelector('#insta-recentes')
const url =
    `https://graph.instagram.com/me/media?access_token=${token}&fields=mediaUrl,mediaType,permaLink`

fetch(url)
    .then((res) => res.json())
    .then(function (data) {
        for (let i = 0; i <= 3; i++) {
            const { mediaUrl, mediaType, permaLink } = data.data[i]
            mediaType == 'IMAGE' || mediaType == 'CAROUSEL_ALBUM'
                ? renderImage(mediaUrl, permaLink)
                : renderVideo(mediaUrl, permaLink)
        }
    }).catch((err) => {
        console.log('Request error: ' + err)
    })

function renderImage(mediaUrl, permaLink) {
    const image = document.createElement("img")
    const midia_box = document.createElement("div")

    midia_box.classList.add('midia-box')
    image.classList.add('midia-content')
    instagramSection.appendChild(midia_box)
    midia_box.appendChild(image)

    image.src = mediaUrl
    image.addEventListener('click', () => { window.open(permaLink, '_blank') })

}
function renderVideo(mediaUrl, permaLink) {
    const video = document.createElement("video")
    const midia_box = document.createElement("div")

    midia_box.classList.add('midia-box')
    video.classList.add('midia-content')
    instagramSection.appendChild(midia_box)
    midia_box.appendChild(video)

    video.src = mediaUrl
    video.addEventListener('click', () => { window.open(permaLink, '_blank') })

}
