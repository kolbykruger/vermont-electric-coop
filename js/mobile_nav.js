var mobileNav = document.querySelector('.mobile_nav');
var mobileNavicon = document.querySelectorAll('.navicon');
var mobileNavOverlay = document.querySelector('.mobile_nav_overlay');
var mobileCloser = document.querySelector('.mobile_closer');

//Add limited height to to mobile nav ul
mobileNav.querySelector('ul.top').style.maxHeight = 'calc(100vh - '+mobileNav.querySelector('.mobile-icons').scrollHeight+'px)';

//Mobile Navicons
for (i = 0; i < mobileNavicon.length; i++) {
    mobileNavicon[i].addEventListener('click', function() {
        if (document.body.classList.contains('menu-open')) {
            mobileNav.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('menu-open');
        return;
        }
        mobileNav.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
    });
}

//Mobile Closer (button at the bottom of the mobile menu)
mobileCloser.addEventListener('click', function() {
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
});

//Mobile Overlay (if menu is not width 100%)
mobileNavOverlay.addEventListener('click', function() {
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
});

//Mobile nav triggers
var mobileNavTriggers = document.querySelectorAll('.mobile_nav .trigger button');
for (i = 0; i < mobileNavTriggers.length; i++) {
    mobileNavTriggers[i].addEventListener('click', function() {
        var parent = this.parentElement;
        var drop = this.nextElementSibling;
        var icon = this.children[0];

        if (parent.classList.contains('open')) {
            icon.setAttribute('class', 'fal fa-plus');
            parent.classList.remove('open');
            drop.style.maxHeight = null;
            drop.setAttribute('aria-hidden', 'true');
            drop.setAttribute('aria-expanded', 'false');
            return;
        }
        icon.setAttribute('class', 'fal fa-minus');
        parent.classList.add('open');
        drop.style.maxHeight = drop.scrollHeight+'px';
        drop.setAttribute('aria-hidden', 'false');
        drop.setAttribute('aria-expanded', 'true');
    });
}
