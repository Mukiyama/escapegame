document.getElementById('popup').style.display = 'none';
const cityTexts = {
    paris: "Paris est la capitale de la France. C’est ici que commence ta mission.",
    londres: "Londres t'attend avec une énigme bien gardée sous Big Ben.",
    moscou: "À Moscou, les secrets sont gelés depuis la guerre froide.",
    rome: "Rome cache ses indices dans les ruines antiques.",
    oslo: "Oslo est calme, mais pleine de mystères nordiques.",
    madrid: "Madrid t’offre un soleil brûlant et une énigme brûlante.",
    athenes: "Athènes, berceau des énigmes logiques.",
    bucarest: "Bucarest abrite un code que seuls les plus rusés sauront lire.",
    helsinki: "Helsinki te défie avec son froid et son calme apparent."
};

document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        const city = hotspot.getAttribute('data-city');
        const text = cityTexts[city] || "Aucune information disponible.";
        document.getElementById('popup-text').innerText = text;
        document.getElementById('popup').style.display = 'flex'; // ou block si tu préfères
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});
// Ferme la popup si on clique en dehors de la boîte de contenu
document.getElementById('popup').addEventListener('click', (e) => {
    const content = document.querySelector('.popup-content');
    if (!content.contains(e.target)) {
        document.getElementById('popup').style.display = 'none';
    }
});