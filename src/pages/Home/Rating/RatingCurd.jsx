import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RatingCurd = ({ singleRating }) => {
  const { client_img, name, rating, comment, comment_time, client } = singleRating;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
      <img className='rounded-full border-2 border-yellow-500' style={{height: '50px', width: '50px'}} src={client_img} alt="Shoes" />
      <Rating
            style={{ maxWidth: 110 }}
            value={rating}
            readOnly
        />
        <h2 className="card-title">{name}</h2>
        <p className='font-medium text-slate-500'>{comment}</p>
       <div className='flex justify-between'>
        <p className='font-bold text-teal-400'>{comment_time}</p>
        <p className='font-bold text-teal-400'>{client}</p>
       </div>
      </div>
    </div>
  );
};

export default RatingCurd;
