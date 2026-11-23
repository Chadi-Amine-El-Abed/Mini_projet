# Cap Bon Explorer

Mini-projet Web 1 — ISET Nabeul — année universitaire 2026-2027 (monôme)

**Auteur :** Chadi Amine El Abed
**Dépôt :** https://github.com/Chadi-Amine-El-Abed/Mini_projet

Cap Bon Explorer est un site web statique qui présente des activités culturelles, artisanales et naturelles de la péninsule du Cap Bon (Nabeul, Hammamet, Kélibia, Kerkouane). Le visiteur peut parcourir un catalogue, filtrer les offres, consulter l'agenda, simuler une réservation et contacter l'équipe.

> Projet pédagogique : les données, les tarifs et les réservations sont **fictifs**. Aucune donnée n'est envoyée ni enregistrée.

## Technologies

- HTML5 sémantique (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- CSS3 (fichier `css/style.css`) + **Bootstrap 5** (grille, navbar, cartes, carrousel, accordéon, modale, formulaires)
- JavaScript natif (aucune bibliothèque externe en dehors de Bootstrap)

## Pages

| Page | Fichier | Contenu |
|---|---|---|
| Accueil | `index.html` | Bannière, présentation, carrousel de 4 images, 4 activités à la une, arguments, appel à l'action |
| Activités | `activites.html` | Catalogue de 8 activités généré en JavaScript, recherche, filtre, tri, modale de détails |
| Agenda | `agenda.html` | Tableau des 6 événements de l'hiver 2026/2027 |
| Réservation | `reservation.html` | Simulateur avec calcul du total et de la remise groupe |
| Contact / FAQ | `contact.html` | Accordéon de 5 questions, formulaire de contact, coordonnées, plan |

## Fonctionnalités

### Catalogue (`activites.html`)
- Affichage dynamique des cartes à partir du tableau `ACTS` (`js/app.js`).
- Recherche par mot-clé sur le titre et le lieu.
- Filtre par catégorie : Toutes, Culture, Artisanat, Nature, Découverte.
- Tri par prix croissant ou décroissant (ou ordre du catalogue).
- Compteur de résultats et message si aucune activité ne correspond.
- Fenêtre modale (Bootstrap) avec la description complète de l'activité et un bouton « Réserver ».
- Ancres depuis l'accueil (`activites.html#A01`) qui font défiler jusqu'à la carte.

### Simulateur de réservation (`reservation.html`)
- Liste des activités remplie automatiquement depuis `ACTS`.
- Pré-sélection via l'URL (`reservation.html?act=A03`).
- Calcul en direct : tarif unitaire, sous-total, remise, total.
- **Remise groupe de 10 %** à partir de 4 participants (1 à 6 autorisés).
- Date minimale = aujourd'hui.
- Validation en JavaScript : activité, date, nombre de participants, nom, prénom, e-mail, téléphone, acceptation des conditions. Les champs invalides sont marqués et les messages d'erreur listés.
- Récapitulatif de la simulation affiché à l'écran (aucun paiement, aucune sauvegarde).

### Contact / FAQ (`contact.html`)
- Accordéon Bootstrap de 5 questions.
- Formulaire validé avec la validation native du navigateur et les classes Bootstrap (`was-validated`), puis message de confirmation simulé.

## Structure du projet

```
Mini_projet/
├── index.html
├── activites.html
├── agenda.html
├── reservation.html
├── contact.html
├── README.md
├── bootstrap/
│   ├── bootstrap.min.css
│   └── bootstrap.bundle.min.js
├── css/
│   └── style.css
├── js/
│   ├── app.js            # données ACTS + fonction trouverActivite()
│   ├── activites.js      # recherche, filtre, tri, cartes, modale
│   ├── reservation.js    # calcul, validation, récapitulatif
│   └── contact.js        # validation du formulaire de contact
├── images/               # 12 images (voir « Crédits des images »)
└── docs/
    └── rapport.pdf
```

## Lancer le projet

Aucune installation n'est nécessaire.

1. Cloner ou télécharger le dépôt :
   ```bash
   git clone https://github.com/Chadi-Amine-El-Abed/Mini_projet.git
   ```
2. Ouvrir `index.html` dans un navigateur (ou utiliser l'extension *Live Server* de VS Code).

## Accessibilité et responsive

- Attribut `lang="fr"`, titres hiérarchisés, textes alternatifs sur toutes les images.
- Libellés (`label`) associés à chaque champ de formulaire, `aria-live` sur le compteur de résultats, `role="alert"` / `role="status"` sur les messages.
- Navigation au clavier possible (menu, carrousel, accordéon, modale).
- Mise en page adaptative avec la grille Bootstrap (mobile, tablette, ordinateur) et un menu burger sur petit écran.

## Mentions

Projet réalisé dans un cadre strictement pédagogique à l'ISET Nabeul. Les tarifs, horaires, coordonnées et réservations affichés sont fictifs.
