$(function () {
    const token = "IGQVJWemVUb1JGdzM0OTVkbDFoZA29mVVdMajJLUTVZAZAHY4SHdCbndHcmdVa2ZAiMlpjMEpTNU9peWFpekUxTzU2Njg5cW9CRU9yZAG5aTkk1T2V0RmpFczN3WnItbG5senhaYzdkaTQ4UzZAScXdYeElodgZDZD";
    const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function(response){
        let dadosJson = response.data;
        let conteudo = '<div class="row" style="display:none"></div>';

        for (let p = 0; p < 4; p++) {
            let feed = dadosJson[p];
            let titulo = feed.caption !== null ? feed.caption : '';
            let tipo = feed.media_type;
            
            if (tipo === 'VIDEO') {
                conteudo += '<div class="media"><div class="video"><video controls><source src="'+feed.media_url+'" type="video/mp4"></video></div></div>';
            }
            else if(tipo === 'IMAGE'){
                conteudo += '<div class="media"><div class="imagem"><img class="imagem" title="'+ titulo +'" alt="'+titulo+'" src="'+feed.media_url+'" onclick="window.open(\''+ feed.permalink +'\');"></div></div>';
            }
        }
        conteudo += '</div>';
        $('#instaRecentes').html(conteudo);
    ;})
});