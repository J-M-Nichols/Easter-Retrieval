import React from 'react'
import './AnimatedSprite.css'
import spritePositions from '../../helpers/spritePositions'

const AnimatedSprite = ({direction, positionX, positionY, image})=>{

    return (
        <div 
            className='animated-sprite game-element' 
            style={{
                width:'14px',
                background: `url(${image})`,
                backgroundPositionY: spritePositions[direction],
                top:positionY*16,
                left:(positionX*16)+1
            }}
        />
    )
}

export default AnimatedSprite