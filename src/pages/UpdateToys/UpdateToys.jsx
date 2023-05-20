import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const UpdateToys = () => {
    const {user} = useContext(UserContext)
    const ToysInfo = useLoaderData(); 
    const {_id, toy_name, toy_pic, category, price, quantity, details, rating } = ToysInfo;
    const handleUpdate = (id) => {
        event.preventDefault();
        const form = event.target;
        const toy_name = form.toy_name.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const category = form.category.value;
        const toy_pic = form.toy_pic.value;

        const updatedToy = {
            toy_name,
            price,
            rating,
            quantity,
            details,
            category,
            toy_pic
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Updated it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment11-toy-market-place-server.vercel.app/update/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire(
                'Updated!',
                'Your toy has been deleted.',
                'success'
              )
            }
        })
            }
          })
    }
    return (
        <div className="hero p-16  bg-base-200">
    <div className="card w-3/4 mx-auto  shadow-2xl bg-base-100">
      <form onSubmit={()=>handleUpdate(_id)}>
      <h2 className="text-3xl text-rose-500 font-bold text-center pt-6">Please Update Your Toy!</h2>
      <div className="card-body ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" name="toy_name" defaultValue={toy_name} placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" defaultValue={quantity} name="quantity" placeholder="Quantity" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" defaultValue={details} name="details" placeholder="Details" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-Category</span>
          </label>
          <input type="text" defaultValue={category} name="category" placeholder="Category" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} name="sellerName" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="text" defaultValue={user?.email} name="email" placeholder="Email" className="input input-bordered" />
            </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Photo URL</span>
          </label>
          <input type="text" defaultValue={toy_pic} name="toy_pic" placeholder="Photo URL" className="input input-bordered" />
            </div>
        <div className="form-control mt-6 ">
          <input className="btn bg-teal-500 border-none" type="submit" value="Update Toy" />
        </div>
      </div>
      </form>
    </div>
  </div>
    );
};

export default UpdateToys;