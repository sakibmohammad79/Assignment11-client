import { useEffect, useState } from "react";
import RatingCurd from "./RatingCurd";

const Rating = () => {
    const [rating, setRating] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/client')
        .then((res) => res.json())
        .then((data) => setRating(data))
    },[])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl
        mx-auto my-24">
            {
                rating.map(singleRating => <RatingCurd
                key={singleRating._id}
                singleRating={singleRating}
                ></RatingCurd>)
            }
        </div>
    );
};

export default Rating;