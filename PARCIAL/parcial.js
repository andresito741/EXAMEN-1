let lastScrollTop = 0;
const menu = document.getElementById('menu');

window.addEventListener('scroll', () => {
    const scrollTop = window.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // hacia abajo
        menu.classList.remove('hidden');
    } else {
        // hacia arriba
        menu.classList.add('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; //evitar valores negativos
});
