import { useContext } from "react";
import { UserContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToysCard = ({toy}) => {
    const {user} = useContext(UserContext)
    const { _id, toy_pic, toy_name, category, price, quantity, sellerName } = toy;

    const handleToast = () => {
      if(!user){
        toast("You have to log in first to view details!");
      }
    }
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toy_pic} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{toy_name}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td>
          <p className="font-bold text-slate-600">{sellerName}</p>
        </td>
        <td>{'$'+price}</td>
        <td>{quantity}</td>
        <th>
          <Link to={`/toysdetails/${_id}`}><button onClick={handleToast} className="btn bg-teal-400 border-none">Details</button></Link>
        </th>
        <ToastContainer></ToastContainer>
      </tr>
    );
};

export default ToysCard;