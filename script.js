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

    // Dropdown işlevselliği için
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('active');
            var icon = this.querySelector('.dropdown-icon');
            icon.textContent = this.classList.contains('active') ? '▲' : '▼';
        });
    });
});


