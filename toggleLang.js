let langbTn = document.getElementById("translateBtn")
let translate = document.getElementById("translate")
let eng = document.getElementById("english")
let spa = document.getElementById("spanish")

langbTn.addEventListener("click", () => {
    if (langbTn.innerHTML === "Español") {
        langbTn.innerText = `English`
        eng.className = 'display'
        spa.className = ''
    } else {
        langbTn.innerText = `Español`;
        eng.className = ''
        spa.className = 'display'
    }
})