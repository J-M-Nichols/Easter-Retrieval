const Shuffle = (array) => {
    const returnArray = []

    while(array.length > 0){
        //get random index
        const index = Math.floor(Math.random() * array.length)

        returnArray.push(array[index])

        array.splice(index, 1)
    }

    return returnArray
}

export default Shuffle