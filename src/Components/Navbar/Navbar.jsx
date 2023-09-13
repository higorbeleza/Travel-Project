import './Navbar.scss';
import { useState } from 'react';

// Imported icons
import { BiLogoMediumOld } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

export default function Navbar() {
    const [navBar, setNavBar ] = useState('menu');

    const showNavBar = () => {
        setNavBar('menu showNavbar')
    }

    const removeNavBar = () => {
        setNavBar('menu');
    }

    return (
        <div className='navBar'>
            <div className="logoDiv">
                <BiLogoMediumOld className='icon'/>
                <span>OU-Trips</span>
            </div>

            <div className={navBar}>
                <ul>
                    <li className='navList'>
                        Destination
                    </li>
                    <li className='navList'>
                        About Us
                    </li>
                    <li className='navList'>
                        Testimontial
                    </li>
                    <li className='navList'>
                        Gallery
                    </li>
                    <li className='navList'>
                        Destination
                    </li>
                </ul>
                <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar}/>
            </div>
            <button className='signUpBtn btn'>Sign Up</button>

            <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>
        </div>
    )
}