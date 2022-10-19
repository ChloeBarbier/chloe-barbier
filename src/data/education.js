const educationIds = {
    udem: 'school-0-udem',
    insa: 'school-1-insa',
    uni: 'school-2-uni',
    bellevue: 'school-3-bellevue'
}

export const education = [
    { 
        id: educationIds.udem, 
        to: "https://www.umontreal.ca/", 
        website: "www.umontreal.ca", 
        school: 'Université de Montréal',
        schoolLong: 'Université de Montréal',
        graduation: "Certificat en informatique appliquée",
        prize: "Mention d'excellence",
        date: "2016 . 2017", 
        location: "Montréal, CANADA",
        photo: 'udem-modified.png', 
        text: "Informatique appliquée, multimédia, design et intégration web. Développement informatique, programmation de solutions web avec HTML, CSS, JavaScript, PHP. Options : Base de données, Maquette web, Montage vidéo, Suite Adobe."
    },
    { 
        id: educationIds.insa, 
        to: "https://www.groupe-insa.fr/",
        website: "www.groupe-insa.fr",
        school: 'INSA de Toulouse',
        schoolLong: 'Institut national des Sciences appliquées de Toulouse',
        graduation: 'Master en génie physique (diplôme d\'ingénieur)',
        prize: "Anglais TOEIC 825",
        date: "2008 . 2013",
        location: "Toulouse, FRANCE",
        photo: 'insa-modified.png', 
        text: "Sciences fondamentales et Appliquées, Sciences physiques, Instrumentation." 
    },
    { 
        id: educationIds.uni, 
        to: "https://www.nottingham.ac.uk/", 
        website: "www.nottingham.ac.uk", 
        school: 'University of Nottingham', 
        schoolLong: 'University of Nottingham', 
        graduation: "Bachelor degree in physics",
        prize: null, 
        date: "2010 . 2011", 
        // date: "sept. 2010 - fev. 2011", 
        location: "Nottingham, ANGLETERRE",
        photo: 'uni-modified.png', 
        text: "Échange universitaire. Sciences physiques."
    },
    { 
        id: educationIds.bellevue, 
        to: "https://bellevue-toulouse.mon-ent-occitanie.fr/les-cpge-classes-preparatoires/les-filieres-et-les-formations-cpge/mpsi-mathematiques-physique-et-sciences-de-l-ingenieur/mpsi-mathematiques-physique-et-sciences-de-l-ingenieur-cpge-1ere-annee-54188.htm", 
        website: "bellevue-toulouse.fr", 
        school: 'Lycée Bellevue', 
        schoolLong: 'Lycée Bellevue', 
        graduation: "Classe Préparatoire aux Grandes Écoles",
        prize: null, 
        date: "2007 . 2008", 
        // date: "sept. 2007 - jui. 2008", 
        location: "Toulouse, FRANCE",
        photo: 'bellevue-modified.png', 
        text: "CPGE en Mathématiques supérieures. MPSI: Mathématiques, Physique et Sciences de l'ingénieur."
    },
];