import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState('');
  console.log(toys);

  useEffect(() => {
    fetch("https://assignment11-toy-market-place-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const handleSearch = () => {
    fetch(`https://assignment11-toy-market-place-server.vercel.app/getJobsByText/${searchText}`)
    .then((res) => res.json())
    .then(data => {
      setToys(data);
    })
  }
  return (
    <div>
      <div className="form-control my-8 w-1/4 ml-auto">
        <div className="input-group">
          <input
          onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
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
            {toys.map((toy) => (
              <ToysCard key={toy._id} toy={toy}></ToysCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
