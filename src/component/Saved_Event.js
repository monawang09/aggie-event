import "./Saved_Event.css";
import mask from "./images/Rectangle 102.svg";
import picnic from "./images/Rectangle 105.svg";
import starwar from "./images/Rectangle 101.svg";
import forest from "./images/Rectangle 103.svg";
import vector from "./images/Vector.svg";

function HomePage() {
  return (
    <div>
      <div className="title1">SAVED EVENTS</div>
      <div id="eventBox">
        <img src={picnic} className="pic" />
        <img src={forest} className="pic" />
        <img src={starwar} className="pic" />
      </div>
      <div id="overlay">
        <img src={mask} className="overlaymask" />
        <img src={mask} className="overlaymask" />
        <img src={mask} className="overlaymask" />
      </div>
      <div id="vector">
        <img src={vector} className="vectorpic" />
        <img src={vector} className="vectorpic" />
        <img src={vector} className="vectorpic" />
      </div>
      <div id="font">
          <div className="font-container">Aggie Gala</div>
          <div className="font-container">Star Wars Themed Meal</div>
          <div className="font-container">Picnic Day</div>
      </div>
      
    </div>
  );
}

export default HomePage;
