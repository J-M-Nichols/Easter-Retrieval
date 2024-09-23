import AnimatedSprite from '../animatedSprite/AnimatedSprite'
import './Game.css'
import ChesterCarrots from '../../images/ChesterCarrots.png'
import Directions from './Directions'
import { useEffect, useState } from 'react'
import GameElements from './gameElements/GameElements'
import Egg from '../../images/Egg_item.png'
import Obstacle from '../../images/Stump.png'
import Henchman from '../../images/SirClucksALot.png'
import RecursiveGenerator from '../../generator/RecursiveGenerator'

const startingEggCount = 2

const Game = () => {
    const [positionX, setPositionX] = useState(0)
    const [positionY, setPositionY] = useState(0)   
    const [map, setMap] = useState()
    const [gameElements, setGameElements] = useState([])
    const [health, setHealth] = useState(3)
    const [eggCount, setEggCount] = useState(startingEggCount)
    const [score, setScore] = useState(0)

    useEffect(()=>{
        const newMap = RecursiveGenerator(10, 10, 5, startingEggCount)
        setMap(newMap)

        const newGameElements = []
        //height
        for(let i = 0; i < newMap.length; i++){
            //width
            for(let j = 0; j < newMap[i].length; j++){
                switch(newMap[i][j]){
                    case 1://obstacle
                        newGameElements.push(
                            {
                                positionX: j,
                                positionY: i,
                                image: Obstacle,
                                elementName:'obstacle',
                            }
                        )
                        break
                    case 2://hen-chman
                        newGameElements.push(
                            {
                                positionX: j,
                                positionY: i,
                                image: Henchman,
                                elementName:'henchman',
                            }
                        )
                        break
                    case 3://egg
                        newGameElements.push(
                            {
                                positionX: j,
                                positionY: i,
                                image: Egg,
                                elementName:'egg',
                            }
                        )
                        break
                    default: break
                }
            }
        }

        setGameElements(newGameElements)
    },[])

    useEffect(()=>{
        if(map){
            //2
            //check if current position is Hen-chman then lose health - return to position 0, 0 - if health === 0 Game over
            if(map[positionY][positionX] === 2){
                setPositionX(0)
                setPositionY(0)
                setHealth(prev=>prev-1)
            }
    
            //3
            //check if current position is Egg (score + 1) - if eggCount === 0 load next map
            if(map[positionY][positionX] === 3){
                setEggCount(prev=>prev-1)
                setScore(prev=>prev+1)
            }
        }
    },[map, positionX, positionY])

    const changeX = change => {
        setPositionX(prev=>{
            const newVal = prev + change
            if(newVal>9 || newVal < 0 || map[positionY][newVal]===1) return prev

            return newVal
        })
    }

    const changeY = change => {
        setPositionY(prev=>{
            const newVal = prev + change
            if(newVal>9 || newVal < 0 || map[newVal][positionX]===1) return prev

            return newVal
        })
    }

    return (
        <section>  
            <p>health: {health}</p>
            <p>score: {score}</p>
            <p>eggCount: {eggCount}</p>
            <div
                id="game"
            >
                {[...Array(10)].map((_, index)=>{
                    return (
                        <div 
                            key={index}
                            className='game-row'
                        >
                            {[...Array(10)].map((_, innerIndex)=>{
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
                <AnimatedSprite 
                    direction={'down'}
                    positionX={positionX}
                    positionY={positionY}
                    image={ChesterCarrots}
                />
                <GameElements 
                    gameElements={gameElements}
                />
            </div>
            <Directions 
                IncreaseX={()=>changeX(1)} 
                DecreaseX={()=>changeX(-1)} 
                IncreaseY={()=>changeY(-1)} 
                DecreaseY={()=>changeY(1)}
            />
        </section>
    )
}

export default Game