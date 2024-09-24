import AnimatedSprite from "./animatedSprite/AnimatedSprite"
import ChesterCarrots from '../images/ChesterCarrots.png'
import { useSelector } from "react-redux"
import { useEffect } from "react"

const PlayerSprite = () => {
    const {direction, x, y} = useSelector(state=>state.position)

    return (
        <AnimatedSprite 
            direction={direction}
            positionX={x}
            positionY={y}
            image={ChesterCarrots}
        />
    )
}

export default PlayerSprite