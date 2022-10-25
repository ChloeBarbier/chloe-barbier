import { tools } from './tools';
import { experienceIds, projectsIds }  from "../enums/Ids";

export const allProjects = {
  portfolio: { id: 0, idRef: projectsIds.portfolio, label: "mon portfolio", name: "portfolio" },
  laBam: { id: 1, idRef: projectsIds.labam, label: "La boîte à mots", name: "laBam" },
  desking360: { id: 2, idRef: projectsIds.desking, label: "Desking 360", name: "desking360" },
  uikit: { id: 3, idRef: projectsIds.uikit, label: "Ui-kit", name: "uikit" },
  drawing: { id: 4, idRef: projectsIds.drawing, label: "Drawing", name: "drawing" },
  solargraf: { id: 5, idRef: projectsIds.solargraf, label: "Solargraf", name: "solargraf" },
  roofgraf: { id: 6, idRef: projectsIds.roofgraf, label: "Roofgraf", name: "roofgraf" },
  // drawMyRoof: { id: 7, idRef: null, label: "Draw my roof", name: "drawMyRoof" },
  // algoEfficiencia: { id: 8, idRef: null, label: "Algorithme de prévision énergétique", name: "algoEfficiencia" },
  mangalHostel: { id: 9, idRef: projectsIds.mangal, label: "Mangal Hostel", name: "mangalHostel" },
  dealsWidget: { id: 10, idRef: projectsIds.widgets, label: "Deals Widget", name: "dealsWidget" },
  offerSheetWidget: { id: 11, idRef: projectsIds.widgets, label: "Offer Sheet Widget", name: "offerSheetWidget" },
  tradeInWidget: { id: 12, idRef: projectsIds.widgets, label: "Trade-in Widget", name: "tradeInWidget" },
  quotesWidget: { id: 13, idRef: projectsIds.widgets, label: "Quotes Widget", name: "quotesWidget" },
  creditApplicationWidget: { id: 14, idRef: projectsIds.widgets, label: "Credit Application Widget", name: "creditApplicationWidget" },
  contactWidget: { id: 15, idRef: projectsIds.widgets, label: "Contact Widget", name: "contactWidget" },
};
export const projects = [
    { 
      id: projectsIds.desking,
      date: "2019 - 2021",
      thumbnail: 'desking.png', 
      photo: 'desking.png',  
      name: "Desking 360",
      text: 'Application web Next.js qui est un gestionnaire de soumissions d\'achat de véhicules en ligne',
      related: 'Solutions Medias 360',
      relatedId: experienceIds.sm360,
      to: "https://360.agency/en/solutions-for-dealership/customer-relationship-management/desking-360-sales-tools/",
      website: "desking-360-sales-tools",
      videos: [
        {title: "Vidéo", link: "https://www.youtube.com/watch?v=0rXpDsIA-xA&list=PLzJmUF3j0ffr8kkfu9KCtFBI-FcEjhs0X&index=10"}
      ],
      repo: null,
      tools: [
        tools.javascript, 
        tools.nextjs, 
        tools.reactjs,
        tools.redux,
        tools.axios,
        tools.jest,
      ],
      role: "Développement de nouvelles fonctionnalités et maintien de l'application Desking360 en équipe Agile.",
      description:
        'Desking360 est un gestionnaire de soumissions innovant d\'achat de véhicules en ligne, du choix de la marque et du modèle, jusqu\'à la livraison à domicile.'
        +'\nCette application est utilisée par les concessionnaires automobiles sur le marché nord-américain.'
        +'\nLes clients peuvent accéder aux véhicules enregistrés dans leur « garage virtuel », et valider la transaction en ligne.'
        +'\nL\'application est faite avec Next.js, elle est embarquée dans le CRM (application web CRM360 en Angular)',
    },
    { 
      id: projectsIds.widgets,
      date: "2019 - 2021",
      thumbnail: 'widgets.png', 
      photo: 'widgets.png', 
      name: "Widgets 360", 
      text: "Six différents modules en React.js implémentées dans les applications web de Solutions Medias 360",
      related: 'Solutions Medias 360',
      relatedId: experienceIds.sm360,
      to: "https://360.agency/en/solutions-for-dealership/customer-relationship-management/desking-360-sales-tools/",
      website: "desking-360-sales-tools",
      repo: null,
      tools: [
        tools.javascript,
        tools.reactjs,
        tools.scss,
        tools.devops,
        tools.hooks,
        tools.nodejs,
        tools.agile,
        tools.axios,
      ],
      role: 'Conception, développement, implémentation et déploiement de 6 nouveaux modules indépendants.',
      description: 
        `Les applications on été développés en React.js à partir de templates, et sont embarquées dans Desking360 et CRM360.
        \nL'architecture de ces widgets a été développée à partir du boilerplate Razzle (application SSR).`,
      subprojects: 
        '► Quotes widget: listing des soumissions, tri, filtres, recherche.'
        +'\n► Credit App. widget: formulaire d\'application pour une demande de crédit banquaire.'
        +'\n► Deals widget: listing des ventes, tri, filtres, recherche.'
        +'\n► Offer Sheet widget: récapitulatif de l\'offre, prêt à l\'impression.'
        +'\n► Trade-in widget: intégration d\'un véhicule d\'échange avec valeur de reprise déduite.'
        +'\n► Contact widget: listing de tous les contacts et fiche détaillée par contact.',
    },
    { 
      id: projectsIds.uikit, 
      date: "2019 - 2021",
      thumbnail: 'uikit.png', 
      photo: 'uikit.png', 
      name: "Ui-kit", 
      text: "Module en React.js d'outils front-end pour la création d'une identité graphique",
      related: 'Solutions Medias 360',
      relatedId: experienceIds.sm360,
      to: "https://atomicdesign.bradfrost.com/table-of-contents/",
      website: "atomicdesign.bradfrost.com",
      repo: null,
      tools: [
        tools.atomicDesign,
        tools.javascript,
        tools.reactjs,
        tools.hooks,
        tools.scss,
        tools.agile,
      ],
      role: 'Développement et maintien de nouveaux composants UI. Développement de nouveaux designs et création de nouvelles maquettes en vue du développement des nouveaux widgets pour les applications Desking360 et CRM360.',
      description: 
        'Le ui-kit est une librairie front-end suivant les principes du Atomic Design. Il a été développé pour un usage interne afin de standardiser les composants et le design au sein des applications et widgets de Solutions Médias 360.'
        +'Il permet de créer une identité graphique cohérente, évolutive et maintenable.'
        
    },
    { 
      id: projectsIds.drawing, 
      date: "2018 - 2019",
      thumbnail: 'drawing.png', 
      photo: 'drawing.png', 
      name: "Drawing", 
      text: "Module de dessin intelligent en javascript pour les applications web Solargraf et Roofgraf.",
      related: 'Sofdesk',
      relatedId: experienceIds.sofdesk,
      to: "https://www.solargraf.com/",
      website: "www.solargraf.com",
      repo: null,
      videos: [
        {title: "Drawing Roofgraf", link: "https://youtube.com/clip/Ugkxtoky8DkK05KJ4GMBPOykHJ1Eyp2J3Hi9"},
        {title: "Drawing Solargraf", link: "https://youtube.com/clip/UgkxkXHnJm1wweeC39ueLkgYrYrD8Kyi2U1W"}
      ],
      tools: [
        tools.javascript,
        tools.paperjs,
        tools.nodejs,
        tools.htmlcss,
        tools.algorithmic,
        tools.RD,
        tools.geometry,
        tools.agile,
      ],
      role: 
        'En charge du développement et du maintien de ce module:'
        +' \n► Mathématiques, géométrie dans l\'espace, algorithmique.'
        +' \n► Recherche et développement de fonctionnalités, correction de bugs.'
        +' \n► Implémentation des nouvelles versions au sein des applications.',
      description: 
        'Le Drawing est le module de dessin intelligent des applications web de Sofdesk.'
        +'\nSon algorithme est utile au cœur de l\'estimation des mesures de toit et de l\'installation virtuelle de panneaux solaires.'
        +'\nIl a été dévelopé avec Paper.js qui est le couteau suisse du graphisme vectoriel.'
    },
    { 
      id: projectsIds.roofgraf,
      date: "2018 - 2019",
      thumbnail: 'roofgraf.png', 
      photo: 'roofgraf.png', 
      name: "Roofgraf",
      text: "Application web en React.js pour la mesure aérienne 3D précise de toitures",
      related: 'Sofdesk',
      relatedId: experienceIds.sofdesk,
      to: "https://www.roofgraf.com/",
      website: "www.roofgraf.com",
      repo: null,
      tools: [
        tools.javascript,
        tools.reactjs,
        tools.materialUi
      ],
      videos: [
        {title: "Vidéo", link: "https://www.youtube.com/watch?v=JhKEUtrvgPA"}
      ],
      role: "Intégration continue du module de dessin et de ses nouvelles fonctionnalités au sein de Roofgraf. Participation également au développement front-end de l'application Roofgraf",
      description: 
        `Roofgraf est une application web qui permet aux entreprises de couvreurs de toits d'obtenir des mesures aériennes 3D précises et de créer des devis en quelques secondes.
        \nLe module de dessin (cf. "drawing") est un outil front-end intégré à l'application qui permet d'obtenir des mesures précises des toitures,
        et de créer, construire et définir son projet.`
    },
    { 
      id: projectsIds.solargraf,
      date: "2018 - 2019",
      thumbnail: 'solargraf.png', 
      photo: 'solargraf.png',
      name: "Solargraf", 
      text: "Application web en React.js pour l'installation de panneaux solaires sur les toitures",
      related: 'Sofdesk',
      relatedId: experienceIds.sofdesk,
      to: "https://www.solargraf.com/",
      website: "www.solargraf.com",
      videos: [
        {title: "Vidéo", link: "https://www.youtube.com/watch?v=N5b4H6yQXWE"}
      ],
      repo: null,
      tools: [
        tools.javascript,
        tools.reactjs,
      ],
      role: "Intégration continue du module de dessin et de ses nouvelles fonctionnalités au sein de Solargraf.",
      description: 
        'Solargraf est une application web accélératrice de ventes SaaS pour les installateurs de panneaux solaires aux États-Unis et au Canada.'
        +'\nLes utilisateurs gèrent leurs projets, créent et envoient des devis, développent leur clientèle et leurs ventes.'
        +'\nLe module de dessin (cf. "drawing") est un outil front-end intégré à l\'application qui permet d\'installer virtuellement des pannaux solaires,'
        +' afin d\'analyser, calculer et ainsi créer et définir son projet.'
    },
    { 
      id: projectsIds.labam,
      date: "2021",
      thumbnail: 'labam.png', 
      photo: 'labam.png', 
      name: "La boîte à mots", 
      text: "Application web en React.js qui invente des mots inexistants à l'infini", 
      related: 'projet personnel',
      // relatedId: experienceIds.freelance22,
      to: "https://la-bam-79775.firebaseapp.com/",
      website: "la-bam-79775.firebaseapp.com",
      repo: "https://github.com/ChloeBarbier/la-bam",
      tools: [
        tools.javascript,
        tools.reactjs,
        tools.firebase,
        tools.hooks,
        tools.htmlcss,
        tools.scss,
        tools.git,
        tools.github,
      ],
      role: "Projet entier",
      description:
        'Le concept original de la boîte à mots est de choisir un dictionnaire (càd. une liste de mots) et des paramètres pour obtenir des mots nouveaux.'
        +'\nActuellement l\'application web invente des prénoms, elle intègre donc pour le moment un seul dictionnaire. Elle est faite en React.js, et la connexion et la sauvegarde des mots sur un compte utilisateur ont été développées avec Firebase.'
        +'\nLes prochains objectifs sont l\'amélioration de l\'algorithme de génération (notamment pour l\'intégration de paramètres comme l\'originalité, la sonorité), les aspects base de données avec Firebase, et enfin les aspects UI/UX.',
    },
    { 
      id: projectsIds.portfolio,
      date: "2022",
      thumbnail: 'monsiteweb.png', 
      photo: 'monsiteweb.png', 
      name: "Chloé Barbier", 
      text: "Application web en React.js.",
      related: 'projet personnel',
      // relatedId: experienceIds.freelance22,
      to: 'https://chloe.barbier.com',
      website: 'chloe.barbier.com',
      repo: "https://github.com/ChloeBarbier/chloe-barbier",
      tools: [
        tools.javascript,
        tools.reactjs,
        tools.firebase,
        tools.hooks,
        tools.htmlcss,
        tools.scss,
        tools.git,
        tools.github,
      ],
      role: "Projet entier",
      description:
      'Application web en React.js, construite à partir du boilerplate create-react-app.'
      +'\nLe code est accessible sur Github.'
    },
    { 
      id: projectsIds.mangal,
      date: "2019",
      thumbnail: 'mangal.png', 
      photo: 'mangal.png', 
      name: "Mangal Hostel", 
      text: "Site web wix de l'hôtel Mangal sur la côte colombienne des Caraïbes.",
      related: 'Indépendante',
      relatedId: experienceIds.freelance19,
      to: 'https://mangalhostel.wixsite.com/mysite',
      website: 'mangalhostel.wixsite.com',
      repo: null,
      tools: [
        tools.wix,
        tools.design
      ],
      role: "Le site web, déjà existant sur la plateforme WIX, a été maintenu et mis à jour par mes soins. Le design a subi une refonte partielle respectant des exigences graphiques spécifiques.",
      description: "Site web wix de l'hôtel Mangal, situé à Dibulla sur la côte colombienne des Caraïbes, a subi une refonte et un rafraichissement."
    },
  ];

export const getProject = (id) => {
  const item = projects.find(item => {
    console.log(item.id, id)
    return item.id === id
  });
  return item || {};
};