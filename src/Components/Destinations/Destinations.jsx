import './Destinations.scss';
import { MdLocationPin } from 'react-icons/md';
import { BsFillCreditCardFill, BsFillCalendarDateFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';


export default function Destinations() {
    const destinations = [
        {
            id: 1,
            img: image1,
            name: 'Brown Cabin Near Trees and Mountains',
            location: 'Amazonas',
            rating: 4.9
        },
        {
            id: 2,
            img: image2,
            name: 'Brown Cabin Near Trees and Mountains',
            location: 'Amazonas',
            rating: 4.8
        },
        {
            id: 3,
            img: image3,
            name: 'Brown Cabin Near Trees and Mountains',
            location: 'Amazonas',
            rating: 4.2
        }
    ]

    return (
        <div className="destinations sections container">
            <div className="secContainer">
                <div className="">
                    <span className='redText'>EXPLORE NOW</span>
                    <h3>Find Your Dream Destination</h3>
                    <p>Fill in the fields below to find the best spot for your next tour.</p>
                </div>

                <div className="searchField grid">
                    <div className="inputField flex">
                        <MdLocationPin className='icon' />
                        <input type="text" placeholder='Location' />
                    </div>

                    <div className="inputField flex">
                        <BsFillCreditCardFill className='icon' />
                        <input type="text" placeholder='Budget' />
                    </div>

                    <div className="inputField flex">
                        <BsFillCalendarDateFill className='icon' />
                        <input type="text" placeholder='Date' />
                    </div>

                    <button className='btn flex'>
                        <BiSearchAlt className='icon' />  Search
                    </button>
                </div>

                <div className="secMenu">
                    <ul className="flex">
                        <li className="active"></li>
                        <li>Recommended</li>
                        <li>Beach</li>
                        <li>Park</li>
                        <li>Nature</li>
                        <li>Mountain</li>
                    </ul>
                </div>

                <div className="destinationContainer grid">
                    {destinations.map((destination) => {
                        return (
                            <div className="singleDestination" key={destination.id}>
                                <div className="imgDiv">
                                    <img src={destination.img} alt="Destination image" />

                                    <div className="descInfo flex">
                                        <div className="text">
                                            <span className="name">
                                                {destination.name}
                                            </span>
                                            <p className="flex">
                                                <TiLocation className='icon' />
                                                {destination.location}
                                            </p>
                                        </div>

                                        <span className="rating">
                                            {destination.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}