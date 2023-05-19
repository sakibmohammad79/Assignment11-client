import { useContext } from "react";
import { UserContext } from "../../providers/AuthProvider";

const MyToysTable = ({toy}) => {
    const {user} = useContext(UserContext)
    const {toy_pic, toy_name, category, price, quantity, } = toy;
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
          <p className="badge badge-ghost badge-sm font-bold">{user.displayName}</p>
        </td>
        <td>{price}</td>
        <td>{quantity}</td>
        <th>
          <button className="btn btn-ghost btn-xs">View Details</button>
        </th>
      </tr>
    );
};

export default MyToysTable;