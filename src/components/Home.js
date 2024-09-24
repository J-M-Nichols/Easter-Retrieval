import React from 'react'

const Home = ()=>{
    return <section>
        <header>
            <h1 
                id='home-heading'
                className='text-center'
            >Welcome to <b>Easter Retrieval</b></h1>
            <div
                className='border border-info rounded bg-light bg-gradient p-3'
            >
                <p
                    className='text-center'
                >Play as the <i>egg-ceptional</i> <b>Chester Carrots</b> in his hunt for eggs. The evil chicken <b>Sir Clucks-A-Lot</b> has hidden <b>Chester Carrots</b> eggs right before Easter!</p>
                <p
                    className='text-center'
                >Can you find them all while avoiding his army of <i>Hen-chman</i>?</p>
            </div>
        </header>
        <section
            className='p-3 mt-5'
        >
            <h2
                className='text-center'
            >Instructions</h2>
            <article
                className='rounded border border-info bg-light bg-gradient d-flex p-3 user-select-none'
            >
                <div
                    className='container-fluid'
                >
                    <div className="row">
                        <div className="col-4">
                            <div className="list-group" id="list-tab" role="tablist">
                            <a 
                                className="list-group-item list-group-item-action active" 
                                id="list-goal-list" 
                                data-bs-toggle="list" 
                                href="#list-goal" 
                                role="tab" 
                                aria-controls="list-goal"
                            >Goal</a>
                            <a 
                                className="list-group-item list-group-item-action" 
                                id="list-movement-list" 
                                data-bs-toggle="list" 
                                href="#list-movement" 
                                role="tab" 
                                aria-controls="list-movement"
                            >Movement</a>
                            <a 
                                className="list-group-item list-group-item-action" 
                                id="list-lose-list" 
                                data-bs-toggle="list" 
                                href="#list-lose" 
                                role="tab" 
                                aria-controls="list-lose"
                            >How to lose</a>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="tab-content" id="nav-tabContent">
                            <div 
                                className="tab-pane fade show active" 
                                id="list-goal" 
                                role="tabpanel" 
                                aria-labelledby="list-goal-list"
                            >The goal of the game is to collect all of the eggs on the map.</div>
                            <div 
                                className="tab-pane fade" 
                                id="list-movement" 
                                role="tabpanel" 
                                aria-labelledby="list-movement-list"
                            >Players can move around the map by pressing the direction buttons below the game, pressing the arrow keys or WASD keys.</div>
                            <div 
                                className="tab-pane fade" 
                                id="list-lose" 
                                role="tabpanel" 
                                aria-labelledby="list-lose-list"
                            ><span className='badge bg-warning text-dark'>Beware</span> of the evil <b>Hen-chman</b>. If one of them touch you then you will lose 1 health. If you have no health left then you will lose the game.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </section>
}

export default Home