const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

function toggleMenu (id, menu) {
    id.addEventListener('click', ()=> {
        menu.classList.toggle('hidden');
    })
}

toggleMenu(openMenu, menu);
toggleMenu(closeMenu, menu);