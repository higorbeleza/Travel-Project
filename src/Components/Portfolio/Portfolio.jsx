import './Portfolio.scss';

import icon1 from '../../assets/protection.png';
import icon2 from '../../assets/destination.png';
import icon3 from '../../assets/online-chat.png';

export default function Portfolio() {
    return (
        <div className='portfolio section container'>
            <div className="secContainer grid">
                <div className="leftContent">
                    <div className="secHeading">
                        <h3>Why Should You Choose Us</h3>
                        <p>We have extensive knowledge and experience in the travel industry</p>
                    </div>

                    <div className="grid">
                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon1} alt="" />
                            </div>

                            <div className="info">
                                <h4>Safety and support</h4>
                                <p>
                                    Our top priority is the safety and well-being of our clients.
                                    We maintain high safety standards and have emergency support available during the trip.
                                </p>
                            </div>
                        </div>

                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon2} alt="" />
                            </div>

                            <div className="info">
                                <h4>Diverse Range of Destinations</h4>
                                <p>
                                    Whether it's a domestic tour or an international adventure, we cover a wide
                                    range os destinations to cater to different interests and preferences.
                                </p>
                            </div>
                        </div>

                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon3} alt="" />
                            </div>

                            <div className="info">
                                <h4>24/7 Customer Support</h4>
                                <p>
                                    Our dedicated customer support team is available round the clock to addrres any queries or concerns
                                    before, during, and after the trip.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightContent">
                    
                </div>
            </div>
        </div>
    )
}