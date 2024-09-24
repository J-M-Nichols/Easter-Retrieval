import './Game.css'
import Directions from './Directions'
import InfoDisplay from './InfoDisplay'
import Background from './Background'
import { useSelector } from 'react-redux'
import GameOver from './GameOver'

const Game = () => {
    const {currentHealth} = useSelector(state=>state.health)

    if(currentHealth===0){
        return <GameOver />
    }

    return (
        <section
            className='d-flex justify-content-center flex-wrap flex-column gap-3'
        >  
            <InfoDisplay />
            <Background />
            <Directions />
        </section>
    )
}

export default Game