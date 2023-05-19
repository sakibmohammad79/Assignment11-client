import { useEffect, useState } from "react";
import MotorToysList from "./MotorToysList";


const MotorToys = () => {
    const [toys, setToys] = useState([]);
    console.log(toys);
    useEffect(()=>{
        fetch('https://assignment11-toy-market-place-server.vercel.app/toys?category=Motor%20Skills%20Development%20Toys')
        .then((res)=>res.json())
        .then((data)=>setToys(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 max-w-6xl mx-auto">
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