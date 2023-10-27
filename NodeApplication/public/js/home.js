// const headerContent = document.querySelector('.header-content');

// const headerChildren = headerContent.children;
// headerChildren[0].classList.add('btn-active');

const dropdown = document.querySelector('.header-content');
const toggleDot = document.querySelector('.toggle-dot');


const head = document.querySelector('.headding');

toggleDot.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
    dropdown.children[0].classList.remove('btn-active');
    dropdown.classList.add('modified-styling');

})