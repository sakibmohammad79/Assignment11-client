import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../providers/AuthProvider';

const CognitiveToysList = ({toy}) => {
  const {user} = useContext(UserContext)

    const { _id, toy_pic, toy_name, price, rating} = toy;

    const handleToast = () => {
      if(!user){
        toast("You have to log in first to view details!");
      }
     }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={toy_pic}
          alt="Movie"
          style={{height: '200px', width: '200px'}}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{toy_name}</h2>
        <p className="font-bold ">Price: {'$'+price}</p>
        <div className='flex'>
        <Rating
            style={{ maxWidth: 110 }}
            value={rating}
            readOnly
        />
        <p className="font-bold">{rating}</p>
        </div>
        <div className="card-actions justify-end">
        <Link to={`/toysdetails/${_id}`}><button onClick={handleToast} className="btn bg-teal-400 border-none">View Details</button></Link>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default CognitiveToysList;