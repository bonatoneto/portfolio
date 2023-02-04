function toggleMode() {
    const html = document.documentElement

    /*

    if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }

    OU 

    html.classList.toggle('light')

    */

    html.classList.toggle('light')

    //trocando o avatar 
    const img = document.querySelector("#profile img")
    if (html.classList.contains('lights')) {
        img.setAttribute('src', 'assets/Avatar-lightmode.png')
    } else {
        img.setAttribute('src', 'assets/Avatar-darkmode.png')
    }
}