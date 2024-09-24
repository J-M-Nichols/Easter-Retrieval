import { useSelector } from "react-redux"
import PlayerSprite from "./PlayerSprite"
import GameElements from './gameElements/GameElements'

const Background = _ => {
    const {width, height} = useSelector(state=>state.dimensions)

    return (
        <div
            id="game"
            className='m-auto'
            style={{
                width:`${width*16}px`,
                height:`${height*16}px`
            }}
        >
            {[...Array(height)].map((_, index)=>{
                return (
                    <div 
                        key={index}
                        className='game-row'
                        style={{
                            width:`${width*16}px`
                        }}
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
    )
}

export default Background