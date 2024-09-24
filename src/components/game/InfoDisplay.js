import { useSelector } from "react-redux"

const InfoDisplay = _ => {
    const {currentHealth} = useSelector(state=>state.health)
    const {score} = useSelector(state=>state.score)
    const {eggCount} = useSelector(state=>state.eggs)

    return (
        <section>
            <p>Health: {currentHealth}</p>
            <p>Score: {score}</p>
            <p>Remaining Eggs: {eggCount}</p>
        </section>
    )
}

export default InfoDisplay