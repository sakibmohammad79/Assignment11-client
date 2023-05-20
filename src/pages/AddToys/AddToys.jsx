import { useContext } from "react";
import { UserContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const AddToys = () => {
  useTitle('Add Toys')
    const {user} = useContext(UserContext);
    const handlerAddToys = (event) => {
        event.preventDefault();
        const form = event.target;
        const toy_name = form.toy_name.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const category = form.category.value;
        const toy_pic = form.toy_pic.value;
        const sellerName = user?.displayName;
        const email = user?.email;

        const newToy = {
            toy_name,
            price,
            rating,
            quantity,
            details,
            category,
            toy_pic,
            email,
            sellerName
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, added it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch('https://assignment11-toy-market-place-server.vercel.app/toys', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.insertedId){
                  Swal.fire(
                'Added!',
                'Your toys has been added.',
                'success'
              )
              form.reset();
            }
        })
        }
        })   
    }
    return (
    <div className="hero p-16  bg-base-200">
    <div className="card w-3/4 mx-auto  shadow-2xl bg-base-100">
      <form onSubmit={handlerAddToys}>
      <h2 className="text-3xl text-rose-500 font-bold text-center pt-6">ADD YOUR FAVOURITE TOY!</h2>
      <div className="card-body ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" name="toy_name" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" placeholder="Price" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name="details" placeholder="Details" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-Category</span>
          </label>
          <input type="text" name="category" placeholder="Category" className="input input-bordered" />
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
          <input type="text" name="toy_pic" placeholder="Photo URL" className="input input-bordered" />
            </div>

        <div className="form-control mt-6 ">
          <input className="btn bg-teal-500 border-none" type="submit" value="ADD TOY" />
        </div>
      </div>
      </form>
    </div>
  </div>
    );
};

export default AddToys;