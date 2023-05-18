

const CognitiveToysList = ({toy}) => {
    const { toy_pic, toy_name, price, rating} = toy;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={toy_pic}
          alt="Movie"
          style={{height: '200px', width: '200px'}}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{toy_name}</h2>
        <p className="font-bold ">Price: {'$'+price}</p>
        <p className="font-bold">rating: {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-teal-400 border-none">View Details</button>
        </div>
      </div>
    </div>
    );
};

export default CognitiveToysList;