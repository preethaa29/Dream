import Booking from "../bookings/Booking";
// import Banner from "./Banner";
// import FeatureEvents from "./FeatureEvents";
import PopularEvents from "./PopularEvents";
import MagicBanner from "./magicBanner/MagicBanner";
// import Faqac from "../../pages/portfolio/faq/Faqac"

const Home = () => {
  return (
    <div>
      <MagicBanner></MagicBanner>
      {/* <Banner/> */}

      {/* <FeatureEvents/> */}
      
      <PopularEvents />

      <Booking></Booking>
      
     
      {/* <Faqac></Faqac> */}
    </div>
  );
};

export default Home;
