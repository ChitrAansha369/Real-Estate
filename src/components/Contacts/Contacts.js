import React from 'react'
import './Contacts.css'

const Contacts = () => {
    return (
        <div className='contacts-wrapper'>
            {/* left side */}
            <div className='cont-l'>
                <div className='head-c'>
                    <h1>Our Contacts</h1>
                    <h2><strong>Easy to contact us</strong></h2>
                    <p className="contact-description">We always ready to help by providing the best servuces for you.<br /> We believe a good
                        blace to live can make your life better.</p>
                </div>
            </div>
            <section className='contacts'>
                {/* Call */}
                <div className="common-c">
                    <div className='call-1'>
                        <div className='box-c'>
                            <i className="fa-solid fa-phone mx-2 "></i>
                        </div>
                        <div className='content'>
                            <span className='p'><strong>Call</strong><br /></span>
                            <span className='contact-description'>+974 30586458</span>
                        </div>
                        <button className="buton">
                            <a href="/">Call now </a>
                        </button>
                    </div>
                </div>
                <br/>

                {/* chat */}
                <div className="common-c">
                    <div className='call-1'>
                        <div className='box-c'>
                            <i className="fa-solid fa-comment mx-2 "></i>
                        </div>
                        <div className='content'>
                            <span className='p'><strong>chat</strong><br /></span>
                            <span className='contact-description'>+974 30586458</span>
                        </div>
                        <button className="buton">
                            <a href="/">Call now </a>
                        </button>
                    </div>
                </div>
                <br />
                {/* video call */}

                <div className="common-c">
                    <div className='call-1'>
                        <div className='box-c'>
                            <i className="fa-solid fa-mobile mx-2 "></i>
                        </div>
                        <div className='content'>
                            <span className='p'><strong>Video Call</strong><br /></span>
                            <span className='contact-description'>+974 30586458</span>
                        </div>
                        <button className="buton">
                            <a href="/">Call now </a>
                        </button>
                    </div>
                </div>
                <br />
                {/* message */}

                <div className="common-c">
                    <div className='call-1'>
                        <div className='box-c'>
                            <i className="fa-solid fa-message mx-2 "></i>
                        </div>
                        <div className='content'>
                            <span className='p'><strong>Message</strong><br /></span>
                            <span className='contact-description'>+974 30586458</span>
                        </div>
                        <button className="buton">
                            <a href="/">Call now </a>
                        </button>
                    </div>
                </div>
                <br />

            </section>

            {/* right side */}
            <div className="morgan-right">
                <div className="image-container-c">
                    <img src="./luxury9.png" alt="" />
                </div>
            </div>
            <br />
        </div >
        
    )
}

export default Contacts