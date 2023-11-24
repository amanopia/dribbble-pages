const header = document.querySelector('.hidden-container');

// header.style.transform = 'translateY(-7rem)';

header.style.height = "2rem";
header.style.width = "2rem";
header.style.top = "-5rem"
header.style.background = "#fe8c44";
header.style.transition = "all 0.6s cubic-bezier(.63,.12,.03,.98)"


setTimeout(() => {
    // header.style.transform = 'translateY(0rem)';
    header.style.top = "50%"
    
}, 1000)

setTimeout(() => {
    header.style.width = "100.5%";
    header.style.height = "100.9%";
    header.style.background = "#1e1d1d";
}, 1500)