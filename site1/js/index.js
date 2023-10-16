const navigation = document.querySelector('nav');
const navigationContent = document.querySelector('.navigation-content');

const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const para3 = document.querySelector('.para3');
const paras = document.querySelectorAll('.para');


let animDel = 0.1;
// PARA1 ANIMATION
(
    function(){
        let element = para1.children;
        for(let i = 0; i<element.length; i++){
            element[i].style.transition = "all 0.4s ease";
            element[i].style.opacity = "0";
            element[i].style.transitionDelay = animDel+"s";
            element[i].style.transform = "translateY(2rem)"
            animDel += 0.1;
    }
    }
)();

// PARA2 ANIMATION
(
    function(){
        let element = para2.children;
        for(let i = 0; i<element.length; i++){
            element[i].style.transition = "all 0.4s ease";
            element[i].style.opacity = 0;
            element[i].style.transitionDelay = animDel + "s";
            element[i].style.transform = "translateY(2rem)"
            animDel += 0.1;
            
        }
    }

)();

// PARA3 ANIMATION
(
    function(){
        let element = para3.children;
        for(let i = 0; i<element.length; i++){
            element[i].style.transition = "all 0.4s ease";
            element[i].style.opacity = 0;
            element[i].style.transitionDelay = animDel + "s";
            element[i].style.transform = "translateY(2rem)";
            animDel += 0.1;
        }
    }
)();
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
        for(let i = 0; i<para1.children.length; i++){
            para1.children[i].style.opacity = "1";
            para1.children[i].style.transform = "translateY(0rem)";
        }
        for(let j = 0;j<para2.children.length; j++){
            para2.children[j].style.opacity = "1";
            para2.children[j].style.transform = "translateY(0rem)";
        }
        for(let j = 0;j<para3.children.length; j++){
            para3.children[j].style.opacity = "1";
            para3.children[j].style.transform = "translateY(0rem)";
        }
    }, 2000)
}

animateHeadings();