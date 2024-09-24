import InnerGenerator from "./InnerGenerator"
import spaceIndexing from '../helpers/spaceIndexing'

/**
 * Recursivelly generates a multidimensional integer array.
 * 0 : Empty grass tile
 * 1 : Impassable obstacle
 * 2 : Hen-chman
 * 3 : Victory egg
 * 
 * @param {int} width 
 * @param {int} height 
 * @param {int} henchmanCount 
 * @param {int} eggCount
 */
const RecursiveGenerator = (width, height, henchmenCount, eggCount) => {
    let map = [...Array(height+2)].map(_=>[...Array(width+2)].map(_=>spaceIndexing.obstacle))

    map = InnerGenerator(map, 1, 1, width, height)

    const finalMap = []
    const possibleEggLocations = []
    const possibleHenchmanLocations = []

    for(let i = 1; i < height+1; i++){
        finalMap.push([])
        for(let j = 1; j < width+1; j++){
            finalMap[i-1].push(map[i][j])

            if(finalMap[i-1][j-1]===1) possibleHenchmanLocations.push({x:j-1, y: i-1})
            else if(i-1 > Math.floor(height/2)) possibleEggLocations.push({x:j-1, y: i-1})
        }
    }

    let eggsPlaced = 0;
    //place egg in row 9 - 3
    for(let i = 0; i < eggCount && possibleEggLocations.length > 0; i++){
        const eggIndex = Math.floor(Math.random() * possibleEggLocations.length)
        const {x, y} = possibleEggLocations.splice(eggIndex, 1)[0]

        finalMap[y][x] = spaceIndexing.egg
        eggsPlaced++
    }

    //place {henchmenCount} henchman where finalMap[y][x] === 1 - 2
    for(let i = 0; i < henchmenCount && possibleHenchmanLocations.length > 0; i++){
        const henchmanIndex = Math.floor(Math.random() * possibleHenchmanLocations.length)
        const {x,y} = possibleHenchmanLocations.splice(henchmanIndex, 1)[0]

        finalMap[y][x] = spaceIndexing.henchman
    }

    return {map:finalMap, eggsPlaced:eggsPlaced}
}

export default RecursiveGenerator