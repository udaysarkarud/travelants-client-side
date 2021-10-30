import React from 'react';

const AboutSection = () => {
    return (
        <section className="container section-gap">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <h1>Best Money - North America</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempo incididunt ut
                        labore et dolore magna aliqua. Ut enim ad tinim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquipeea commodolaboris nisi ut aliquipeea</p>
                    <div className="best-money-price">
                        <span className="old-price text-decoration-line-through">$ 800</span>
                        <span className="new-price">$500</span>
                        <span>/ FOR PERSON</span>
                    </div>
                    <a href="#" className="btn my-3">BOOK NOW</a>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="best-money-img w-img">
                        <img className="img-fluid" src="img/best_money/best-money.jpg" alt="best-money" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;