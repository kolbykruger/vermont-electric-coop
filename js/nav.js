const navigation = document.querySelectorAll('nav button');
const overlay = document.querySelector('.menu-overlay');
const menuContainer = document.querySelector('.menus')

navigation.forEach(function(element, index) {

    const menus = document.querySelectorAll('.menu');
    const actions = document.querySelectorAll('.menus a, .menus button');

    actions.forEach(function(action) {
        action.setAttribute('tabindex', '-1');
    })

    element.addEventListener('click', function( ) {

        //Close Menu
        if(this.classList.contains('menu-open')) {
            overlay.classList.remove('menu-open');
            menus.forEach(function(menu) {
                menu.classList.remove('menu-open');
                menu.setAttribute('aria-hidden', true);
                menu.setAttribute('aria-expanded', false);
                menu.setAttribute('tabindex', 0);
            })
            navigation.forEach(function(item) {
                item.classList.remove('menu-open');
            })
            actions.forEach(function(action) {
                action.setAttribute('tabindex', '-1');
            })
            document.body.classList.remove('navigation-open')
            this.classList.remove('menu-open');
            menuContainer.classList.add('menu-closing');
            return
        }

        //Open Menu
        overlay.classList.remove('menu-open')
        menus.forEach(function(menu) {
            menu.classList.remove('menu-open');
            menu.setAttribute('aria-hidden', true);
            menu.setAttribute('aria-expanded', false);
            menu.setAttribute('tabindex', '-1');
        })
        navigation.forEach(function(item) {
            item.classList.remove('menu-open');
        })
        actions.forEach(function(action) {
            action.setAttribute('tabindex', '-1');
        })
        menus[index].classList.add('menu-open');
        menus[index].setAttribute('aria-hidden', false);
        menus[index].setAttribute('aria-expanded', true);
        menus[index].setAttribute('tabindex', 0);
        let menuActions = menus[index].querySelectorAll('a, button');
        menuActions.forEach(function(action) {
            action.setAttribute('tabindex', 0);
        })
        document.body.classList.add('navigation-open')
        this.classList.add('menu-open');
        menuContainer.classList.remove('menu-closing');

    })
});

overlay.addEventListener('click', function() {
    overlay.classList.remove('menu-open');
    navigation.forEach(function(item) {
        item.classList.remove('menu-open');
    })
    document.body.classList.remove('navigation-open');
    this.classList.remove('menu-open');
    menuContainer.classList.add('menu-closing');
    return
})
