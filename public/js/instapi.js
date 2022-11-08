$(function () {
    const token = "";
    const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function(response){
        let dadosJson = response.data;
        let conteudo = '<div class="row" style="display:none"></div>';

        for (let p = 0; p < 4; p++) {
            let feed = dadosJson[p];
            let titulo = feed.caption !== null ? feed.caption : '';
            let tipo = feed.media_type;
            
            if (tipo === 'VIDEO') {
                conteudo += '<div class="media"><div class="videoBox"><video class="content" controls><source src="'+feed.media_url+'" type="video/mp4"></video></div></div>';
            }
            else if(tipo === 'IMAGE' || tipo === 'CAROUSEL_ALBUM') {
                conteudo += '<div class="media"><div class="imagemBox"><img class="content" title="'+ titulo +'" alt="'+titulo+'" src="'+feed.media_url+'" onclick="window.open(\''+ feed.permalink +'\');"></div></div>';
            }

        }
        conteudo += '</div>';
        $('#instaRecentes').html(conteudo);
    ;})
});