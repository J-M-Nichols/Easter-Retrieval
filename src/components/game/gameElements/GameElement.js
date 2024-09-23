const GameElement = ({elementName, positionX, positionY, image}) => {
    return (
        <div 
            aria-label={elementName}
            className="game-element"
            style={{
                top:positionY*16,
                left:positionX*16,
                backgroundImage:`url(${image})`
            }}
        />
    )
}

export default GameElement