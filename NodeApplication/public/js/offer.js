serviceAnimationDelay = 0.1;

//! ------------------ UPPER CONTENT ------------------

const offerUpperContentChildren = [...document.querySelector('.offer-content-upper').children];
console.log(offerUpperContentChildren);
const offerUpperContent = document.querySelector('.offer-content-upper');

// UPPER CONTENT -- INITIAAL STYLINGS
for(let i = 0; i<offerUpperContentChildren.length; i++){
    offerUpperContentChildren[i].classList.add('hidden');
    offerUpperContentChildren[i].style.transition = "all 0.4s ease";
    offerUpperContentChildren[i].style.transitionDelay = serviceAnimationDelay + "s";
    serviceAnimationDelay += 0.1;
}
// IMAGE -- OBSERVER FUNCTION
const offerUpperContentObserver = new IntersectionObserver((entries) => {
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

offerUpperContentChildren.forEach((children) => {
    // console.log(children);
    offerUpperContentObserver.observe(children);
})

//! ------------------ BOTTOM SECTION ------------------
const offerBottomSectionChildren = [...document.querySelector('.offers').children];
const offerBottomParentContainer = document.querySelector('.offers');

for( let i = 0; i<offerBottomSectionChildren.length; i++){
    offerBottomSectionChildren[i].classList.add('hidden-rise');
    offerBottomSectionChildren[i].style.transition = "all 0.4s cubic-bezier(.7,-0.02,.73,1.01)"
    offerBottomSectionChildren[i].style.transitionDelay = serviceAnimationDelay + "s";
    
    // Adding animation to inner elements
    const childArr = [...offerBottomSectionChildren[i].children]
    //? setting a new delay duration for inner elements
    //? Delayed the inner duration by 0.5s which is enough for the outer box animation to load and the inner to start executing
    let delayDuration = 0.5;
    for(let j = 0; j<childArr.length; j++){
        // console.log(childArr[j]);
        childArr[j].classList.add('hidden');
        childArr[j].style.transition = 'all 0.4s ease';
        childArr[j].style.transitionDelay = serviceAnimationDelay + delayDuration + "s";
        //? incrementing the inner delay duration by 0.1
        delayDuration += 0.1
    }
    serviceAnimationDelay += 0.3;
}

const bottomOfferContainerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            offerBottomSectionChildren.forEach((child) => {
                child.classList.toggle('hidden-rise', false);
                
                const contentChildren = [...child.children];
                contentChildren.forEach((contentChild) => {
                    contentChild.classList.remove('hidden');
                })
            } )
        }
    })
}, {
    threshold: 1
})

bottomOfferContainerObserver.observe(offerBottomParentContainer);


