import React, { useEffect, useState } from 'react'
import './Sprite.css'
import spritePositions from './spritePositions'

const Sprite = ()=>{
    const [spritePosition, setSpritePosition] = useState('down')

    useEffect(()=>{
        document.documentElement.style.setProperty('--sprite-position', spritePositions[spritePosition])
    }, [spritePosition])

    return (
        <>
            <div className='sprite' />
            <button 
                type='button'
                className='btn btn-primary'
                onClick={()=>setSpritePosition('up')}
            >Up</button>
            <button 
                type='button'
                className='btn btn-primary'
                onClick={()=>setSpritePosition('left')}
            >Left</button>
            <button 
                type='button'
                className='btn btn-primary'
                onClick={()=>setSpritePosition('right')}
            >Right</button>
            <button 
                type='button'
                className='btn btn-primary'
                onClick={()=>setSpritePosition('down')}
            >Down</button>
        </>
    )
}

export default Sprite