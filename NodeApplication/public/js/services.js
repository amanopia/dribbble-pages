const upperContentChildren = [...document.querySelector('.content-upper').children];

const upperContent = document.querySelector('.content-upper');

let serviceAnimationDelay = 0.1;

for(let i = 0; i<upperContentChildren.length; i++){
    // upperContentChildren[i].classList.add('hidden');
    upperContentChildren[i].style.transition = "all 0.4s ease";
    upperContentChildren[i].style.transitionDelay = serviceAnimationDelay + "s";
    serviceAnimationDelay += 0.1;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // entry.target.classList.toggle('hidden', entry.isIntersecting);
        // entry.target.classList.remove('hidden', entry.isIntersecting);
        // console.log(entry);
        // if(entry.isIntersecting){
        //     // entry.target.classList.toggle('hidden', false);
        //     // console.log("is intersecting");
         
        // } else {
        //     entry.target.classList.toggle('hidden', true);
        // }
        entry.target.classList.toggle('show', entry.isIntersecting);

    })
}, {
    threshold: 1,
    // root: document.querySelector('body')
    // rootMargin: '800px'
})

upperContentChildren.forEach((children) => {
    // console.log(children);
    observer.observe(children);
})