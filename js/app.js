const ACTS = [
  {
    id: "A01", titre: "Découverte de la médina", lieu: "Nabeul", cat: "Culture", duree: "2 h", prix: 20,
    img: "images/medina-nabeul.jpg",
    alt: "Monument de céramique couronné d’oranges, emblème de Nabeul",
    accroche: "Ruelles, souks et façades blanches au cœur de Nabeul.",
    desc: "Cette visite guidée de deux heures vous conduit dans la médina de Nabeul, entre boutiques d’artisans, étals d’épices et placettes ombragées. Votre guide raconte l’histoire du quartier et la place du commerce dans la vie locale. Vous passez devant des ateliers où la céramique et le cuivre sont encore travaillés à la main. Prévoyez des chaussures confortables, car certaines ruelles sont pavées et en pente."
  },
  {
    id: "A02", titre: "Atelier d’initiation à la poterie", lieu: "Nabeul", cat: "Artisanat", duree: "1 h 30", prix: 35,
    img: "images/poterie-nabeul.jpg",
    alt: "Artisan potier façonnant l’argile sur un tour à Nabeul",
    accroche: "Tournez votre première pièce d’argile avec un maître potier.",
    desc: "Dans un atelier traditionnel de Nabeul, un artisan vous montre les gestes de base : centrer l’argile, monter les parois et lisser la forme sur le tour. Vous réalisez votre propre petite pièce pendant la séance. Le potier explique ensuite comment les objets sont séchés, émaillés puis cuits. Le matériel est fourni ; portez simplement des vêtements qui peuvent se salir."
  },
  {
    id: "A03", titre: "Parcours découverte de Kerkouane", lieu: "Kerkouane", cat: "Culture", duree: "2 h 30", prix: 30,
    img: "images/kerkouane.jpg",
    alt: "Vestiges de la cité punique de Kerkouane face à la mer",
    accroche: "Une cité punique ouverte sur la Méditerranée.",
    desc: "Kerkouane est un site archéologique situé face à la mer et inscrit au patrimoine mondial de l’UNESCO. Un guide vous accompagne parmi les vestiges de maisons, de rues et de salles d’eau qui montrent la vie quotidienne des Puniques. Vous découvrez pourquoi la ville a été abandonnée avant de renaître en site de visite. La sortie se déroule surtout en plein air : pensez au chapeau et à l’eau."
  },
  {
    id: "A04", titre: "Randonnée découverte", lieu: "Djebel Abderrahmane", cat: "Nature", duree: "3 h", prix: 25,
    img: "images/djebel-abderrahmane.jpg",
    alt: "Chapelle blanche accrochée à la falaise du Djebel Abderrahmane",
    accroche: "Un sentier sur les hauteurs du Cap Bon.",
    desc: "Cette randonnée de trois heures monte sur les pentes du Djebel Abderrahmane, au-dessus de la plaine du Cap Bon. Le sentier traverse un maquis de buissons et de pins, avec plusieurs points de vue sur la campagne et la mer. Votre guide s’arrête pour présenter la végétation, les oiseaux et les petits sanctuaires du massif. Le niveau convient aux personnes habituées à marcher ; des chaussures fermées et une bouteille d’eau sont indispensables."
  },
  {
    id: "A05", titre: "Circuit du littoral", lieu: "Kélibia", cat: "Nature", duree: "3 h", prix: 40,
    img: "images/littoral-kelibia.jpg",
    alt: "Fort historique de Kélibia dominant la côte",
    accroche: "Plages de sable fin et criques claires autour de Kélibia.",
    desc: "Ce circuit de trois heures suit le littoral de Kélibia, entre longues plages de sable fin et petites criques à l’eau limpide. Le parcours passe au pied du fort qui domine la ville et le port. Des pauses photo sont prévues aux meilleurs points de vue. Le guide partage quelques repères sur la pêche locale et l’histoire de la forteresse. Maillot et serviette sont conseillés si la météo s’y prête."
  },
  {
    id: "A06", titre: "Peinture sur céramique", lieu: "Nabeul", cat: "Artisanat", duree: "2 h", prix: 25,
    img: "images/peinture-ceramique.jpg",
    alt: "Panneau de carreaux de céramique peints à la main",
    accroche: "Décorez une pièce de céramique à votre goût.",
    desc: "Pendant deux heures, vous peignez des motifs sur une pièce de céramique déjà préparée, avec les couleurs vives typiques de Nabeul. Un artisan présente les décors traditionnels : fleurs, étoiles et frises géométriques. Vous pouvez suivre un modèle ou inventer votre propre dessin. La pièce est ensuite cuite par l’atelier avant de vous être remise."
  },
  {
    id: "A07", titre: "Découverte d’un marché local", lieu: "Nabeul", cat: "Découverte", duree: "1 h 30", prix: 15,
    img: "images/marche-local.jpg",
    alt: "Ruelle commerçante d’un souk avec des étoffes empilées",
    accroche: "Épices, olives et agrumes au rythme du souk.",
    desc: "Cette sortie d’une heure trente vous emmène dans un marché local de Nabeul, à l’heure où les étals sont les plus animés. Vous goûtez quelques produits du terroir et apprenez à reconnaître les épices, les olives et les agrumes de la région. Le guide vous aide à échanger avec les commerçants et explique l’usage de chaque produit en cuisine. C’est une activité simple et conviviale, idéale en famille."
  },
  {
    id: "A08", titre: "Promenade photographique", lieu: "Hammamet", cat: "Découverte", duree: "2 h", prix: 30,
    img: "images/promenade-photographique.webp",
    alt: "Plage de sable et barques de pêche devant une ville blanche",
    accroche: "Cadrez les ruelles blanches et la lumière du matin.",
    desc: "Cette promenade de deux heures traverse la médina de Hammamet, ses remparts et son bord de mer. Un guide vous conseille sur le cadrage, la lumière et les meilleurs angles pour vos photos. Aucun matériel particulier n’est nécessaire : un téléphone suffit. Le départ tôt le matin offre une lumière douce et des ruelles encore calmes."
  }
];
function trouverActivite(id) {
  for (let i = 0; i < ACTS.length; i++) {
    if (ACTS[i].id === id) {
      return ACTS[i];
    }
  }
  return null;
}