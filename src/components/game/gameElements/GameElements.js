import AnimatedSprite from "../../animatedSprite/AnimatedSprite"
import GameElement from "./GameElement"

const GameElements = ({gameElements}) => {
    return (
        <section 
            aria-label="game elements"
        >
            {gameElements.map(({elementName, positionX, positionY, image}, index)=>{
                if(elementName==='henchman'){
                    return (
                        <AnimatedSprite 
                            key={index}
                            direction={'down'}
                            positionX={positionX}
                            positionY={positionY}
                            image={image}
                        />
                    )
                }

                return (
                    <GameElement 
                        key={index}
                        positionX={positionX}
                        positionY={positionY}
                        image={image}
                        elementName={elementName}
                    />
                )
            })}
        </section>
    )
}

export default GameElements