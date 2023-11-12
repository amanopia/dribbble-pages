serviceAnimationDelay = 0.1;

const ideasContainerUpper = document.querySelector('.ideas-container-upper');
const ideasContainerImage = document.querySelector('.ideas-container-image');
const ideasContainerUpperChildren = document.querySelector('.ideas-container-upper div:nth-child(1)')

const span = document.querySelectorAll('.content-left span');
console.log(span);
const paragraph = document.querySelector('.content-left p');
console.log(paragraph);
const buttons = document.querySelectorAll('.content-left button');

function addProperties(item) {
    for(const element of item){
        element.classList.add('hidden');
        element.style.transition = "all 0.4s ease";
        element.style.transitionDelay = serviceAnimationDelay + "s";
        serviceAnimationDelay += 0.1;
    }
}
function addPropertiesSingularElement(item){
    item.classList.add('hidden');
    item.style.transition = "all 0.4s ease";
    item.style.transitionDelay = serviceAnimationDelay + "s";
    serviceAnimationDelay += 0.1;
}
addProperties(span);
addPropertiesSingularElement(paragraph);
addProperties(buttons);



const ideasContentLeft = document.querySelector('.content-left')
ideasContainerImage.classList.add('ideas-hidden-rise');
ideasContainerImage.style.transition = "all 0.4s cubic-bezier(.7,-0.02,.73,1.01)"

const heading = document.querySelector('.container-bottom-left h1');
const footerParagraphs = document.querySelectorAll('.container-bottom-left p');
const footerButtons = document.querySelectorAll('.ideas-container-bottom button');
console.log(footerButtons);

addPropertiesSingularElement(heading)
addProperties(footerParagraphs);
addProperties(footerButtons);


const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log("entry is intersecting");
            span.forEach((child) => {
                child.classList.remove('hidden');
            })
            paragraph.classList.remove('hidden');
            buttons.forEach((child) => {
                child.classList.remove('hidden');
            })
            setTimeout(() => {
                ideasContainerImage.classList.remove('ideas-hidden-rise');
            }, 500)
            heading.classList.remove('hidden');
            footerParagraphs.forEach((child) => {
                child.classList.remove('hidden');
            });
            footerButtons.forEach((child) => {
                child.classList.remove('hidden');
            });
        }
    })
}, {
    threshold: 0.1,
    // rootMargin: '-200px'
})

obs.observe(ideasContainerUpper);

