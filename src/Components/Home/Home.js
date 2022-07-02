import "../../Styles/Home.css";
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
import SmallBikeImg from "../../Images/small-bike-img.png";
import SmallCar1 from "../../Images/small-car-img.png";
import SmallCar2 from "../../Images/small-car2-img.png";
import SmallCar3 from "../../Images/small-car3-img.png";
import SmallCar4 from "../../Images/small-car4-img.png";
import SmallCar5 from "../../Images/small-car5-img.png";
import SmallCar6 from "../../Images/small-car6-img.png";
import SmallCar7 from "../../Images/small-car7-img.png";
import CarImg5 from "../../Images/car-img-5.png";
import SupportIcon from "../../Images/support-icon.png";
import CarIcon from "../../Images/car-icon.png";
import AutomaticIcon from "../../Images/automatic-icon.png";
import PetrolPumpIcon from "../../Images/petrol-pump-icon.png";
import RoadIcon from "../../Images/road-icon.png";
import LocationIcon from "../../Images/location-icon.png";
import BannerBigCar from "../../Images/banner-big-car.png";
import YellowTaxiImg from "../../Images/yellow-taxi.png";
import YellowTaxiIcon from "../../Images/yellow-taxi-icon.png";
import YellowAdsIcon from "../../Images/yellow-ads-icon.png";
import YellowTimeIcon from "../../Images/yellow-time-icon.png";
import PhonesTwoPic from "../../Images/phones-two-pic.png";
import ContactPhoneImg from "../../Images/customer-service.png";
import ContactMailImg from "../../Images/email.png";
import { Button } from "react-bootstrap";
import NavBar from "../NavBar";

function Home() {
  return (
    <div className="container mt-4 mb-4">
      <NavBar />
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
              <div className="car-img-container">
                <img src={CityTaxiIcon} className="car-img img-fixed" alt="" />
              </div>
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
              <div className="car-img-container">
                <img src={RentalTaxIcon} className="car-img" alt="" />
              </div>
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
              <div className="car-img-container">
                <img src={RentalTaxIcon} className="car-img" alt="" />
              </div>
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
      <div className="cards2-container align-items-center">
        <div>
          <img className="car-img-5" src={CarImg5} alt="" />
        </div>
        <div className="card-black">
          <h3>
            Get <span className="color-theme2">Luxury Cars</span> on{" "}
            <span className="color-theme1">Rent</span> for any occasion
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
            eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim
            ad minim veniam
          </p>
          <div className="card-black-buttons">
            <div>
              <Button className="bg-theme2">Rent Luxury</Button>
            </div>
            <div>
              <img src={SupportIcon} alt="" />
              <span>24/7 Support</span>
            </div>
            <div>
              <img src={CarIcon} alt="" />
              <span>Safe Rides </span>
            </div>
          </div>
        </div>
      </div>
      <div className="div-05">
        <div className="">
          <h3>
            Find Your <span className="color-theme1">Best</span> Vehicle
          </h3>
          <span>The widest variety of cars to choose from</span>
        </div>
        <div className="multiple-cars-rows-container">
          <div>
            <div className="small-car-img-container">
              <img src={SmallBikeImg} alt="" />
              <span>BIKES</span>
            </div>
          </div>
          <div>
            <div className="small-car-img-container bg-theme1">
              <img src={SmallCar1} alt="" />
              <span>MICRO</span>
            </div>
          </div>
          <div>
            <div className="small-car-img-container">
              <img src={SmallCar2} alt="" />
              <span>SEDAN</span>
            </div>
          </div>
          <div>
            <div className="small-car-img-container">
              <img src={SmallCar3} alt="" />
              <span>SUV</span>
            </div>
          </div>
          <div>
            <div className="small-car-img-container">
              <img src={SmallCar4} alt="" />
              <span>SUPER CAR</span>
            </div>
          </div>
          <div>
            <div className="small-car-img-container">
              <img src={SmallCar5} alt="" />
              <span>CABRIOLET</span>
            </div>
          </div>
          <div>
            <div className="small-car-img-container">
              <img src={SmallCar6} alt="" />
              <span>AUTO RIK</span>
            </div>
          </div>
          <div>
            <div className="small-car-img-container">
              <img src={SmallCar7} alt="" />
              <span>CAMPERVAN</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-theme1 w-100 bottom-banner1">
        <div>
          <h2>MS Celerio</h2>
          <span>Registered 2020</span>
          <br />
          <Button className="bg-theme-dark color-theme1">₹ 2500/Day</Button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <div className="light-left-border">
          <ul>
            <li>
              <div>
                <img src={AutomaticIcon} alt="" />
              </div>
              <span>Automatic</span>
            </li>
            <li>
              <div>
                <img src={PetrolPumpIcon} alt="" />
              </div>
              <span>Diesel</span>
            </li>
            <li>
              <div>
                <img src={RoadIcon} alt="" />
              </div>
              <span>32.0 km</span>
            </li>
            <li>
              <div>
                <img src={LocationIcon} alt="" />
              </div>
              <span>Vishalpur</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="banner-big-car-container">
            <img src={BannerBigCar} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-theme-dark w-100 bottom-banner1 bottom-banner2">
        <div>
          <img src={YellowTaxiImg} alt="" />
        </div>
        <div className="text-white">
          <h2>Advertise with Cabby</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
            eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim
            ad minim veniam
          </p>
          <ul>
            <li>
              <div>
                {" "}
                <img src={YellowTaxiIcon} alt="" />
              </div>{" "}
              <span>Choose taxi model</span>
            </li>
            <li>
              <div>
                {" "}
                <img src={YellowAdsIcon} alt="" />
              </div>{" "}
              <span>Choose advertising position</span>
            </li>
            <li>
              <div>
                {" "}
                <img src={YellowTimeIcon} alt="" />
              </div>
              <span>Select time period</span>
            </li>
          </ul>
          <div className="get-advertised-div">
            <Button className="bg-theme2">Get Advertised</Button>
          </div>
        </div>
      </div>

      <div className="bg-theme-dark w-100 bottom-banner1 bottom-banner2 bottom-banner3 text-white">
        <div>
          <p>Download the app for exclusive deals and ease of booking</p>
          <h2>
            Download <span className="color-theme1">Cabby</span> App FromYour
            Gadget.
          </h2>
          <div className="download-buttons">
            <img src={PlayStoreLogo} alt="" />
            <img src={AppStoreLogo} alt="" />
          </div>
        </div>
        <div className="two-phones-pic-container">
          <img src={PhonesTwoPic} alt="" />
        </div>
      </div>

      <div className="last-block">
        <span className="color-theme1">HOW CAN WE HELP YOU?</span>
        <h3>Have a Question?</h3>
        <p>
          If you have any comments, suggestions or questions, please do not
          hesitate to contact us.Our high-quality office staff will help you and
          answer all your questions.
        </p>
      </div>

      <div className="contact-row">
        <div>
          <div>
            <img src={ContactPhoneImg} alt="" />
          </div>
          <div>
          <h5>Our Address</h5>
          <span>550 Mill Pond Ave. Arlington,MA 02474</span>

          </div>
        </div>
        <div>
          <div>
            <img src={ContactPhoneImg} alt="" />
          </div>
          <div>
          <h5>Our Phones</h5>
          <span>08005553210800533312</span>

          </div>
        </div>
        <div>
          <div>
            <img src={ContactMailImg} alt="" />
          </div>
          <div>
          <h5>Our Mails </h5>
          <span>contact@cabby.comhelp@cabby.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
