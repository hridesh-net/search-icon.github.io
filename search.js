const sIcon = document.querySelector('#search_btn');
let icon = false;
sIcon.addEventListener('click', () => {
    if (!icon) {
        sIcon.classList.add('see');
        icon = true;
    } else {
        sIcon.classList.remove('see');
        icon = false;
    }
})