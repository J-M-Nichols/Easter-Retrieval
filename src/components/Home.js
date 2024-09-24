import React from 'react'
import { useDispatch } from 'react-redux'
import { initializeGame } from '../features/gameSlice'
import { Link } from 'react-router-dom'

const Home = ()=>{
    const dispatch = useDispatch()

    return <section>
        <Link
            to="/play" 
            className="btn btn-primary" 
            role="button"
            onClick={()=>{
                dispatch(initializeGame())
            }}
        >Play</Link>
    </section>
}

export default Home