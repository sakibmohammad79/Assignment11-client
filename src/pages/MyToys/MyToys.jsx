import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/AuthProvider";
import MyToysTable from "./MyToysTable";


const MyToys = () => {
    const {user} = useContext(UserContext); 
    const [toys, setToys] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:5000/userToys?email=${user?.email}`)
        .then((res)=> res.json())
        .then((data) => setToys(data))
    },[user])
    return (
        <div className="">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Toys Name And Category</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
          {
                toys.map(toy => <MyToysTable
                 key={toy._id}
                 toy={toy}
                ></MyToysTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyToys;