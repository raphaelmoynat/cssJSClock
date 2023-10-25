const heure = document.querySelector(".heure")
const minute = document.querySelector(".minute")
const seconde = document.querySelector(".seconde")

setInterval( donneHeure,1000)

function donneHeure() {
    let date = new Date()
    let hour = (date.getHours() + (date.getMinutes() + date.getSeconds()/60) / 60) / 12
    let min = (date.getMinutes() + date.getSeconds()/60) / 60
    let sec = date.getSeconds()/60
    heure.style.transform = "rotate(" + (hour * 360) + "deg)"
    minute.style.transform ="rotate(" + (min * 360) + "deg)"
    seconde.style.transform = "rotate(" + (sec * 360) + "deg)"
}
