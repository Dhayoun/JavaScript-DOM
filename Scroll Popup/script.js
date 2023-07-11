// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours


let playOnce=true;

window.addEventListener("scroll", () => {
//Navbar effect
  if(window.scrollY>50){
    navbar.style.height="50px";
  }else{
    navbar.style.height="90px";
  }

  //Image effect
  //window.scrollY+window.innerHeight / document.body.offsetHeight  -->ca me donne la valeur de positionnement du scroll en pourcentage. on a divise la position du scroll par rapport a celle du bldy pour pas avoir de pb lorsquon le taille de lecran change.

  let scrollValue= (window.scrollY+window.innerHeight) / document.body.offsetHeight;
  
  if (scrollValue > 0.45){
    imgImprovise.style.opacity=1;
    imgImprovise.style.transform="none";}


    //Popup
    if (scrollValue > 0.85 && playOnce){
        popup.style.opacity=1;
        popup.style.transform="none";
        playOnce=false;
    }

}) 

closeBtn.addEventListener('click',() => {
    popup.style.opacity=0;
    popup.style.transform="translateX(500px)";
})
