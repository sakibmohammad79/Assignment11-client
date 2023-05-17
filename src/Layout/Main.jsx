import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <outlet></outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;