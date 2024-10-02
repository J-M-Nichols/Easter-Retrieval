const GameOver = _ => {
    const resetGame = _ => {
        localStorage.removeItem('level')
        localStorage.removeItem('health')
        localStorage.removeItem('score')
        
        window.location.reload()
    }

    return (
        <section
            className="d-flex flex-column gap-3 user-select-none"
        >
            <h2
                className="text-center fw-bolder"
                style={{
                    fontSize:'5rem'
                }}
            >Game Over</h2>
            <img
                className="img-fluid m-auto"
                src={`${process.env.PUBLIC_URL}/ChesterCarrotsLogo.png`}
                alt="Chester Carrots"
                style={{
                    width:'10rem',
                    height:'10rem',
                    imageRendering:'pixelated'
                }}
            />
            <button
                onClick={resetGame}
                className='m-auto fs-1 btn btn-outline-info'
            >Retry</button>
        </section>
    )
}

export default GameOver