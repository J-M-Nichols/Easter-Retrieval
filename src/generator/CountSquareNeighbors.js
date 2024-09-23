const CountSquareNeighbors = (map, posX, posY, width, height) => {
    if(posX <= 0 || posX >= width+1 || posY <= 0 || posY >= height+1) return 5
    let count = 0

    if(map[posX - 1][posY] === 0) count++
    if(map[posX + 1][posY] === 0) count++
    if(map[posX][posY - 1] === 0) count++
    if(map[posX][posY + 1] === 0) count++

    return count
}

export default CountSquareNeighbors