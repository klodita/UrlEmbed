
function modifyVideoLink() {
    // Récupère la valeur de l'input
    const videoWantID = document.getElementById("video-url").value;
    // Url pour une video intégré dans l'Iframe que l'on souhaite partager en embed
    const urlVideoShare = "https://www.youtube.com/embed/";
    // pattern de detection de l'id de la video
    const pattern = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtube\.com\/watch\?v=)([^"&?\/ ]{11})/i;

    // Extract the video id from the url
    const videoId = videoWantID.match(pattern);

    if(videoId){
        const newUrlVideo = `${urlVideoShare}${videoId[1]}`;
        console.log(newUrlVideo,"ess")

        // construit l'URL de la miniature
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId[1]}/mqdefault.jpg`;
        //Crée un élément image
        const thumbnail = document.createElement("img");
        //Définit l'URL de l'image
        thumbnail.src = thumbnailUrl;
        // Insère l'image dans le DOM
        document.getElementById("thumbnail-container1").appendChild(thumbnail);
        // Affiche le lien modifié dans le paragraphe
        document.getElementById("modified-link").innerHTML = `Ci-dessous voici l'URL de la vidéo Embed à Copier/Coller dans votre Google Sheet`;
        document.getElementById("modified-url").value = newUrlVideo;
    }else {
        document.getElementById("modified-link").innerHTML = "l'Url de la Video est incorrecte !";
        document.getElementById("modified-url").value = "";
    }


    
}

