const back = document.getElementById("back")
const skip = document.getElementById("skip")
const reset = document.getElementById("reset")
const video = document.getElementById("video")
const conteneur = document.getElementById("conteneur")
const play = document.getElementById("play")
const progress = document.getElementById("progress")
let isPaused = true;
console.log(conteneur);

conteneur.addEventListener("click", () => {
    if (isPaused) {
        conteneur.play()
        isPaused = false;
        play.style.display = "none"
    } else {
        conteneur.pause()
        isPaused = true;
        play.style.display = "block"

    }

})

play.addEventListener("click", () => {
    if (isPaused) {
        conteneur.play()
        isPaused = false;
        play.style.display = "none"
    } else {
        conteneur.pause()
        isPaused = true;
        play.style.display = "block"

    }
})


reset.addEventListener("click", () => {
    conteneur.currentTime = 0;
    conteneur.play()
    play.style.display = "none"
})

back.addEventListener("click", () => {
    conteneur.currentTime -= 10;
    conteneur.play()
    play.style.display = "none"
})

skip.addEventListener("click", () => {
    conteneur.currentTime += 10;
    conteneur.play()
    play.style.display = "none"

})

