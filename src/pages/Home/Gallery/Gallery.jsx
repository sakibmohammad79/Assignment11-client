import img1 from '../../../assets/images/image1.webp'
import img2 from '../../../assets/images/image2.webp'
import img3 from '../../../assets/images/image3.webp'
import img4 from '../../../assets/images/image4.webp'
import img5 from '../../../assets/images/image5.webp'
import img6 from '../../../assets/images/image6.webp'
import img7 from '../../../assets/images/image7.webp'
import img8 from '../../../assets/images/image8.webp'
import logo1 from '../../../assets/logo/logo1.webp'
import logo2 from '../../../assets/logo/logo2.webp'
import logo3 from '../../../assets/logo/logo3.webp'
import logo4 from '../../../assets/logo/logo4.webp'
import logo5 from '../../../assets/logo/logo5.webp'
const Gallery = () => {
    return (
        <div className="my-16">
            <h3 className="font-bold text-center text-4xl">Kids Gallery</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 my-6'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
            </div>
            <div className='flex justify-around md:mx-28 mt-12 mb-6'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
            </div>
            <div className=" flex justify-center">
                <a className="btn btn-sm btn-circle border-none bg-teal-300 mr-8">❮</a> 
                <a  className="btn btn-sm btn-circle border-none bg-teal-300">❯</a>
    </div>
        </div>
    );
};

export default Gallery;