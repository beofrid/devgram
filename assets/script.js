var time = 5000
    currentindex =0
    images = document.querySelectorAll('.imgcont')
    stop = images.length

function nextslide(){
    images[currentindex].classList.remove("selected")
    currentindex++
    if(currentindex>=stop)
    { currentindex = 0}
    images[currentindex].classList.add("selected")
}

//intervalo de execução dos slides
function slides () {
    setInterval(
        () => { nextslide()}, time
    )
}
window.addEventListener('load', slides)