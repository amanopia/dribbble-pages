const dropdown = document.querySelector('.header-content');
const toggleDot = document.querySelector('.toggle-dot');
const liElements = document.querySelectorAll('.header-li-el');

const head = document.querySelector('.headding');

let isAnimated = false;
let animationObject = {
    targets: liElements,
    translateX: -190,
    delay: anime.stagger(100)
}

toggleDot.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
    dropdown.children[0].classList.remove('btn-active');
    if(!isAnimated){
        animationObject.translateX = -190;
        anime(animationObject);
        isAnimated = true;
    } else {
        animationObject.translateX *= -1;
        anime(animationObject);
        isAnimated = false;
    }

})

// Selecting paragraphs
const rows = document.querySelectorAll('.row');
const navigation = document.querySelector('nav');
const navigationContent = document.querySelector('.navigation-content');

// creating animation function
let animationDelay = 0.1;
function addAnimation(el){
    let element = el.children;

    for(let i = 0; i< element.length; i++){
        element[i].style.transition = "all 0.4s ease";
        element[i].style.opacity = "0";
        element[i].style.transitionDelay = animationDelay+"s";
        element[i].style.transform = "translateY(2rem)"
        animationDelay += 0.1;
    }
}
// calling the animation delay function on each row to add the styles
rows.forEach((element) => {
    addAnimation(element);
});

(function() {
    navigation.style.opacity = 0;
    navigationContent.style.transform = "translateY(5rem)";
    navigationContent.style.transition = "all 0.4s ease";
})();
// Animatingthe headings back into view
function animateHeadings(){
    setTimeout(() => {
        rows.forEach((el) => {
            let element = el.children;
            for (let i = 0; i<element.length; i++) {
                element[i].style.opacity = "1";
                element[i].style.transform = "translateY(0rem)";
            }
        })
    }, 2000)
}
function revealAfter2Sec(){

    setTimeout(() =>{
        navigation.style.opacity = 1;
        navigationContent.style.transform = "translateY(0)";
        navigation.style.transform = "translateY(0)";

    }, 2000)
}
revealAfter2Sec();
animateHeadings();
