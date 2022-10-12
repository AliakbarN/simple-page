function removeMenu () {
    document.getElementById('navbarMenu').classList.add('collapse');
    document.body.removeEventListener('click', removeMenu);
}

document.getElementById('btn-nav').addEventListener('click', () => {
    document.getElementById('navbarMenu').classList.toggle('collapse');

    setTimeout(() => {
        document.body.addEventListener('click', removeMenu);
    }, 100)
})