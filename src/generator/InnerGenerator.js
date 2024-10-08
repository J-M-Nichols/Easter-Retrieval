import CountSquareNeighbors from "./CountSquareNeighbors"
import Shuffle from "./Shuffle"
import spaceIndexing from '../helpers/spaceIndexing'

const InnerGenerator = (map, posX, posY, width, height) => {
    if(CountSquareNeighbors(map, posX, posY, width, height) > 1) return map
    map[posX][posY] = spaceIndexing.walkable

    const nextMoves = Shuffle([
        {
            x:1,
            y:0
        },
        {
            x:0,
            y:1
        },
        {
            x:-1,
            y:0
        },
        {
            x:0,
            y:-1
        }
    ])

    nextMoves.forEach(({x,y})=>{
        map = InnerGenerator(map, posX + x, posY + y, width, height)
    })

    return map
}

export default InnerGenerator