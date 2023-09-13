import './Reviews.scss';
import { AiFillStar } from 'react-icons/ai';
import image from '../../assets/client-img.jpg';
import imageGirl from '../../assets/girl.jpg';

export default function Reviews() {
    return (
        <div className="reviews section container">
            <div className="secContainer grid">
                <div className="textDiv">
                    <span className="redText">
                        FROM OUR CLIENTS
                    </span>
                    <h3>Real Travel History From Our Beloved Clients</h3>
                    <p>
                        By choosing us as their tour agency, customers can expect an enriching and enjoyable travel experience, filled with unforgettable memories that will last a lifetime
                    </p>

                    <span className='stars flex'>
                        <AiFillStar className='icon'/>
                        <AiFillStar className='icon'/>
                        <AiFillStar className='icon'/>
                        <AiFillStar className='icon'/>
                        <AiFillStar className='icon'/>
                    </span>

                    <div className="clientsImages flex">
                        <img src={image} alt="cliente image" />
                        <img src={image} alt="cliente image" />
                        <img src={image} alt="cliente image" />
                        <img src={image} alt="cliente image" />
                        <img src={image} alt="cliente image" />
                    </div>
                </div>

                <div className="imgDiv">
                    <img src={imageGirl} alt="" />
                </div>
            </div>
        </div>
    )
}