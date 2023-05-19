import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  console.log(toys);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
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
                toys.map(toy => <ToysCard
                 key={toy._id}
                 toy={toy}
                ></ToysCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
