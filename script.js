document.getElementById('popup').style.display = 'none';
const cityTexts = {
    paris: "La pièce où l'on prépare les mets",
    londres: "Par là où vous êtes arrivé en premier",
    moscou: "Le petit coin stratégique pour méditer sur ses choix de vie",
    rome: "La grande salle voisine",
    stockholm: "L'endroit parfait pour jouer au Basket",
    madrid: "L'endroit où se tiennent les musiciens",
    athenes: "La bibliothèque secrète pour érudits solitaires",
    bucarest: "Bucarest abrite un code que seuls les plus rusés sauront lire.",
    dublin: "La remise aux tisanes poussiéreuses"
    prague: "Le palier suspendu entre ciel et terre"
    varsovie: "Le débarras où résonnent les objets oubliés"
    bucarest: "Le local technique envahi de silence"
    sofia: "Le placard fleuri qu’on n’ouvre jamais vraiment"
    vienne: "Le parquet ciré réservé aux pas feutrés"
    berlin: "Le vestiaire où s'accumulent les manteaux"
    kiev:"L’escalier au souffle glacial"
    
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