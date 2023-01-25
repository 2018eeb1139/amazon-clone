import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123"
          title="Apple iPhone 12 (64GB) - Purple"
          image="https://m.media-amazon.com/images/I/71hIfcIPyxS._SX679_.jpg"
          price={54499}
          rating={3}
        />
        <Product
          id="123456"
          title="Acer 139 cm (55 inches) I Series 4K Ultra HD Android Smart LED TV AR55AR2851UDFL (Black)"
          image="https://m.media-amazon.com/images/I/41ECCMs7tjL._SY300_SX300_QL70_FMwebp_.jpg"
          price={32999}
          rating={3}
        />
        <Product
          id="123457"
          title="Raytrees Engineered Wooden Set of Two Butterfly Wall Shelf/Stand (33 cm X 12 cm X 25 cm, Brown"
          image="https://m.media-amazon.com/images/I/619zMux4BaL._SX679_.jpg"
          price={1049}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="123458"
          title="The Learn Startup: How Constant Innovation Creates Radically Successfully Business Paperback"
          image="https://m.media-amazon.com/images/I/81RCff1NpnL.jpg"
          price={606}
          rating={3}
        />
        <Product
          id="123459"
          title="MuscleBlaze Biozyme Performance Whey Protein | Clinically Tested 50% Higher Protein Absorption | Informed Choice UK, Labdoor USA Certified & US Patent Filed EAF® (Rich Chocolate, 1 kg / 2.2 lb)"
          image="https://m.media-amazon.com/images/I/41BERqVx-zS._SX300_SY300_QL70_FMwebp_.jpg"
          price={2649}
          rating={4}
        />
        <Product
          id="123460"
          title="Foso Wall Mount for Alexa Echo Dot 3rd Gen, Bracket Stand Holder for Smart Speaker, Built-in Cable Management Hide Messy Wires, for Kitchen, Bedroom & Bathroom(Speaker not Included) (Black)"
          image="https://m.media-amazon.com/images/I/31y-B+cF+2L._SY300_SX300_.jpg"
          price={399}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="123461"
          title="Lenovo Legion 5 Pro AMD Ryzen 7 5800H40cm 500Nits QHD Gaming Laptop(16GB/1TB SSD/RTX 3060 6GB GDDR6 Graphics/165Hz/Windows 11/Office 2021/RGB Backlit/3mnth Xbox Game Pass/Storm Grey/2.45Kg)82JQ00JCIN"
          image="https://m.media-amazon.com/images/I/71glTO3lJNL._SX679_.jpg"
          price={131490}
          rating={5}
        />
        <Product
          id="12341"
          title="OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
          image="https://m.media-amazon.com/images/I/71poFSdDs5S._SX679_.jpg"
          price={15490}
          rating={4}
        />
        <Product
          id="123412"
          title="SS ARTS Wood Plastic Wall Shelf (13Cm X 24Cm X 38 Cm, White)"
          image="https://m.media-amazon.com/images/I/41mPf2uSCWL.jpg"
          price={489}
          rating={4}
        />
        <Product
          id="12341233"
          title="ExclusiveLane Wooden Wall Shelf with Terracotta Warli Handpainted Face Pots - Wall Hanging Decor Home Decorative Items Indoor Decoration Gift Item (EL-002-039)"
          image="https://m.media-amazon.com/images/I/61b9YOntiCL._SX522_.jpg"
          price={2396}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="12341231"
          title="iQOO Z6 5G by vivo (Chromatic Blue, 6GB RAM, 128GB Storage) | Snapdragon 695-6nm Processor | 120Hz FHD+ Display | 5000mAh Battery"
          image="https://m.media-amazon.com/images/I/61cU9G3nwVL._SX679_.jpg"
          price={16499}
          rating={4}
        />
        <Product
          id="1"
          title="AmazonBasics Height Adjustable 3-Shelves Heavy Duty Rack with Wheels (Black)"
          image="https://m.media-amazon.com/images/I/81jl-5vKYaL._SY741_.jpg"
          price={2039}
          rating={3}
        />
        <Product
          id="12"
          title="AmazonBasics C Cell Everyday Alkaline Batteries (4-Pack)"
          image="https://m.media-amazon.com/images/I/71yhMGi-6gL._SX522_.jpg"
          price={279}
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id="11"
          title="ZEBRONICS Zeb-Thunder Bluetooth Wireless Over Ear Headphone FM, mSD, 9 hrs Playback with Mic (Black)"
          image="https://m.media-amazon.com/images/I/71O7+VmlvVL._SX522_.jpg"
          price={599}
          rating={3}
        />
        <Product
          id="111"
          title="HP All-in-One AMD Ryzen 3 3250U-21.5 inch(54.61cm) FHD, Micro-Edge, Anti-Glare Display/8GB RAM/1TB HDD/Wireless Keyboard & Mouse/AMD Radeon Graphics/720p HD Camera/Win 11/MSO 2021, 22-dd0302in"
          image="https://m.media-amazon.com/images/I/41YhX3S8niL._SX300_SY300_QL70_FMwebp_.jpg"
          price={34490}
          rating={5}
        />
        <Product
          id="121"
          title="Cyrill Spigen Leather Brick Airpods Pro Cover Case Compatible with Apple Airpods Pro (Faux Leather + TPU) - Black"
          image="https://m.media-amazon.com/images/I/6161HO3rQmL._SX679_.jpg"
          price={978}
          rating={4}
        />
        <Product
          id="131"
          title="Reach AB-110 BST Air Bike Exercise Cycle with Moving or Stationary Handle | with Back Support Seat & Twister | Adjustable Resistance | Fitness Cycle for Home Gym"
          image="https://m.media-amazon.com/images/I/51-3qDmfc2L._SX679_.jpg"
          price={5999}
          rating={5}
        />
        <Product
          id="131"
          title="Reach AB-110 BST Air Bike Exercise Cycle with Moving or Stationary Handle | with Back Support Seat & Twister | Adjustable Resistance | Fitness Cycle for Home Gym"
          image="https://m.media-amazon.com/images/I/51-3qDmfc2L._SX679_.jpg"
          price={5999}
          rating={5}
        />
      </div>
      <div className="home__row"></div>
      <div className="home__row"></div>
    </div>
  );
};

export default Home;
