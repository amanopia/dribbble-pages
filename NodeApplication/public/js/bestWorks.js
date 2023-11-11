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

//! ------------------ MIDDLE SECTION ------------------

const containerMid = document.querySelector('.container-mid');
const containerMidImage = document.querySelector('.container-mid div:nth-child(1)');
const containerMidProjectArr = [...document.querySelector('.container-mid div:nth-child(2)').children];
const containerMidObserved = document.querySelector('.container-mid div:nth-child(2)');

console.log(containerMid);
console.log(containerMidImage)
console.log(containerMidProjectArr)
console.log(containerMidObserved)

// const containerMidRevImage = document.querySelector('.container-mid div:nth-child(1)');

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