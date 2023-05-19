import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  console.log(toys);

  useEffect(() => {
    fetch("https://assignment11-toy-market-place-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
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
              <th>View Details</th>
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
