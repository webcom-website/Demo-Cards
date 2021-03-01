import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
// import Constantes from "./constantes";

const cards = [
  
  {
    id: 1,
    title: "Cupcakes sencillos y esponjosos",
    image: image1,
    text: "1- Lo primero que vamos a hacer es batir los 3 huevos con el azúcar (le puse azúcar negra para que queden bien oscuros, pero puede ser blanca) hasta que queden espumosos!  Segui Leyendo...",

    url: "https://www.paulinacocina.net/cupcakes-de-chocolate-food-plugging/2427",
  },
  {
    id: 2,
    title: "Cake de Chocolate",
    image: image2,
    text: "1- Primero se bate la manteca con el azúcar hasta blanquear, enseguida desligamos los huevos con una pizca de sal fina y los incorporamos en forma de hilo a la preparación!  Segui Leyendo...",
    url: "https://elgourmet.com/receta/pound-cake-de-chocolate",
  },
  {
    id: 3,
    title: "Donuts",
    image: image3,
    text: "Calentar la leche a una temperatura soportable al tacto (tibia) colocar la levadura instantánea más una cucharadita de azúcar, mezclar y dejar reposar tapada durante 10 min... Seguir Leyendo...",
    url: "https://www.instagram.com/p/B-S13PxnQx2/",
  },
  
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, text, url, id}) => (
          <div className="col-md-4 p-6" key={id}>
            <Card imageSource={image} title={title} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
