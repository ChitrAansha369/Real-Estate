import React from 'react'
import './Morgan.css';
import CountUp from "react-countup";

const Morgan = () => {
  return (
    <section className="morgan-wrapper">
      <div className="morgan-container">
        {/* left side */}
        <div className="morgan-left">
          <div className="morgan-title">
            <div className="orange-circle"/>
            <h1>Discover <br />most suitable <br/> property</h1>
          </div><br /> <br />
          <div className="flexColStart morgan-des">
            <span className='secondary-text'>Find a variety of properties that suit you very easily, <br/>
            forget all dificulties in finding a residence for you
            </span>
          </div> <br/>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder='Search Location' area-label='search' />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form> <br/>

          <div className='stats'>
            <div className='stat'>
              <span>
                <CountUp start={8800} end={9000} duration={4}/>
                <span>+</span>
              </span><br/>
              <span className='secondary-text'>Premium Products</span>
            </div>

            <div className='stat'>
              <span>
                <CountUp start={1950} end={2000} duration={4}/>
                <span>+</span>
              </span><br />
              <span className='secondary-text'>Happy Customers</span>
            </div>

            <div className='stat'>
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span><br />
              <span className='secondary-text'>Award Winnings</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="morgan-right">
          <div className="image-container">
            <img src="./real-estate.jpg" alt="" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Morgan