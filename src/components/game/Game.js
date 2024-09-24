import './Game.css'
import Directions from './Directions'
import GameElements from './gameElements/GameElements'
import { useSelector } from 'react-redux'
import InfoDisplay from './InfoDisplay'
import PlayerSprite from '../PlayerSprite'

const Game = () => {
    const {width, height} = useSelector(state=>state.dimensions)

    return (
        <section>  
            <InfoDisplay />
            <div
                id="game"
            >
                {[...Array(height)].map((_, index)=>{
                    return (
                        <div 
                            key={index}
                            className='game-row'
                        >
                            {[...Array(width)].map((_, innerIndex)=>{
                                return (
                                    <div 
                                        key={innerIndex}
                                        className='game-col'
                                    />
                                )
                            })}
                        </div>
                    )
                })}
                <PlayerSprite />
                <GameElements />
            </div>
            <Directions />
        </section>
    )
}

export default Game