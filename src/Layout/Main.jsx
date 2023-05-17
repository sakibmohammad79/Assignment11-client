import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;