import Egg from "./Egg"

const Eggs = ({eggLocations}) => {
    return (
        <section 
            aria-label="eggs"
        >
            {eggLocations.map(({positionX, positionY}, index)=>{
                return (
                    <Egg 
                        key={index}
                        positionX={positionX}
                        positionY={positionY}
                    />
                )
            })}
        </section>
    )
}

export default Eggs