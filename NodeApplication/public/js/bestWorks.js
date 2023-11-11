//! ------------------ UPPER CONTENT ------------------
serviceAnimationDelay = 0.1;
const workContentUpper = document.querySelector('.work-content-upper');
const workContentUpperChildren = [...workContentUpper.children];


// UPPER CONTENT -- INITIAAL STYLINGS
for(let i = 0; i<workContentUpperChildren.length; i++){
    workContentUpperChildren[i].classList.add('hidden');
    workContentUpperChildren[i].style.transition = "all 0.4s ease";
    workContentUpperChildren[i].style.transitionDelay = serviceAnimationDelay + "s";
    serviceAnimationDelay += 0.1;
}

// OBSERVER FUNCTION
const workContentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // entry.target.classList.toggle('hidden', entry.isIntersecting); // this adds the hidden class when element.isIntersecting evaluates to true

        if(entry.isIntersecting){
            setTimeout(() => {
                entry.target.classList.toggle('hidden', false);
                observer.unobserve(entry.target);
            }, timeOutCount)

        }
    })
}, {
    threshold: 1,
})

workContentUpperChildren.forEach((el) => {
    workContentObserver.observe(el);
})

//! ------------------ MIDDLE SECTION : ( CONTAINER - MID) ------------------

const containerMid = document.querySelector('.container-mid');
const containerMidImage = document.querySelector('.container-mid div:nth-child(1)');
const containerMidProjectArr = [...document.querySelector('.container-mid div:nth-child(2)').children];
const containerMidObserved = document.querySelector('.container-mid div:nth-child(2)');



for(const element of containerMidProjectArr){
    element.classList.add('hidden');
    element.style.transition = "all 0.4s ease";
    element.style.transitionDelay = serviceAnimationDelay + "s";
    serviceAnimationDelay += 0.1;
}


containerMidImage.style.transform = "scale(0,0)";
containerMidImage.style.transformOrigin = "top left";

containerMidObserved.classList.add('hidden');
containerMidObserved.style.transition = "all 0.4s ease";
containerMidObserved.style.transitionDelay = serviceAnimationDelay + "s";

const obj = {
    targets: containerMidImage,
    scale: (1,1),
    easing: 'easeInOutExpo',
    delay: 500
}


const contO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting) {
            console.log("entry is intersecting");
            anime(obj);
            containerMidObserved.classList.remove('hidden');
            setTimeout(() => {
                containerMidProjectArr.forEach((child) => {
                    child.classList.remove('hidden'); 
                })
            }, 1000)
        }
    }) 
}, {
    threshold: 1
})

contO.observe(workContentUpper);

// const containerMidChildren = [...containerMid.children];
// const containerMidRev = document.querySelector('.container-mid-rev');
// const containerMidRevChildren = [...containerMidRev.children];

//! ------------------ MIDDLE SECTION : ( CONTAINER - MID - REV ) ------------------


const containerMidRev = document.querySelector('.container-mid-rev');
const containerMidRevImage = document.querySelector('.container-mid-rev div:nth-child(2)');
const containerMidRevObserved = document.querySelector('.container-mid-rev div:nth-child(1)')

containerMidRevImage.style.transform = 'scale(0,0)';
containerMidRevImage.style.transformOrigin = 'top right';



const obj2 = {
    targets: containerMidRevImage,
    scale: (1,1),
    easing: 'easeInOutExpo',
    delay: 200
}

const containerMidRevProjectArr = [...document.querySelector('.container-mid-rev div:nth-child(1)').children];

serviceAnimationDelay = 0.1;
for(const element of containerMidRevProjectArr) {
    element.classList.add('hidden');
    element.style.transition = "all 0.4s ease";
    element.style.transitionDelay = serviceAnimationDelay + "s";
    serviceAnimationDelay += 0.1;
}

containerMidRevObserved.classList.add('hidden');
containerMidRevObserved.style.transition = "all 0.4s ease";

const cont1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            anime(obj2);
            containerMidRevObserved.classList.remove('hidden');
            setTimeout(() => {
                containerMidRevProjectArr.forEach((child) => {
                    child.classList.remove('hidden');
                })
            }, 500)
        }
    })
}, {
    threshold: 0.6
})

cont1.observe(containerMidRev);