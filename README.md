# Cap Bon Explorer

Mini-projet Web — ISET Nabeul, Développement Web côté client (2026–2027).
Portail touristique interactif et responsive : HTML5, CSS3, JavaScript natif et Bootstrap 5.3.6 (copie locale).
Projet pédagogique : données et tarifs fictifs, aucune donnée n’est envoyée à un serveur.

## Lancer le site
Ouvrir `index.html` dans un navigateur moderne. Aucun serveur ni compte n’est nécessaire.

## Arborescence
```
cap-bon-explorer/
  index.html  activites.html  agenda.html  reservation.html  contact.html
  css/style.css            feuille de style personnelle
  js/app.js                données ACTS (8 activités) + page active de la navbar
  js/activites.js          cartes, recherche + filtre + tri + compteur, modal
  js/reservation.js        calcul, remise, validation, récapitulatif, réinitialisation
  js/contact.js            validation et confirmation simulée du formulaire de contact
  bootstrap/               Bootstrap 5.3.6 (CSS + bundle JS)
  images/                  logo, bannière, images des activités, plan de Nabeul
  docs/rapport.pdf         rapport 
```

## Fonctionnalités JavaScript
- Catalogue : les 8 cartes sont générées depuis le tableau `ACTS` ; recherche instantanée (titre et lieu) combinée au filtre de catégorie ; tri par prix ; compteur ; message « Aucune activité trouvée ».
- Modal : une seule fenêtre Bootstrap remplie avec l’activité choisie.
- Réservation : liste d’activités issue de `ACTS`, présélection par `?act=A02`, sous-total / remise 10 % dès 4 personnes / total, contrôles (activité, date non passée, 1 à 6 participants, nom, prénom, e-mail, téléphone, consentement), récapitulatif à l’écran, réinitialisation.
- Contact : validation HTML5 + Bootstrap, accordion pour la FAQ, confirmation simulée.

## Tests T01–T12
| Test | Résultat |
|---|---|
| T01 à T12 |

## Sources des images
À compléter avec l’auteur, la source et la licence de chaque image (logo, bannière, 8 activités, plan de Nabeul, galerie).
