import { useState } from "react";
import Card from "./Card";
function Cards(){

    const[items, setItems]= useState([
        {id:1,nombre:"Homer",imagen:"https://i.pinimg.com/736x/65/4e/78/654e78adef00847c156ab367b870bbe3.jpg", stat: ""},
        {id:1,nombre:"Homer",imagen:"https://i.pinimg.com/736x/65/4e/78/654e78adef00847c156ab367b870bbe3.jpg", stat: ""},
        {id:2,nombre:"Bart",imagen:"https://www.pngarts.com/files/11/Homer-Simpson-PNG-Download-Image.png", stat: ""},
        {id:2,nombre:"Bart",imagen:"https://www.pngarts.com/files/11/Homer-Simpson-PNG-Download-Image.png", stat: ""},
        {id:3,nombre:"Marge",imagen:"https://wallpapers.com/images/hd/classic-cartoon-marge-simpson-o9csammi6z9rdt8u.jpg", stat: ""},
        {id:3,nombre:"Marge",imagen:"https://wallpapers.com/images/hd/classic-cartoon-marge-simpson-o9csammi6z9rdt8u.jpg", stat: ""},
        {id:4,nombre:"Lisa",imagen:"https://i.pinimg.com/originals/b5/6f/8a/b56f8a8011478a322b430e540db3e727.jpg", stat: ""},
        {id:4,nombre:"Lisa",imagen:"https://i.pinimg.com/originals/b5/6f/8a/b56f8a8011478a322b430e540db3e727.jpg", stat: ""}
        
    ])
    return (
        <div className="container">
            {  items.map((item, index)=> (
                <Card key={index} item={item}/>
            ))}

        </div>
    )
}

export default Cards;

