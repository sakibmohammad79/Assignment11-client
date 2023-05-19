
const AddToys = () => {
    return (
    <div className="hero p-16  bg-base-200">
    <div className="card w-3/4 mx-auto  shadow-2xl bg-base-100">
      <form>
      <h2 className="text-3xl text-rose-500 font-bold text-center pt-6">Your Favourite Toy Add!</h2>
      <div className="card-body ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" name="toyName" placeholder="Name" className="input input-bordered" />
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
          <input type="text" name="sellerName" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="text" name="email" placeholder="Email" className="input input-bordered" />
            </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
            </div>

        <div className="form-control mt-6 w-full">
          <button className="btn bg-teal-500 border-none">Add Toy</button>
        </div>
      </div>
      </form>
    </div>
  </div>
    );
};

export default AddToys;