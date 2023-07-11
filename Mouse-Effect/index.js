

const mouses=document.querySelectorAll(".mouse")
window.addEventListener("mousemove", (e) => {
    mouses.forEach((mouse) => {
        mouse.style.top=e.y+"px";
        mouse.style.left=e.x+"px";
    })

})


// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
