import { useDispatch } from "react-redux"
import { moveX, moveY } from '../../features/positionSlice/move'
import { useEffect } from "react"

const Directions = ()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        const handleKeyDown = event => {
            const {key} = event

            switch (key){
                case 'ArrowUp':
                case 'w':
                    moveUp()
                    event.preventDefault()
                    break
                case 'ArrowDown':
                case 's':
                    moveDown()
                    event.preventDefault()
                    break
                case 'ArrowLeft':
                case 'a':
                    moveLeft()
                    event.preventDefault()
                    break
                case 'ArrowRight':
                case 'd':
                    moveRight()
                    event.preventDefault()
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    },[])

    const moveUp = _ => {
        dispatch(moveY(-1))
    }

    const moveDown = _ => {
        dispatch(moveY(1))
    }

    const moveLeft = _ => {
        dispatch(moveX(-1))
    }

    const moveRight = _ => {
        dispatch(moveX(1))
    }

    return (
        <section
            aria-label="direction"
            className="p-3 m-auto"
        >
            <div
                className="d-flex justify-content-center"
            >
                <button 
                    type="button"
                    className="btn btn-outline-primary"
                    aria-label="Move Up"
                    onClick={moveUp}
                >&#11165;</button>
            </div>
            <div 
                className="d-flex justify-content-center"
            >
                <button 
                    type="button"
                    className="btn btn-outline-primary"
                    aria-label="Move Left"
                    onClick={moveLeft}
                >&#11164;</button>
                <button 
                    type="button"
                    className="btn btn-outline-primary"
                    aria-label="Move Down"
                    onClick={moveDown}
                >&#11167;</button>
                <button 
                    type="button"
                    className="btn btn-outline-primary"
                    aria-label="Move Right"
                    onClick={moveRight}
                >&#11166;</button>
            </div>
        </section>
    )
}

export default Directions