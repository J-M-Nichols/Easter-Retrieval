import EggImage from '../../../images/Egg_item.png'

const Egg = ({key, positionX, positionY}) => {
    return (
        <div 
            key={key}
            className="game-element"
            style={{
                top:positionY*16,
                left:positionX*16,
                backgroundImage:`url(${EggImage})`
            }}
        />
    )
}

export default Egg