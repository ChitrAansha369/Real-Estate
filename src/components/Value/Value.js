import React from 'react'
import './Value.css'

const Value = () => {
    return (
        <section className="value-wrapper">
            <div className="value-container">
                {/* left side */}
                <div className="value-left">
                    <div className="image-contain">
                        <img src="./luxury8.png" alt="" />
                    </div>
                </div>

                {/* right side */}
                <div className='right-container'>
                    <div className='head-v'>
                        <h1>Our Value</h1>
                        <h2>Value we give to you</h2>
                        <h3 className='product-description'>
                            lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.<br />
                            Sed nec lacus at velit ultricies.
                        </h3>
                    </div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <strong> Best interest rates on market</strong>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><p className="product-description">Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item's accordion body.</p></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <strong> Prevent unstable prices</strong>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><p className="product-description">Placeholder content for this accordion, which is intended to demonstrate the class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</p></div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <strong> Best prices on market</strong>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><p className="product-description">Placeholder content for this accordion, which is inteuld look in a real-world application.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Value