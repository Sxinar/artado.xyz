document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var closeButton = document.getElementById('closeButton');
    var sideMenu = document.getElementById('sideMenu');

    menuButton.addEventListener('click', function() {
        sideMenu.style.width = '250px';
    });

    closeButton.addEventListener('click', function() {
        sideMenu.style.width = '0';
    });
});
