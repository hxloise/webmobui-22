import { GetSongs } from "./api.js";
import { setSongList, playSong } from './player.js';
//liste vide est récupérée du html
const songList = document.querySelector("#songs .list")
//le template html qui contient toutes les balises d'affichage d'une musique est récupérée
const songsListItemTemplate = document.querySelector("#songs-item-template")

function afficherChansonArtiste(song, songs) {
    //cloner le template récupéré précédemment (affichage d'une musique)
    const newSong = songsListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
    //ajouter le titre de la musique
    newSong.querySelector(".list-item-title").innerText = song.title
    //ajouter l'url de l'audio
    // newSong.querySelector("audio").src = song.audio_url
    //ajout dans notre liste vide du template crée    

    newSong.querySelector('.btnPlayer').addEventListener('click', () => {
        playSong(song, songs)
        window.location.hash = '#player'
      })
    

    songList.append(newSong)
}

//construction du tableau de musique
export async function afficherChansonsArtiste(id) {
    //variable qui contient toutes les chansons d'un artiste
    const songs = await GetSongs(id);
    songList.replaceChildren() // Remplace les enfants par rien, donc supprime tous les enfants
    //chaque chanson de la liste de chansons de l'artiste est passée dans l'autre fonction pour être affichée
    for (const song of songs) {
        afficherChansonArtiste(song, songs)
    }


}