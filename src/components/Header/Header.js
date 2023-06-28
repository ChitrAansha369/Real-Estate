// import React from 'react'
import './Header.css'
import React, { useState } from 'react';



const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggle = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (

        <section className="nav-elements ">

            <nav className={`navbar navbar-expand-lg bg-body-tertiary type="button" onClick={handleToggle}`}>
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <div className="navbar-brand">
                        <img src='./logo2.png' alt="logo" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''
                            }`}
                        id="navbarNavAltMarkup"
                    >
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="#">Residencies</a>
                                <a className="nav-link" href="#">Our Values</a>
                                <a className="nav-link" href="#">Contact Us</a>
                                <a className="nav-link" href="#">Get Started</a>
                                <button className="button">
                                    <a href="/">Contact</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
            </nav>
        </section>



    );
}

export default Header;