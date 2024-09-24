import { useDispatch } from "react-redux"
import { moveX, moveY } from '../../features/positionSlice/move'

const Directions = ()=>{
    const dispatch = useDispatch()


    return (
        <section
            aria-label="direction"
        >
            <button 
                aria-label="Move Up"
                onClick={()=>dispatch(moveY(-1))}
            >&#11165;</button>
            <button 
                aria-label="Move Left"
                onClick={()=>dispatch(moveX(-1))}
            >&#11164;</button>
            <button 
                aria-label="Move Down"
                onClick={()=>dispatch(moveY(1))}
            >&#11167;</button>
            <button 
                aria-label="Move Right"
                onClick={()=>dispatch(moveX(1))}
            >&#11166;</button>
        </section>
    )
}

export default Directions