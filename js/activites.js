const champRecherche = document.getElementById("q");
const listeCategorie = document.getElementById("cat");
const listeTri = document.getElementById("tri");
const compteur = document.getElementById("cpt");
const messageVide = document.getElementById("vide");
const zoneCartes = document.getElementById("liste-activites");
const formFiltre = document.getElementById("fFiltre");
const boutonReset = document.getElementById("rst");
function creerCarte(a) {
  let html = "";
  html += '<div class="col-12 col-md-6 col-lg-4 col-xl-3 item">';
  html += '<article class="card h-100" id="' + a.id + '">';
  html += '<img src="' + a.img + '" class="card-img-top" alt="' + a.alt + '">';
  html += '<div class="card-body d-flex flex-column">';
  html += '<h3>' + a.titre + '</h3>';
  html += '<p><span class="categorie">' + a.cat + '</span></p>';
  html += '<p class="accroche">' + a.accroche + '</p>';
  html += '<ul class="list-unstyled small mb-3">';
  html += '<li>Lieu : ' + a.lieu + '</li>';
  html += '<li>Durée : ' + a.duree + '</li>';
  html += '<li class="prix">' + a.prix + ' TND / personne</li>';
  html += '</ul>';
  html += '<div class="mt-auto d-grid gap-2">';
  html += '<button type="button" class="btn btn-outline-primary btn-det" data-id="' + a.id + '" data-bs-toggle="modal" data-bs-target="#modalDet">Voir les détails</button>';
  html += '<a href="reservation.html?act=' + a.id + '" class="btn btn-primary">Réserver</a>';
  html += '</div>';
  html += '</div>';
  html += '</article>';
  html += '</div>';
  return html;
}
function afficherDetails(id) {
  const a = trouverActivite(id);
  document.getElementById("modTitle").textContent = a.id + " — " + a.titre;

  let html = "";
  html += '<img src="' + a.img + '" class="img-fluid rounded mb-3" alt="' + a.alt + '">';
  html += '<p><strong>Lieu :</strong> ' + a.lieu + ' | <strong>Durée :</strong> ' + a.duree + ' | <strong>Tarif :</strong> ' + a.prix + ' TND / personne</p>';
  html += '<p>' + a.desc + '</p>';
  document.getElementById("modBody").innerHTML = html;

  document.getElementById("modReserver").href = "reservation.html?act=" + a.id;
}
function afficher() {
  const texte = champRecherche.value.trim().toLowerCase();
  const categorie = listeCategorie.value;
  const resultat = [];

  for (let i = 0; i < ACTS.length; i++) {
    const a = ACTS[i];
    const bonneCategorie = categorie === "Toutes" || a.cat === categorie;
    const dansTitre = a.titre.toLowerCase().indexOf(texte) !== -1;
    const dansLieu = a.lieu.toLowerCase().indexOf(texte) !== -1;
    if (bonneCategorie && (dansTitre || dansLieu)) {
      resultat.push(a);
    }
  }

  if (listeTri.value === "asc") {
    resultat.sort(function (x, y) {
      return x.prix - y.prix;
    });
  }
  if (listeTri.value === "desc") {
    resultat.sort(function (x, y) {
      return y.prix - x.prix;
    });
  }

  let html = "";
  for (let i = 0; i < resultat.length; i++) {
    html += creerCarte(resultat[i]);
  }
  zoneCartes.innerHTML = html;

  compteur.textContent = resultat.length;
  if (resultat.length === 0) {
    messageVide.classList.remove("d-none");
  } else {
    messageVide.classList.add("d-none");
  }
  const boutons = zoneCartes.querySelectorAll(".btn-det");
  for (let i = 0; i < boutons.length; i++) {
    boutons[i].addEventListener("click", function () {
      afficherDetails(this.getAttribute("data-id"));
    });
  }
}
champRecherche.addEventListener("input", afficher);
listeCategorie.addEventListener("change", afficher);
listeTri.addEventListener("change", afficher);
formFiltre.addEventListener("submit", function (e) {
  e.preventDefault();
});
boutonReset.addEventListener("click", function () {
  champRecherche.value = "";
  listeCategorie.value = "Toutes";
  listeTri.value = "def";
  afficher();
});
afficher();
if (location.hash !== "") {
  const carte = document.getElementById(location.hash.substring(1));
  if (carte) {
    carte.scrollIntoView();
  }
}
