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
                <h3>Name: {toy_name}</h3>
                <h3>About: {details}.</h3>
                <h3>Price: {'$'+ price}</h3>
                <h3>Quantity: {quantity}</h3>
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-teal-400 text-3xl text-start">Seller Details</h2>
                <h3>Name: {user?.displayName}</h3>
                <h3>Email: {user?.email}.</h3>
                <h3>Company: Educational Development Co.</h3>
                <h3>Status: Professional</h3>
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
