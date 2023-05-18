import { useEffect, useState } from "react";
import MotorToysList from "./MotorToysList";


const MotorToys = () => {
    const [toys, setToys] = useState([]);
    console.log(toys);
    useEffect(()=>{
        fetch('http://localhost:5000/toys?category=Motor%20Skills%20Development%20Toys')
        .then((res)=>res.json())
        .then((data)=>setToys(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 px-12">
            {
                toys.map(toy => <MotorToysList
                key={toy._id}
                toy={toy}
                ></MotorToysList>)
                
            }
           
        </div>
    );
};

export default MotorToys;