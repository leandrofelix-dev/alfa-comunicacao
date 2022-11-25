const token = '';
const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,permalink";

fetch(url)
    .then((res) => res.json())
    .then(function (data) {
        for (let i = 0; i <= 3; i++) {
            let media_type = data.data[i].media_type;
            let media_url = data.data[i].media_url;
            let permalink = data.data[i].permalink;

            media_type == 'IMAGE' || media_type == 'CAROUSEL_ALBUM'
                ? renderImage(media_url, permalink)
                : renderVideo(media_url, permalink)
        }
    }).catch((err) => {
        console.log('Erro de solicitação: ' + err)
    });

const insta_recentes = document.querySelector("#insta-recentes");

function renderImage(media_url, permalink) {
    const image = document.createElement("img")
    const midia_box = document.createElement("div")

    midia_box.classList.add('midia-box')
    image.classList.add('midia-content')
    insta_recentes.appendChild(midia_box)
    midia_box.appendChild(image)

    image.src = media_url
    image.addEventListener('click', () => { window.open(permalink, '_blank') })

}
function renderVideo(media_url, permalink) {
    const video = document.createElement("video")
    const midia_box = document.createElement("div")

    midia_box.classList.add('midia-box')
    video.classList.add('midia-content')
    insta_recentes.appendChild(midia_box)
    midia_box.appendChild(video)

    video.src = media_url
    video.addEventListener('click', () => { window.open(permalink, '_blank') })

}
