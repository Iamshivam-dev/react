import "../../Styles/App.css";
import AppStoreLogo from "../../Images/App_Store_(iOS)-Badge-Logo.wine.png";
import PlayStoreLogo from "../../Images/Google_Play-Badge-Logo.wine.png";
import Carousel from "./Carousel";
import ListIcon1 from "../../Images/list-icon-1.png";
import ListIcon2 from "../../Images/list-icon-2.png";
import ListIcon3 from "../../Images/list-icon-3.png";
import CityTaxiIcon from "../../Images/city-taxi.png";
import OutstationTaxiIcon from "../../Images/outstation-taxi.png";
import RentalTaxIcon from "../../Images/rentals-taxi.png";
import ArrowRightIcon from "../../Images/arrow-right.png";
import CarImg5 from "../../Images/car-img-5.png";

function Home() {
  return (
    <div className="container mt-4 mb-4">
      <div className="nav-bar row">
        <ul>
          <li>Logo</li>
          <li>Home</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="background-div-intro">
        <div className="content">
          <p>Choose From a range of cateogries and prices</p>
          <h1>
            Book a <span>City Taxi</span> to yourdestination in town
          </h1>
          <p>Download the app for the exclusive and ease of booking</p>
          <div className="download-buttons">
            <img src={PlayStoreLogo} alt="Play Store" />
            <img src={AppStoreLogo} alt="App Store" />
          </div>
          <Carousel />
        </div>
      </div>
      <div className="cards-container">
        <div>
          <div className="card">
            <h3>
              Get <span>car</span> for any Occasion
            </h3>
            <p className="card-description">
              we offers all types of cabsin hourly packages
            </p>
            <ul>
              <li>
                <img src={ListIcon1} alt="" /> Pocket Friendly
              </li>
              <li>
                <img src={ListIcon2} alt="" />
                Safe Rides
              </li>
              <li>
                <img src={ListIcon3} alt="" />
                24/7 Support
              </li>
            </ul>
          </div>
          <div className="card car-cards">
            <div className="background-circle">
              <img src={CityTaxiIcon} className="car-img" alt="" />
              <h3>City Taxi</h3>
              <span>Lorem ipsum repellat ex at cum </span>
              <div className="bottom-arrow-button">
                <div>
                  <img src={ArrowRightIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card car-cards">
            <div className="background-circle">
              <img src={RentalTaxIcon} className="car-img" alt="" />
              <h3>City Taxi</h3>
              <span>Lorem ipsum repellat ex at cum </span>
              <div className="bottom-arrow-button">
                <div>
                  <img src={ArrowRightIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card car-cards">
            <div className="background-circle">
              <img src={RentalTaxIcon} className="car-img" alt="" />
              <h3>City Taxi</h3>
              <span>Lorem ipsum repellat ex at cum </span>
              <div className="bottom-arrow-button">
                <div>
                  <img src={ArrowRightIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards2-container">
        <div className="">
          <img className="car-img-5" src={CarImg5} alt="" />
        </div>
        <div className="card-black">
          <h3>
            Get <span className="bg-theme2">Luxury Cars</span> on{" "}
            <span className="bg-theme1">Rent</span> for any occasion
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
            eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim
            ad minim veniam
          </p>
          <div className="card-black-buttons">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
