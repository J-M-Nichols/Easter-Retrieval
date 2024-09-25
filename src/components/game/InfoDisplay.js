import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nextLevel } from "../../features/gameSlice"

const InfoDisplay = _ => {
    const {currentHealth} = useSelector(state=>state.health)
    const {score} = useSelector(state=>state.score)
    const {eggCount} = useSelector(state=>state.eggs)
    const {map} = useSelector(state=>state.map)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(eggCount===0 && map.length > 0){
            dispatch(nextLevel())
        }
    },[eggCount, map, dispatch])

    return (
        <ul
            className="list-group user-select-none m-auto"
        >
            <li 
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary gap-3"
            >
                Health
                <span 
                    className="badge rounded-pill bg-light text-dark"
                >{currentHealth}</span>
            </li>
            <li 
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary gap-3"
            >
                Score
                <span 
                    className="badge rounded-pill bg-light text-dark"
                >{score}</span>
            </li>
            <li 
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-secondary gap-3"
            >
                Remaining Eggs
                <span 
                    className="badge rounded-pill bg-light text-dark"
                >{eggCount}</span>
            </li>
        </ul>
    )
}

export default InfoDisplay