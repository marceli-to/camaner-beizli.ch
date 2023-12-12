(function () {

  const selectors = {
    menu: '[data-menu]',
    menuParent: '[data-menu-parent]',
  };

  const init = () => {
    // if a user hovers over a menuParent item, hide all ul uls that are in the menu except for the one that is a sibling of the menuParent item
    document.querySelectorAll(selectors.menuParent).forEach((menuParent) => {
      menuParent.addEventListener('mouseenter', (e) => {
        const menu = e.target.closest(selectors.menu);
        menu.querySelectorAll('ul ul').forEach((ul) => {
          ul.classList.add('hidden');
        });
        if (menuParent.nextElementSibling) {
          menuParent.nextElementSibling.classList.remove('hidden');
        }
      });

      // show all ul uls when the user leaves the menu
      menuParent.addEventListener('mouseleave', (e) => {
        const menu = e.target.closest(selectors.menu);
        menu.querySelectorAll('ul ul').forEach((ul) => {
          ul.classList.remove('hidden');
        });
      });
    });

  };

  init();
  
})();