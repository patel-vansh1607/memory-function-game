import "../styles/game.css"
import { useState } from 'react'
import Card from './card'
import htmlImg from '../images/html.png';
import cssImg from '../images/css.png';
import jsImg from '../images/js.png';
import scssImg from '../images/scss.png';
import reactImg from '../images/react.png';
import vueImg from '../images/vue.png';
import angularImg from '../images/angular.png';
import nodejsImg from '../images/nodejs.png';


const MemoryGame = () => {

    const [items, setItems] = useState([
        { id: 1, img: htmlImg, stat: "" },
        { id: 1, img: htmlImg, stat: "" },
        { id: 2, img: cssImg, stat: "" },
        { id: 2, img: cssImg, stat: "" },
        { id: 3, img: jsImg, stat: "" },
        { id: 3, img: jsImg, stat: "" },
        { id: 4, img: scssImg, stat: "" },
        { id: 4, img: scssImg, stat: "" },
        { id: 5, img: reactImg, stat: "" },
        { id: 5, img: reactImg, stat: "" },
        { id: 6, img: vueImg, stat: "" },
        { id: 6, img: vueImg, stat: "" },
        { id: 7, img: angularImg, stat: "" },
        { id: 7, img: angularImg, stat: "" },
        { id: 8, img: nodejsImg, stat: "" },
        { id: 8, img: nodejsImg, stat: "" }
    ].sort(() => Math.random() - 0.5))


    const [prev, setPrev] = useState(-1) 

    function check(current){
        if(items[current].id == items[prev].id){
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
            }, 1000)
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

    return(
        <div>
            <div className="game">
                <div className="container">
                { items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                )) }
                </div>
            </div>
        </div>
    )
}
export default MemoryGame