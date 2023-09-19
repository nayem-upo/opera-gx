import Banner from "./Components/Banner";
import Features from "./Components/Features";
import GxBanner from "./Components/GxBanner";
import Header from "./Components/Header";
import InterfaceBanner from "./Components/InterfaceBanner";
import Modes from "./Components/Modes";
import Themes from "./Components/Themes";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="bg-[#131019]">
                <Banner></Banner>
                <InterfaceBanner />
                <GxBanner></GxBanner>
                <Features />
                <Themes />
                <Modes></Modes>
            </div>

        </div>
    );
};

export default Home;