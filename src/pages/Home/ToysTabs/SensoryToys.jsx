import { useEffect, useState } from "react";
import SensoryToysList from "./SensoryToysList";


const SensoryToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(()=>{
        fetch('https://assignment11-toy-market-place-server.vercel.app/toys?category=Sensory%20Development%20Toys')
        .then((res)=>res.json())
        .then((data)=>setToys(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 max-w-6xl mx-auto">
            {
                toys.map(toy => <SensoryToysList
                key={toy._id}
                toy={toy}
                ></SensoryToysList>)
                
            }  
        </div>
    );
};

export default SensoryToys;