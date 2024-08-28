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

    var pagesDropdown = document.getElementById('pagesDropdown');
    var socialsDropdown = document.getElementById('socialsDropdown');
    var pagesPopup = document.getElementById('pagesPopup');
    var socialsPopup = document.getElementById('socialsPopup');
    var pagesContainer = document.getElementById('pagesContainer');

    pagesDropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        pagesPopup.classList.toggle('show');
        pagesContainer.classList.toggle('active');
        socialsPopup.classList.remove('show');
        toggleIcon(pagesDropdown);
        resetIcon(socialsDropdown);
    });

    socialsDropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        socialsPopup.classList.toggle('show');
        pagesPopup.classList.remove('show');
        pagesContainer.classList.remove('active');
        toggleIcon(socialsDropdown);
        resetIcon(pagesDropdown);
    });

    // Sayfa herhangi bir yerine tıklandığında popup'ları kapat
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown-container')) {
            pagesPopup.classList.remove('show');
            socialsPopup.classList.remove('show');
            pagesContainer.classList.remove('active');
            resetIcon(pagesDropdown);
            resetIcon(socialsDropdown);
        }
    });

    function toggleIcon(dropdown) {
        var icon = dropdown.querySelector('.dropdown-icon');
        icon.style.transform = icon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    }

    function resetIcon(dropdown) {
        var icon = dropdown.querySelector('.dropdown-icon');
        icon.style.transform = 'rotate(0deg)';
    }
});