export const gallery = [
    { id: '0', thumbnail: 'img1.jpeg', photo: 'img1.jpeg', name: "Valle del Cocora", description: "blablablabla blabla" },
    { id: '1', thumbnail: 'img2.jpeg', photo: 'img2.jpeg', name: "Calle amarilla en Cartagena", description: "blablablabla blabla" },
    { id: '2', thumbnail: 'img3.jpeg', photo: 'img3.jpeg', name: "Aguas florales", description: "blablablabla blabla" },
    { id: '3', thumbnail: 'img4.jpeg', photo: 'img4.jpeg', name: "Moon", description: "blablablabla blabla" },
    { id: '4', thumbnail: 'img5.jpeg', photo: 'img5.jpeg', name: "Ocean Heart", description: "blablablabla blabla" },
    { id: '5', thumbnail: 'img6.jpeg', photo: 'img6.jpeg', name: "Homme", description: "blablablabla blabla" },
    { id: '10', thumbnail: 'img1.jpeg', photo: 'img1.jpeg', name: "Valle del Cocora", description: "blablablabla blabla" },
    { id: '11', thumbnail: 'img2.jpeg', photo: 'img2.jpeg', name: "Calle amarilla en Cartagena", description: "blablablabla blabla" },
    { id: '12', thumbnail: 'img3.jpeg', photo: 'img3.jpeg', name: "Aguas florales", description: "blablablabla blabla" },
    { id: '13', thumbnail: 'img4.jpeg', photo: 'img4.jpeg', name: "Moon", description: "blablablabla blabla" },
    { id: '14', thumbnail: 'img5.jpeg', photo: 'img5.jpeg', name: "Ocean Heart", description: "blablablabla blabla" },
    { id: '15', thumbnail: 'img6.jpeg', photo: 'img6.jpeg', name: "Homme", description: "blablablabla blabla" },
  ];

export const getArticle = (id) => {
  const item = gallery.find(item => {
    console.log(item.id, id)
    return item.id === id
  });
  return item || {};
};