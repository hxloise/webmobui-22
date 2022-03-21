import './css/index.css'
import { afficherArtistes } from './artistes.js';
import { afficherChansonsArtiste } from './songs.js';

window.location.hash = 'home'


function toggleSection(sectionId) {
  // Supprime/Ajoute la classe active sur la section
  document.querySelector('section.active')?.classList.remove('active');
  document.querySelector(sectionId)?.classList.add('active');
}

function toggleNav(sectionId) {
  // Supprime/Ajoute la classe active sur le lien
  document.querySelector('nav a.active')?.classList.remove('active');
  document.querySelector(`nav a[href="${sectionId}"]`)?.classList.add('active');
}



// Affichage d'une section
const displaySection = () => {
  // Comme nos hash et nos ids de section sont les mêmes, hash = sectionid
  const sectionId = window.location.hash

  toggleSection(sectionId)
  toggleNav(sectionId)

  const hashSplite = window.location.hash.split("-")
  // si le premier élément est artiste, on est dans la gestion des artistes…
  switch (hashSplite[0]) {
    case "#artists":
      // est-ce que le deuxième élément retourne quelque chose ? Et donc n’est pas undefined ? Oui?
      // Alors il y a un id et on affiche les musiques de cet artiste
      if (hashSplite[1]) {
        //donner l'id récupéré à la fonction
        afficherChansonsArtiste(hashSplite[1])
        //par défault la section est display:none. Cette fonction permet d'ajouter l'attribut active
        toggleSection("#songs")
      }
      else {
        afficherArtistes()
      }break;
    case "#player": break;
}
}

window.addEventListener('hashchange', displaySection)

// Affichage au chargement
displaySection()
afficherArtistes()

