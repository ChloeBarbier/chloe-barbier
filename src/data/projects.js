import { tools } from './tools';
import { experienceIds, projectsIds }  from "../enums/Ids";

export const allProjects = {
  portfolio: { id: 0, idRef: projectsIds.portfolio, label: "Portfolio", name: "portfolio" },
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
      text: 'projects.text.desking',
      related: 'Solutions Medias 360',
      relatedId: experienceIds.sm360,
      to: "https://360.agency/en/solutions-for-dealership/customer-relationship-management/desking-360-sales-tools/",
      website: "desking-360-sales-tools",
      videos: [
        {title: 'projects.video', link: "https://www.youtube.com/watch?v=0rXpDsIA-xA&list=PLzJmUF3j0ffr8kkfu9KCtFBI-FcEjhs0X&index=10"}
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
      role: 'projects.role.desking',
      description: 'projects.description.desking'
        
    },
    { 
      id: projectsIds.widgets,
      date: "2019 - 2021",
      thumbnail: 'widgets.png', 
      photo: 'widgets.png', 
      name: "Widgets 360", 
      text: 'projects.text.widgets',
      related: 'Solutions Medias 360',
      relatedId: experienceIds.sm360,
      to: "https://360.agency/en/solutions-for-dealership/customer-relationship-management/desking-360-sales-tools/",
      website: "desking-360-sales-tools",
      repo: null,
      tools: [
        tools.javascript,
        tools.reactjs,
        tools.scss,
        tools.hooks,
        tools.axios,
        tools.devops,
        tools.nodejs,
        tools.agile,
      ],
      role: 'projects.role.widgets',
      description: 'projects.description.widgets',
    },
    { 
      id: projectsIds.uikit, 
      date: "2019 - 2021",
      thumbnail: 'uikit.png', 
      photo: 'uikit.png', 
      name: "Ui-kit", 
      text: 'projects.text.uikit',
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
      role: 'projects.role.uikit',
      description: 'projects.description.uikit'
    },
    { 
      id: projectsIds.drawing, 
      date: "2018 - 2019",
      thumbnail: 'drawing.png', 
      photo: 'drawing.png', 
      name: "Drawing", 
      text: 'projects.text.drawing',
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
      role: 'projects.role.drawing',
      description: 'projects.description.drawing'
    },
    { 
      id: projectsIds.roofgraf,
      date: "2018 - 2019",
      thumbnail: 'roofgraf.png', 
      photo: 'roofgraf.png', 
      name: "Roofgraf",
      text: 'projects.text.roofgraf',
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
        {title: 'projects.video', link: "https://www.youtube.com/watch?v=JhKEUtrvgPA"}
      ],
      role: 'projects.role.roofgraf',
      description: 'projects.description.roofgraf'
    },
    { 
      id: projectsIds.solargraf,
      date: "2018 - 2019",
      thumbnail: 'solargraf.png', 
      photo: 'solargraf.png',
      name: "Solargraf", 
      text: 'projects.text.solargraf',
      related: 'Sofdesk',
      relatedId: experienceIds.sofdesk,
      to: "https://www.solargraf.com/",
      website: "www.solargraf.com",
      videos: [
        {title: 'projects.video', link: "https://www.youtube.com/watch?v=N5b4H6yQXWE"}
      ],
      repo: null,
      tools: [
        tools.javascript,
        tools.reactjs,
      ],
      role: 'projects.role.solargraf',
      description: 'projects.description.solargraf'
    },
    { 
      id: projectsIds.labam,
      date: "2021",
      thumbnail: 'labam.png', 
      photo: 'labam.png', 
      name: "La boîte à mots", 
      text: 'projects.text.labam', 
      related: 'projects.personalProject',
      // relatedId: experienceIds.freelance22,
      to: "https://la-bam-79775.web.app/",
      website: "la-bam-79775.web.app",
      repo: "https://github.com/ChloeBarbier/la-bam",
      tools: [
        tools.javascript,
        tools.reactjs,
        tools.firebase,
        tools.hooks,
        tools.algorithmic,
        tools.htmlcss,
        tools.scss,
        tools.git,
        tools.github,
      ],
      role: 'projects.role.labam',
      description: 'projects.description.labam'
    },
    { 
      id: projectsIds.portfolio,
      date: "2022",
      thumbnail: 'monsiteweb.png', 
      photo: 'monsiteweb.png', 
      name: "Chloé Barbier", 
      text: 'projects.text.portfolio',
      related: 'projects.personalProject',
      // relatedId: experienceIds.freelance22,
      to: 'https://chloe-barbier.web.app/',
      website: 'https://chloe-barbier.web.app',
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
      role: 'projects.role.portfolio',
      description: 'projects.description.portfolio'
    },
    { 
      id: projectsIds.mangal,
      date: "2019",
      thumbnail: 'mangal.png', 
      photo: 'mangal.png', 
      name: "Mangal Website", 
      text: 'projects.text.mangal',
      related: 'Mangal Hostel',
      relatedId: experienceIds.freelance19,
      to: 'https://mangalhostel.wixsite.com/mysite',
      website: 'mangalhostel.wixsite.com',
      repo: null,
      tools: [
        tools.wix,
        tools.webDesign
      ],
      role: 'projects.role.mangal',
      description: 'projects.description.mangal'
    },
  ];

export const getProject = (id) => {
  const item = projects.find(item => {
    console.log(item.id, id)
    return item.id === id
  });
  return item || {};
};