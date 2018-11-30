window.onload = function() {
    
    //selecting items
    const menuBtn = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBrand = document.querySelector('.menu-brand');
    const navItem = document.querySelector('.nav-item');
    
    let showMenu = false;
    menuBtn.addEventListener('click', toggle);
    
    function toggle() {
        if (!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBrand.classList.add('show');
            
            navItem.forEach(item => item.classList.add('show'));
            showMenu = true;
        }
        else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBrand.classList.remove('show');
            
            navItem.forEach(item => item.classList.remove('show'));
            showMenu = false;
        }
    }
    
}