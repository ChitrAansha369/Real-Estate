import React from 'react'
import './Gets.css'

const Gets = () => {
    return (
        <div className='g-wrapper'>
            <div className='paddings innerWidth flexCenter g-container'>
                {/* left side */}
                <div className='flexColStart g-left'>
                    <img src='./log1.png' alt=""></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Nulla auctor
                        ullamc.
                    </p>
                </div>

                {/* right side */}
                <div className='flexColStart g-right'>
                    <h2><strong>Information</strong></h2>
                    <br/>
                    <span className='mn'>494 New York, F.L.45, USA</span>
                    <div className=' g-foot'>
                        <span>Property </span>
                        <span>Services </span>
                        <span>Product </span>
                        <span>AboutUs </span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Gets