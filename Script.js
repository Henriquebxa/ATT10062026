window.addEventListener('scroll', function () {
    const header = document.querySelector('.Cima');
    const isDark = document.body.classList.contains('dark');

    if (window.scrollY > 600) {
        header.style.backgroundColor = isDark ? '#4a3b32' : '#4a3b32';
        header.style.boxShadow = '0 2px 10px #4a3b32';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
    }
});