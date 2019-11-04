const navigation = document.querySelectorAll('nav button');

navigation.forEach(function(element, index) {

    const menus = document.querySelectorAll('.menu');

    element.addEventListener('click', function( ) {

        //Close Menu
        if(this.classList.contains('menu-open')) {
            navigation.forEach(function(item) {item.classList.remove('menu-open')})
            document.body.classList.remove('navigation-open')
            this.classList.remove('menu-open');
            return
        }

        //Open Menu
        menus.forEach(function(menu) {menu.classList.remove('menu-open')})
        navigation.forEach(function(item) {item.classList.remove('menu-open')})
        menus[index].classList.add('menu-open')
        document.body.classList.add('navigation-open')
        this.classList.add('menu-open');

    })
});
