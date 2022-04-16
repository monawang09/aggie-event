import "./cover-page.css";
import circle from './images/Ellipse3.svg'; 
import hero_image from './images/Ellipse 1.svg'; 
import minorHeroImage from './images/Ellipse 4.svg'; 
import minoroverlay from './images/Ellipse 5.svg'; 

// import logo from '.././logo.png';
// import homepage from './images/homepage_hero.jpg';

function HomePage() {
  return (
    <div>
      <div>
         {/* <img src={centerCircle} className='.centerCircle' /> */}
         <div className="circle"></div>
         <img src={circle} className='image-container' />
         <img src={hero_image} className='image-container' />
         <img src={minoroverlay} className='minorHeroImage' />
         <img src={minorHeroImage} className='minorHeroImage' />
      </div>
      <div className="title-container">NEW EVENTS </div>
      <div className="subtitle-container">  To Spice Up Your Quarter </div>
      <div className="content-container"> 
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
      nostrud exercitation ullamco laboris.
      </div>
      <div className="buttonText">Find Out More</div>
      <div className="button"> </div>
    </div>
  );
}

export default HomePage;
