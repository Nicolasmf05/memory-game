import { useState } from "react";
import Card from "./Card";
function Cards(){

    const[items, setItems]= useState([
        {id:1,nombre:"Homer",imagen:"/img/654e78adef00847c156ab367b870bbe3.jpg", stat: ""},
        {id:1,nombre:"Homer",imagen:"/img/78/654e78adef00847c156ab367b870bbe3.jpg", stat: ""},
        {id:2,nombre:"Bart",imagen:"/img/Homer-Simpson-PNG-Download-Image.png", stat: ""},
        {id:2,nombre:"Bart",imagen:"/img/Homer-Simpson-PNG-Download-Image.png", stat: ""},
        {id:3,nombre:"Marge",imagen:"/img/classic-cartoon-marge-simpson-o9csammi6z9rdt8u.jpg", stat: ""},
        {id:3,nombre:"Marge",imagen:"/img/classic-cartoon-marge-simpson-o9csammi6z9rdt8u.jpg", stat: ""},
        {id:4,nombre:"Lisa",imagen:"/img/b56f8a8011478a322b430e540db3e727.jpg", stat: ""},
        {id:4,nombre:"Lisa",imagen:"/img/b56f8a8011478a322b430e540db3e727.jpg", stat: ""}
        
    ].sort(() => Math.random() - 0.5)) ;

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])

                setPrev(-1)
        },1000)
    }
}

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            {  items.map((item, index)=> (
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
            ))}

        </div>
    )
}

export default Cards;



