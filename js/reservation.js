const formulaire = document.getElementById("fRes");
const choixActivite = document.getElementById("act");
const champDate = document.getElementById("dt");
const champNb = document.getElementById("nb");
const boxErreur = document.getElementById("err");
const boxSucces = document.getElementById("rMsg");
for (let i = 0; i < ACTS.length; i++) {
  const a = ACTS[i];
  const option = document.createElement("option");
  option.value = a.id;
  option.textContent = a.id + " — " + a.titre + " — " + a.lieu + " — " + a.prix + " TND";
  choixActivite.appendChild(option);
}
function dateAujourdhui() {
  const d = new Date();
  let mois = d.getMonth() + 1;
  let jour = d.getDate();
  if (mois < 10) {
    mois = "0" + mois;
  }
  if (jour < 10) {
    jour = "0" + jour;
  }
  return d.getFullYear() + "-" + mois + "-" + jour;
}
champDate.min = dateAujourdhui();
const params = new URLSearchParams(location.search);
const idUrl = params.get("act");
if (idUrl !== null && trouverActivite(idUrl) !== null) {
  choixActivite.value = idUrl;
}
function dateFrancaise(date) {
  if (date === "") {
    return "—";
  }
  const morceaux = date.split("-");
  return morceaux[2] + "/" + morceaux[1] + "/" + morceaux[0];
}
function arrondir(nombre) {
  return Math.round(nombre * 100) / 100;
}
function calculer() {
  const a = trouverActivite(choixActivite.value);
  let n = parseInt(champNb.value);
  if (isNaN(n)) {
    n = 0;
  }
  let prixUnitaire = 0;
  if (a !== null) {
    prixUnitaire = a.prix;
  }
  const sousTotal = prixUnitaire * n;
  let remise = 0;
  if (n >= 4) {
    remise = sousTotal / 10;
  }
  const total = sousTotal - remise;
  if (a !== null) {
    document.getElementById("rAct").textContent = a.id + " — " + a.titre;
  } else {
    document.getElementById("rAct").textContent = "Aucune";
  }
  document.getElementById("rDt").textContent = dateFrancaise(champDate.value);
  document.getElementById("rPu").textContent = arrondir(prixUnitaire);
  document.getElementById("rNb").textContent = n;
  document.getElementById("rSub").textContent = arrondir(sousTotal);
  document.getElementById("rRem").textContent = arrondir(remise);
  document.getElementById("rTot").textContent = arrondir(total);
}
function marquer(champ, valide) {
  if (valide) {
    champ.classList.remove("is-invalid");
  } else {
    champ.classList.add("is-invalid");
  }
}
function valider(e) {
  e.preventDefault();
  const erreurs = [];
  const activiteOk = choixActivite.value !== "";
  marquer(choixActivite, activiteOk);
  if (!activiteOk) {
    erreurs.push("Choisissez une activité.");
  }
  const dateOk = champDate.value !== "" && champDate.value >= dateAujourdhui();
  marquer(champDate, dateOk);
  if (!dateOk) {
    erreurs.push("Choisissez une date valide (aujourd’hui ou plus tard).");
  }
  const n = parseInt(champNb.value);
  const nbOk = !isNaN(n) && n >= 1 && n <= 6;
  marquer(champNb, nbOk);
  if (!nbOk) {
    erreurs.push("Le nombre de participants doit être compris entre 1 et 6.");
  }
  const nom = document.getElementById("nom");
  const prenom = document.getElementById("pre");
  const nomOk = nom.value.trim() !== "";
  const prenomOk = prenom.value.trim() !== "";
  marquer(nom, nomOk);
  marquer(prenom, prenomOk);
  if (!nomOk) {
    erreurs.push("Le nom est obligatoire.");
  }
  if (!prenomOk) {
    erreurs.push("Le prénom est obligatoire.");
  }
  const mail = document.getElementById("mail");
  const texteMail = mail.value.trim();
  const arobase = texteMail.indexOf("@");
  const dernierPoint = texteMail.lastIndexOf(".");
  const mailOk = arobase > 0 && dernierPoint > arobase + 1 && dernierPoint < texteMail.length - 1;
  marquer(mail, mailOk);
  if (!mailOk) {
    erreurs.push("Saisissez une adresse e-mail valide (exemple@domaine.tn).");
  }
  const tel = document.getElementById("tel");
  const telOk = tel.value.trim() !== "";
  marquer(tel, telOk);
  if (!telOk) {
    erreurs.push("Le numéro de téléphone est obligatoire.");
  }
  const conditions = document.getElementById("ok");
  marquer(conditions, conditions.checked);
  if (!conditions.checked) {
    erreurs.push("Acceptez les conditions de simulation pour continuer.");
  }
  if (erreurs.length > 0) {
    boxErreur.innerHTML = erreurs.join("<br>");
    boxErreur.classList.remove("d-none");
    boxSucces.classList.add("d-none");
    return;
  }
  boxErreur.classList.add("d-none");
  calculer();
  const a = trouverActivite(choixActivite.value);
  const type = document.querySelector('input[name="typeParticipation"]:checked').value;
  const total = document.getElementById("rTot").textContent;
  let html = "";
  html += '<p class="fw-bold mb-1">Récapitulatif de la simulation</p>';
  html += "<ul>";
  html += "<li>Activité : " + a.id + " — " + a.titre + "</li>";
  html += "<li>Date : " + dateFrancaise(champDate.value) + "</li>";
  html += "<li>Participants : " + n + " (" + type + ")</li>";
  html += "<li>Total : " + total + " TND</li>";
  html += "</ul>";
  html += '<p class="mb-0">Simulation enregistrée localement à l’écran : aucune réservation réelle n’a été effectuée.</p>';
  boxSucces.innerHTML = html;
  boxSucces.classList.remove("d-none");
}
function reinitialiser() {
  setTimeout(function () {
    boxErreur.classList.add("d-none");
    boxSucces.classList.add("d-none");
    const champsFaux = formulaire.querySelectorAll(".is-invalid");
    for (let i = 0; i < champsFaux.length; i++) {
      champsFaux[i].classList.remove("is-invalid");
    }
    calculer();
  }, 0);
}
choixActivite.addEventListener("change", calculer);
champNb.addEventListener("input", calculer);
champDate.addEventListener("input", calculer);
document.getElementById("btnCalc").addEventListener("click", calculer);
formulaire.addEventListener("submit", valider);
formulaire.addEventListener("reset", reinitialiser);
formulaire.addEventListener("input", function () {
  boxSucces.classList.add("d-none");
});
calculer();