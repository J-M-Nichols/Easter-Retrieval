import Obstacle from "./Obstacle"

const Obstacles = ({obstacleLocations})=>{
    return (
        <section
            aria-label="obstacles"
        >
            {obstacleLocations.map(({positionX, positionY}, index)=>{
                return (
                    <Obstacle 
                        key={index}
                        positionX={positionX}
                        positionY={positionY}
                    />
                )
            })}
        </section>
    )
}

export default Obstacles