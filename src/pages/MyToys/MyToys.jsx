import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";


const MyToys = () => {
    const {user} = useContext(UserContext); 
    const [toys, setToys] = useState([]);
    useTitle('My Toys');

    useEffect(()=> {
        fetch(`https://assignment11-toy-market-place-server.vercel.app/userToys?email=${user?.email}`)
        .then((res)=> res.json())
        .then((data) => setToys(data))
    },[user])

    const handleDelete= (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment11-toy-market-place-server.vercel.app/toys/${id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const remaining = toys.filter(toy => toy._id !== id);
                setToys(remaining);
                if(data.deletedCount>0){
                 Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
             }
        })   
            }
          })
        
    }

    return (
        <div className="">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                Delete
              </th>
              <th>Toy Name And Sub-Category</th>
              <th>Seller Name</th>
              <th>Seller email</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>rating</th>
              <th>Details</th>
              <th>Customize</th>
            </tr>
          </thead>
          <tbody>
          {
                toys.map(toy => <MyToysTable
                 key={toy._id}
                 toy={toy}
                 handleDelete={handleDelete}
                ></MyToysTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyToys;