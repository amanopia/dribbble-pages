const navigation = document.querySelector('nav');
const navigationContent = document.querySelector('.navigation-content');

const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const para3 = document.querySelector('.para3');
const paras = document.querySelectorAll('.para');
console.log(paras)

let animDel = 0.1;
function addAnimation(el){
    let element = el.children;
    for(let i = 0; i<element.length; i++){
        element[i].style.transition = "all 0.4s ease";
        element[i].style.opacity = "0";
        element[i].style.transitionDelay = animDel+"s";
        element[i].style.transform = "translateY(2rem)"
        animDel += 0.1;
    }
}

paras.forEach((element) => {
    addAnimation(element);
})

(function(){
    navigation.style.overflowY = "hidden";
    navigationContent.style.transform = "translateY(5rem)";
    navigationContent.style.transition = "all 0.4s ease";

})()

function revealAfter2Sec(){
    const styledElement = navigation.style;

    setTimeout(() =>{
           
        navigationContent.style.transform = "translateY(0)";
        styledElement.transform = "translateY(0)";

    }, 2000)
}
revealAfter2Sec();

function animateHeadings(){
    setTimeout(() => {
        para2.forEach((el) => {
            const element = el.children;
            for(let i = 0 ;i < element.length; i++){
                element[i].style.opacity = 1;
                element[i].style.transform = "translateY(0rem)";
            }
        })
    }, 2000)
}

animateHeadings();