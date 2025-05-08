document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        const city = hotspot.getAttribute('data-city');
        document.getElementById('popup-img').src = `images/${city}.jpg`;
        document.getElementById('popup').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});
