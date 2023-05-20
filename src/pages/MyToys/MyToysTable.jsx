import { useContext } from "react";
import { UserContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyToysTable = ({ toy, handleDelete }) => {
  const { user } = useContext(UserContext);
  const { _id, toy_pic, toy_name, category, price, details, quantity, rating } = toy;
  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle bg-teal-400 border-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
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
        <p className="font-bold">{user.displayName}</p>
      </td>

      <td>{user?.email}</td>
      <td>{'$'+price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>{details}</td>
      <th>
        <Link to={`/updatetoys/${_id}`}><button className="btn bg-teal-400 border-none">Update</button></Link>
      </th>
    </tr>
  );
};

export default MyToysTable;
