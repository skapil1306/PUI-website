window.onload = function() {
    
    //NAVIGATION BAR
    //selecting items
    const menuBtn = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBrand = document.querySelector('.menu-brand');
    const navItem = document.querySelectorAll('.nav-item');
    
    let showMenu = false;
    menuBtn.addEventListener('click', toggle);
    
    //toggling the menu. If showMenu flag is false, displays menu on click, otherwise hides it.
    function toggle() {
        if (!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBrand.classList.add('show');
            
            navItem.forEach(item => item.classList.add('show'));
            showMenu = true;
            console.log('showing');
        }
        else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBrand.classList.remove('show');
            
            navItem.forEach(item => item.classList.remove('show'));
            showMenu = false;
            console.log('not showing');
        }
    }
    
    //PROJECTS PAGE FILTER
    var Portfolio = {
        sort: function(items) {
            items.show();
            $('#portfolio-content').find('div.portfolio-item').not(items).fadeOut(500);
        },
        showAll: function(items) {
            items.fadeIn(500);
        },
        //sorting items based on their identifier
        doSort: function() {
            $('a', '#portfolio-sort').on('click', function() {
                var $a = $(this);
                if (!$a.is('#all')) {
                    var items = $('div[data-cat=' + $a.data('cat') + ']', '#portfolio-content');
                    Portfolio.sort(items);
                } 
                else {
                    Portfolio.showAll($('div.portfolio-item', '#portfolio-content'));
                }
            });
        }
    };

    Portfolio.doSort();
    
}