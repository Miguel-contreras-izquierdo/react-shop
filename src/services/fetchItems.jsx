function fetchItems() {
  return [
    {
      titulo: "Tamal Rojo",
      img: "https://cdn2.cocinadelirante.com/sites/default/files/images/2020/12/receta-de-tamal-rojo-cerdo.jpg",
      text: "Lleve sus tamales calientitos",
      price:20,
      linkBtn: "https://kodemia.mx",
      // oferta:true,
    },
    {
      titulo: "Tamal Verde",
      img: "https://www.turimexico.com/wp-content/uploads/2017/12/Receta-Tamal-de-Pollo-en-Salsa-Verde-900x500.jpg",
      text: "Lleve sus tamales calientitos",
      price:20,
      linkBtn: "https://kodemia.mx",
      oferta:true,
    },
    {
      titulo: "Tamal de Mole",
      img: "data:image/jpeg;base64,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",
      text: "Lleve sus tamales calientitos",
      price:20,
      linkBtn: "https://kodemia.mx",
    },
    {
      titulo: "Tamal de Dulce",
      img: "https://i.pinimg.com/474x/e1/97/fb/e197fb3dd92c1074256fc01784d805bf.jpg",
      text: "Lleve sus tamales calientitos",
      price:20,
      linkBtn: "https://kodemia.mx",
      oferta: true,
    },
    {
      titulo: "Tamal Rajas",
      img: "https://i.ytimg.com/vi/-o1_Hs7Ulxw/maxresdefault.jpg",
      text: "Lleve sus tamales calientitos",
      price:20,
      linkBtn: "https://kodemia.mx",
    },
  ];
}

export default fetchItems;
