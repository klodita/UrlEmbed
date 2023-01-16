
function modifyPlaylisteLink() {
    // Récupère la valeur de l'input
    const playlisteWantID = document.getElementById("playliste-url").value;
    // Url pour une video intégré dans l'Iframe que l'on souhaite partager en embed
    const urlPlaylisteShare = "https://www.youtube.com/embed/videoseries?list=";
    // pattern de detection de l'id de la playlist
    const pattern = /(?:youtube\.com\/(?:playlist\?list=|watch\?v=|embed\/videoseries\?list=))([^"&?\/ ]{34})/i;

    // Extract the playlist id from the url
    const playlistId = playlisteWantID.match(pattern);

    if(playlistId){
        const newUrlPlayliste = `${urlPlaylisteShare}${playlistId[1]}`;

        // Affiche le lien modifié dans le paragraphe
        document.getElementById("modified-linkPlayliste").innerHTML = `Ci-dessous voici l'URL de la vidéo Embed à Copier/Coller dans votre Google Sheet`;
        document.getElementById("modified-urlPlayliste").value = newUrlPlayliste;
    }else {
        document.getElementById("modified-linkPlayliste").innerHTML = "l'Url de la Playliste est incorrecte !";
        document.getElementById("modified-urlPlayliste").value = "";
    }
}