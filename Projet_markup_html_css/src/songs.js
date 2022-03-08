import { GetSongs } from "./api.js";

const songList = document.querySelector("#songs .list")
const artistListItemTemplate = document.querySelector("#artist-list-item-template")

function afficherArtiste(artiste) {
    const newArtist = artistListItemTemplate.content.cloneNode(true) // true pour cloner également les enfants du node
    newArtist.querySelector("a").href = "#artists-" + artiste.id
    newArtist.querySelector("img").src = artiste.image_url
    newArtist.querySelector(".artist-list-item-title").innerText = artiste.name
    artistList.append(newArtist)
}
export async function afficherArtistes() {
    const artistes = await GetArtiste();
    artistList.replaceChildren() // Remplace les enfants par rien, donc supprime tous les enfants
    for (const artiste of artistes) {
        afficherArtiste(artiste)
    }
}