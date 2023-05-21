import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../../providers/AuthProvider";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from "../../../hook/useTitle";

const ToyDetails = () => {
  useTitle("Toy Details");
    const {user} = useContext(UserContext);
  const ToyDetails = useLoaderData();
  const { toy_name, toy_pic,  rating, price, quantity, details } =
    ToyDetails;
  return (
    <div className="card w-1/2 mx-auto bg-base-100 shadow-xl my-12">
      <figure className="px-10 pt-10">
        <img
          src={toy_pic}
          style={{ height: "400px", width: '100%' }}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
                <h2 className="font-bold text-teal-400 text-3xl text-start">Toy Details</h2>
                <h3><span className="text-2xl font-bold text-rose-500">Name:</span> <span className="font-bold text-slate-500">{toy_name}</span></h3>
                <h3><span className="text-2xl font-bold text-rose-500">About:</span> <span className="font-bold text-slate-500">{details}</span></h3>
                <h3><span className="text-2xl font-bold text-rose-500">Price:</span> <span className="font-bold text-slate-500">{'$'+ price}</span></h3>
                <h3><span className="text-2xl font-bold text-rose-500">Quantity:</span > <span className="font-bold text-slate-500">{quantity}</span></h3>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-teal-400 text-3xl text-start">Seller Details</h2>
                <h3><span className="text-2xl font-bold text-rose-500">Name:</span> <span className="font-bold text-slate-500">{user?.displayName}</span></h3>
                <h3><span className="text-2xl font-bold text-rose-500">Email:</span> <span className="font-bold text-slate-500">{user?.email}</span>.</h3>
                <h3><span className="text-2xl font-bold text-rose-500">Company:</span > <span className="font-bold text-slate-500">Educational Development Com.</span></h3>
                <h3><span className="text-2xl font-bold text-rose-500">Status:</span> <span className="font-bold text-slate-500">Professional</span></h3>
          </div>
        </div>
        <div className="card-actions">
          {/* <button className="btn btn-primary">Buy Now</button> */}
          <p className="flex mt-4 items-center">
          <Rating
            style={{ maxWidth: 150 }}
            value={rating}
            readOnly
        /> 
        <span className="pl-2 font-bold"> {rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
