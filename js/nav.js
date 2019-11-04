const navigation = document.querySelectorAll('nav button');
const overlay = document.querySelector('.menu-overlay');

navigation.forEach(function(element, index) {

    const menus = document.querySelectorAll('.menu');

    element.addEventListener('click', function( ) {

        //Close Menu
        if(this.classList.contains('menu-open')) {
            overlay.classList.remove('menu-open')
            navigation.forEach(function(item) {item.classList.remove('menu-open')})
            document.body.classList.remove('navigation-open')
            this.classList.remove('menu-open');
            return
        }

        //Open Menu
        overlay.classList.remove('menu-open')
        menus.forEach(function(menu) {menu.classList.remove('menu-open')})
        navigation.forEach(function(item) {item.classList.remove('menu-open')})
        menus[index].classList.add('menu-open')
        document.body.classList.add('navigation-open')
        this.classList.add('menu-open');

    })
});

overlay.addEventListener('click', function() {
    overlay.classList.remove('menu-open')
    navigation.forEach(function(item) {item.classList.remove('menu-open')})
    document.body.classList.remove('navigation-open')
    this.classList.remove('menu-open');
    return
})
