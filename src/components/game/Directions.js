const Directions = ({IncreaseX, DecreaseX, IncreaseY, DecreaseY})=>{
    return (
        <section
            aria-label="direction"
        >
            <button 
                aria-label="Move Up"
                onClick={IncreaseY}
            >&#11165;</button>
            <button 
                aria-label="Move Left"
                onClick={DecreaseX}
            >&#11164;</button>
            <button 
                aria-label="Move Down"
                onClick={DecreaseY}
            >&#11167;</button>
            <button 
                aria-label="Move Right"
                onClick={IncreaseX}
            >&#11166;</button>
        </section>
    )
}

export default Directions