import { useEffect, useState } from "react";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    console.log(toys);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
        .then((res) => res.json())
        .then((data) => setToys(data));
    },[])
    return (
        <div>
            {/* {
                toys.map(toy => )
            } */}
        </div>
    );
};

export default AllToys;