
function miniatureDownload() {
    // Récupère la valeur de l'input
    const videoUrl = document.getElementById("miniature-url").value;
    // pattern de detection de l'id de la video
    const pattern = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtube\.com\/watch\?v=)([^"&?\/ ]{11})/i;
    const pattern2 = /(?:youtube\.com\/playlist\?list=|youtube\.com\/view_play_list\?p=)([A-Za-z0-9\-_]{34,44})/i;

    // Extract the video id from the url
    const videoId = videoUrl.match(pattern);


    if(videoId){
        //construit l'URL de la miniature
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId[1]}/mqdefault.jpg`;
        //Crée un élément image
        const thumbnail = document.createElement("img");
        //Définit l'URL de l'image
        thumbnail.src = thumbnailUrl;
        // ajoute l'url de la miniature au lien de téléchargement
        document.getElementById("download-link").href = thumbnailUrl;

        // Demande confirmation à l'utilisateur avant de lancer le téléchargement
        if (confirm("Voulez-vous télécharger cette image ?")) {
            
            fetch(thumbnailUrl)
                .then(res => res.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.style.display = "none";
                    a.href = url;
                    //nomme le fichier
                    a.download = "miniature.jpg";
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    alert("Fichier Téléchargé");
                })
                .catch(() => alert("Impossible de télécharger ce fichier"));
        }
    }else {
        document.getElementById("thumbnail-container").innerHTML = "l'Url de la vidéo ou de la playliste est incorrecte !";
    }
}
