import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewsLetter from "../NewsLetter/NewsLetter";
import Rating from "../Rating/Rating";
import ToysTabs from "../ToysTabs/ToysTabs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToysTabs></ToysTabs>
            <NewsLetter></NewsLetter>
            <Rating></Rating>
        </div>
    );
};

export default Home;