const popupMenu = document.getElementById('popup-menu');
let isDragging = false;
let startX;

document.getElementById('hamburger').addEventListener('click', function() {
    popupMenu.classList.toggle('show');
});

popupMenu.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
});

popupMenu.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    const touchX = e.touches[0].clientX;
    const distance = touchX - startX;

    if (distance > 50) {  // Eğer sağa kaydırma 50 pikselden fazlaysa
        popupMenu.style.transform = `translateX(${distance}px)`;
    }
});

popupMenu.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    isDragging = false;
    const touchX = e.changedTouches[0].clientX;
    const distance = touchX - startX;

    if (distance > 100) {  // Sağa kaydırma 100 pikselden fazlaysa menüyü kapat
        popupMenu.classList.remove('show');
    } else {
        popupMenu.style.transform = 'translateX(0)';
    }
});