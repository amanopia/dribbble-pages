const timeOutCount = 600;
serviceAnimationDelay = 0.1;

//! ------------------ UPPER CONTENT ------------------
const upperContentChildren = [...document.querySelector('.content-upper').children];
const upperContent = document.querySelector('.content-upper');

// UPPER CONTENT -- INITIAAL STYLINGS
for(let i = 0; i<upperContentChildren.length; i++){
    upperContentChildren[i].classList.add('hidden');
    upperContentChildren[i].style.transition = "all 0.4s ease";
    upperContentChildren[i].style.transitionDelay = serviceAnimationDelay + "s";
    serviceAnimationDelay += 0.1;
}
// IMAGE -- OBSERVER FUNCTION
const observer = new IntersectionObserver((entries) => {
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

upperContentChildren.forEach((children) => {
    // console.log(children);
    observer.observe(children);
})

//! ------------------ IMAGE ------------------
const serviceContainerImage = document.querySelector('.service-section-image');
const cont = document.querySelector('.service-image-container');
// IMAGE -- INITIAAL STYLINGS
(function imageInitialStyles(){
    serviceContainerImage.classList.add('hidden-rise');
    serviceContainerImage.style.transition = "all 0.4s cubic-bezier(.7,-0.02,.73,1.01)"
    serviceContainerImage.style.transitionDelay = serviceAnimationDelay + "s";
    serviceAnimationDelay += 0.1;
})();
// IMAGE -- OBSERVER FUNCTION
const observerRise = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log("is intersecting")
            setTimeout(() => {
                entry.target.children[0].classList.toggle('hidden-rise', false);
            }, timeOutCount);
            // entry.target.children[0].classList.toggle('hidden-rise', false);
        }
    })
}, {
    threshold: 1,
})

observerRise.observe(cont);


//! ------------------ CLIENT STATS ------------------
const clientDataContainer = document.querySelector('.client-data');
const clientDataChildrenArray = [...clientDataContainer.children];
console.log(clientDataChildrenArray);

// CLIENT STATS -- INITIAAL STYLINGS
(function hideClientData(){
   clientDataChildrenArray.forEach((el) => {
    el.classList.add('client-data-fade');
    el.style.transition = "all 0.4s ease";
    el.style.transitionDelay = serviceAnimationDelay + "s";
    serviceAnimationDelay += 0.2;
   }) 
})();

// CLIENT STATS -- OBSEERVER FUNCTION
const observerFade = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { 
        if(entry.isIntersecting){
            setTimeout(() => {
                clientDataChildrenArray.forEach((child) => {
                    child.classList.toggle('client-data-fade', false);
                })
            }, timeOutCount)

        }
    })
}, {
    threshold: 0.3
})

observerFade.observe(clientDataContainer);