import { useEffect, useState } from "react"
import AnimatedSprite from "../animatedSprite/AnimatedSprite"
import GameElement from "./GameElement"
import { useDispatch, useSelector } from "react-redux"
import generateGameElements from "../../../helpers/generateGameElements"
import { initializeGame } from "../../../features/gameSlice"

const GameElements = () => {
    const {map} = useSelector(state=>state.map)
    const [gameElements, setGameElements] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        if(map.length === 0) dispatch(initializeGame())
        else setGameElements(generateGameElements(map))
    },[map])

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