import "../styles/game.css"


const MemoryGame = () => {

    const [prev, setPrev] = useState(-1) 
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