import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto justify-center items-center mb-24 mt-24">
      <div>
        <img
          style={{ height: "350px", width:'100%' }}
          src="https://i.postimg.cc/zD2KMTT7/7798354.jpg"
          alt=""
        />
      </div>
      <div className="text-center space-y-4">
        <h3 className="text-4xl font-extrabold">News Letter</h3>
        <p className="font-semibold">Subscribe Now For Exclusive Offers</p>
        <div className="form-control  w-3/4 mx-auto">
          <label className="input-group">
            <span className="bg-teal-400 font-bold">Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="flex justify-center items-center space-x-4">
        <Link><FaFacebook style={{height: '2rem', width: '2rem'}}/></Link>
        <Link><FaTwitter style={{height: '2rem', width: '2rem'}}/></Link>
        <Link><FaInstagram style={{height: '2rem', width: '2rem'}}/></Link>
        <Link><FaYoutube style={{height: '2rem', width: '2rem'}}/></Link>
        </div>
      </div>
      <div>
        <img
          style={{ height: "350px", width: '100%' }}
          src="https://i.postimg.cc/kgsn1vbX/4011306.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default NewsLetter;
