import Egg from '../images/Egg_item.png'
import Obstacle from '../images/Stump.png'
import Henchman from '../images/SirClucksALot.png'

/**
 * Generates new game elements (egg, obstacle, henchman) to display on the game
 * 
 * @param {int[][]} map 
 * @returns object[] 
 */
const generateGameElements = map => {
    const newGameElements = []

    //height
    for(let i = 0; i < map.length; i++){
        //width
        for(let j = 0; j < map[i].length; j++){
            switch(map[i][j]){
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

    return newGameElements
}

export default generateGameElements