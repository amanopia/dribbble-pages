const dropdown = document.querySelector('.header-content');
const toggleDot = document.querySelector('.toggle-dot');
const liElements = document.querySelectorAll('.header-li-el');

const timeOutMilliSeconds = 2000;

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
    }, timeOutMilliSeconds)
}
function revealAfter2Sec(){

    setTimeout(() =>{
        navigation.style.opacity = 1;
        navigationContent.style.transform = "translateY(0)";
        navigation.style.transform = "translateY(0)";
        

    }, timeOutMilliSeconds)
}
revealAfter2Sec();
animateHeadings();


// // Content Para
const contentPara = document.querySelector('.content-para');
const ellipsisText = document.querySelector('.ellipsis-text');
const secondDiv = contentPara.querySelector(':nth-child(2)');
const paraTextContent = ellipsisText.textContent;
const textContentArray = paraTextContent.split(' ');


// function hideVisibility(){
//     contentPara.style.opacity = 0;
//     contentPara.style.transform = "translateY(2rem)";
//     contentPara.style.transition = "all 0.4s ease";
//     animationDelay += 0.1
// }
function hideTextContent(){
    
    ellipsisText.textContent = '';
    textContentArray.forEach((element) => {
        var span = document.createElement('span');
        span.textContent = element + " ";
        span.setAttribute('style', `transition: all 0.4s ease ${animationDelay}s; opacity: 0; transform: translateY(5rem);`);
        span.setAttribute('class', 'para-text');
        ellipsisText.appendChild(span);
        animationDelay += 0.01;
    })

    // Styling the div
    secondDiv.style.opacity = 0;
    secondDiv.style.transform = 'translateY(3rem)';
    secondDiv.style.transition = 'all 0.4s ease';
    secondDiv.style.transitionDelay = animationDelay+"s";;
    animationDelay+= 0.1;
}
hideTextContent();

function revealParaElements(){
    setTimeout(() => {
        const paraTextElements = document.querySelectorAll('.para-text');
        paraTextElements.forEach((element ) => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0rem)';
        })

        secondDiv.style.opacity = 1;
        secondDiv.style.transform = 'translateY(0rem)';

    }, timeOutMilliSeconds)
}

revealParaElements()


console.log(window.innerWidth);