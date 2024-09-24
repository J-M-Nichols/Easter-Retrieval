import React from "react"
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap"
import { Link } from "react-router-dom"

const AboutMe = () => {
    return (
        <section 
            className="m-3"
            aria-labelledby="about-me-heading"
        >
            <header>
                <h1 id="about-me-heading">About Me</h1>
            </header>
            <section className="m-3 p-3" aria-label="Developer Bio">
                <h2
                    className="ps-3"
                >Bio</h2>
                <div 
                    className="border text-secondary p-3 border-info rounded bg-light bg-gradient"
                >
                    <p className="m-3">
                        I am John, the developer of <b>Easter Retrieval</b>. I have been developing small apps and games in Unity with C# since 2012 but in the past 3 years I have been creating MERN and FERN websites. This is my second website using Redux and Bootstrap and I hope that you enjoy it. 
                    </p>
                    <p>Please let me know if you enjoy the game. It would make my day and encourage me to add accounts, game saving and leaderboards.</p>
                </div>
            </section>
            <section className="m-3 p-3" aria-label="Developer Contact">
                <h2
                    className="text-center"
                >Contact information for the developer</h2>
                <div 
                    aria-label="Developer Contact Links"
                    className="m-3 p-3 border border-info rounded bg-light bg-gradient m-3 d-flex flex-wrap gap-3"
                >
                    <OverlayTrigger 
                        placement="bottom"
                        overlay={
                            <Tooltip>Email me at JNichols@NichathanGaming.com.</Tooltip>
                        }
                    >
                        <a 
                            className="btn btn-outline-secondary flex-fill"
                            href="mailto:JNichols@NichathanGaming.com?subject=Contact%20from%20Road%20To%20The%20West%20Game&body=Hello%20NichathanGaming,"
                            aria-label="Email"
                            style={{
                                wordBreak:'break-all'
                            }}
                        >Email Me</a>
                    </OverlayTrigger>
                    <OverlayTrigger 
                        placement="bottom"
                        overlay={
                            <Tooltip>Visit my LinkedIn.</Tooltip>
                        }
                    >
                        <a 
                            className="btn btn-outline-secondary flex-fill"
                            href="https://www.linkedin.com/in/johnathan-nichols-571b87272"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            style={{
                                wordBreak:'break-all'
                            }}
                        >LinkedIn</a>
                    </OverlayTrigger>
                    <OverlayTrigger 
                        placement="bottom"
                        overlay={
                            <Tooltip>Visit my GitHub Page.</Tooltip>
                        }
                    >
                        <a 
                            className="btn btn-outline-secondary flex-fill"
                            href="https://github.com/J-M-Nichols"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            style={{
                                wordBreak:'break-all'
                            }}
                        >GitHub</a>
                    </OverlayTrigger>
                    <OverlayTrigger 
                        placement="bottom"
                        overlay={
                            <Tooltip>Visit my website.</Tooltip>
                        }
                    >
                        <a 
                            className="btn btn-outline-secondary flex-fill"
                            href="https://www.nichathangaming.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Nichathan Gaming"
                            style={{
                                wordBreak:'break-all'
                            }}
                        >NichathanGaming.com</a>
                    </OverlayTrigger>
                </div>
            </section>
            <section 
                className="border border-info gap-3 m-auto rounded bg-light bg-gradient p-3 d-flex justify-content-center flex-column"
                style={{
                    width:'fit-content'
                }}
            >
                <h2 className="m-auto text-secondary">Acknowledgements</h2>
                <Link
                    type="button"
                    className="m-auto btn btn-outline-secondary"
                    target='_blank'
                    to='https://cupnooble.itch.io/sprout-lands-asset-pack'
                >Images from Sprout Lands by Cup Noodles</Link>
                <p className="m-auto text-secondary">(with small alterations made)</p>
            </section>
        </section>
    )
}

export default AboutMe