
function modifyVideoLink() {
    // Récupère la valeur de l'input
    const videoWantID = document.getElementById("video-url").value;
    // Url pour une video intégré dans l'Iframe que l'on souhaite partager en embed
    const urlVideoShare = "https://www.youtube.com/embed/";
    // pattern de detection de l'id de la video
    const pattern = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtube\.com\/watch\?v=)([^"&?\/ ]{11})/i;
    const pattern2 = /^https:\/\/youtu\.be\/([^?\/]+)/i;

    // Extract the video id from the url
    const videoId = videoWantID.match(pattern);
    const videoId2 = videoWantID.match(pattern2);
    console.log(videoId2, "essai")

    if(videoId){
        const newUrlVideo = `${urlVideoShare}${videoId[1]}`;
        console.log(newUrlVideo,"ess")

        // construit l'URL de la miniature
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId[1]}/mqdefault.jpg`;
        //Crée un élément image
        const thumbnail = document.createElement("img");
        //Définit l'URL de l'image
        thumbnail.src = thumbnailUrl;
        thumbnail.alt = ""
        // Insère l'image dans le DOM
        document.getElementById("thumbnail-container1").appendChild(thumbnail);
        // Affiche le lien modifié dans le paragraphe
        document.getElementById("modified-link").innerHTML = `Ci-dessous voici l'URL de la vidéo Embed à Copier/Coller dans votre Google Sheet`;
        document.getElementById("modified-url").value = newUrlVideo;

        // Affiche le lien miniature dans le paragraphe
        document.getElementById("miniature-link").innerHTML = `Ci-dessous voici l'URL de la Miniature`;
        document.getElementById("miniature-url").value = thumbnail.src;



    }

    else if(videoId2){
        const newUrlVideo = `${urlVideoShare}${videoId2[1]}`;
        console.log(newUrlVideo,"ess")

        // construit l'URL de la miniature
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId2[1]}/mqdefault.jpg`;
        //Crée un élément image
        const thumbnail = document.createElement("img");
        //Définit l'URL de l'image
        thumbnail.src = thumbnailUrl;
        thumbnail.alt = ""
        // Insère l'image dans le DOM
        document.getElementById("thumbnail-container1").appendChild(thumbnail);
        // Affiche le lien modifié dans le paragraphe
        document.getElementById("modified-link").innerHTML = `Ci-dessous voici l'URL de la vidéo Embed à Copier/Coller dans votre Google Sheet`;
        document.getElementById("modified-url").value = newUrlVideo;

        // Affiche le lien miniature dans le paragraphe
        document.getElementById("miniature-link").innerHTML = `Ci-dessous voici l'URL de la Miniature`;
        document.getElementById("miniature-url").value = thumbnail.src;



    }
    
    else {
        document.getElementById("modified-link").innerHTML = "l'Url de la Video est incorrecte !";
        document.getElementById("modified-url").value = "";
    }

    
    
}

async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(document.getElementById("modified-url").value);
      alert('Le texte a été copié dans le presse-papiers.');
    } catch (err) {
      console.error('Impossible de copier : ', err);
    }
  }
  
  async function copyToClipboard2() {
    try {
      await navigator.clipboard.writeText(document.getElementById("miniature-url").value);
      alert('Le texte a été copié dans le presse-papiers.');
    } catch (err) {
      console.error('Impossible de copier : ', err);
    }
  }
  
  
