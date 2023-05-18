import { useEffect, useState } from "react";
import CognitiveToysList from "./CognitiveToysList";


const CognitiveToys = () => {
    const [toys, setToys] = useState([]);
    console.log(toys);
    useEffect(()=>{
        fetch('http://localhost:5000/toys?category=Cognitive%20Development%20Toys')
        .then((res)=>res.json())
        .then((data)=>setToys(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 px-12">
            {
                 toys.map(toy => <CognitiveToysList
                    key={toy._id}
                    toy={toy}
                    ></CognitiveToysList>)
                
            }
           
        </div>
    );
};

export default CognitiveToys;