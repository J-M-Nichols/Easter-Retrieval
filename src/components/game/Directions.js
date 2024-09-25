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
                    dispatch(moveY(-1))
                    event.preventDefault()
                    break
                case 'ArrowDown':
                case 's':
                    dispatch(moveY(1))
                    event.preventDefault()
                    break
                case 'ArrowLeft':
                case 'a':
                    dispatch(moveX(-1))
                    event.preventDefault()
                    break
                case 'ArrowRight':
                case 'd':
                    dispatch(moveX(1))
                    event.preventDefault()
                    break
                default: break
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    },[dispatch])

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
            className="p-3 m-auto d-flex gap-3 flex-column"
        >
            <div
                className="d-flex justify-content-center"
            >
                <button 
                    type="button"
                    className="btn btn-outline-info p-4 lh-1"
                    aria-label="Move Up"
                    onClick={moveUp}
                ><i class="bi bi-caret-up-fill"></i></button>
            </div>
            <div 
                className="d-flex gap-3 justify-content-center"
            >
                <button 
                    type="button"
                    className="btn btn-outline-info p-4 lh-1"
                    aria-label="Move Left"
                    onClick={moveLeft}
                ><i class="bi bi-caret-left-fill"></i></button>
                <button 
                    type="button"
                    className="btn btn-outline-info p-4 lh-1"
                    aria-label="Move Down"
                    onClick={moveDown}
                ><i class="bi bi-caret-down-fill"></i></button>
                <button 
                    type="button"
                    className="btn btn-outline-info p-4 lh-1"
                    aria-label="Move Right"
                    onClick={moveRight}
                ><i class="bi bi-caret-right-fill"></i></button>
            </div>
        </section>
    )
}

export default Directions