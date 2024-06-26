
import Banner from "../../components/HomeComponents/Banner";
import BlogPost from "../../components/HomeComponents/BlogPost";
import Comments from "../../components/HomeComponents/Comments";
import ContactUs from "../../components/HomeComponents/ContactUs";
import Info from "../../components/HomeComponents/Info";
import FeaturedCars from "../../components/featuredCars/FeaturedCars";
import Navbar from "../../components/Navbar/Navbar"

const Home = () => {


    return (
        <div>
            <Navbar />
            <Banner></Banner>
            <Info></Info>
            <FeaturedCars />
            <Comments></Comments>
            <BlogPost></BlogPost>
            <ContactUs></ContactUs>
            <Comments></Comments>


        </div>
    );
};

export default Home;