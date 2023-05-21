import { Link } from "react-router-dom"
import logo from '../../../assets/logo1.png'
import { useContext } from "react";
import { UserContext } from "../../../providers/AuthProvider";
import Tippy from "@tippyjs/react";
const Header = () => {
  const {user, logOut} = useContext(UserContext);

    const handleLogOut = () =>{
        logOut()
        .then(result => console.log(result))
        .catch(error => console.log(error.message))
    }
    const navItems =
        <>
          <li><Link className="text-rose-500 hover:text-teal-600 font-bold" to="/">Home</Link> </li>
          <li><Link className="text-rose-500 hover:text-teal-600 font-bold"  to="/alltoys">All Toys</Link></li>
          { user &&
            <>
            <li><Link className="text-rose-500 hover:text-teal-600 font-bold"  to="/addtoys">Add A Toys</Link></li>
            <li><Link className="text-rose-500 hover:text-teal-600 font-bold"  to="/mytoys">My Toys</Link></li>
            </>
          }
          <li><Link className="text-rose-500 hover:text-teal-600 font-bold" to="/blog">Blog</Link></li>
        </>
  return (
    <div className="navbar bg-teal-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
       <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navItems}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="mr-4">
      {
            user && 
                  <>
                <Tippy  content={user.displayName}><img className=" text-white rounded-full" src={user?.photoURL} style={{height: '50px', width: '50px'}}/></Tippy>
            </>
        }
      </div>
        {
          user ? 
          <Link onClick={handleLogOut} className="btn bg-rose-500 border-none">Sign Out</Link> :
          <Link to='/login' className="btn bg-rose-500 border-none">Login</Link>
        }
      </div>
    </div>
  );
};

export default Header;
