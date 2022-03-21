export async function GetArtiste() {
    const response = await fetch('https://webmob-ui-22-spotlified.herokuapp.com/api/artists')
    const artistes = await response.json()
    return artistes 
    }

export async function GetSongs(id){
    const url = 'https://webmob-ui-22-spotlified.herokuapp.com/api/artists/' + id + '/songs'
    const response = await fetch(url)
    const songs = await response.json()
    return songs 
}