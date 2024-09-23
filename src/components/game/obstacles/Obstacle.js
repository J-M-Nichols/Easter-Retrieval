import ObstacleImage from '../../../images/Stump.png'

const Obstacle = ({key, positionX, positionY}) => {
    return (
        <div 
            key={key}
            className='game-element'
            style={{
                top:positionY*16,
                left:positionX*16,
                backgroundImage:`url(${ObstacleImage})`
            }}
        />
    )
}

export default Obstacle