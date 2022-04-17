import "./Events_Middle.css";
import segundo from "./images/Housing.png";
import tecero from "./images/Rectangle 17.png";
import curato from "./images/Rectangle 16.png";
import leftarrow from "./images/arrowl.svg";
import rightarrow from "./images/arrowr.svg";

function Middle(props) {
  return (
    <div>
      <div className="location">SELECT YOUR LOCATION</div>
      <div id="box">
        <img src={segundo} className="rc-container" /> 
        <img src={tecero} className="rc-container" />
        <img src={curato} className="rc-container" />
      </div>
      <div id='text'>
          <div className="text-style">Segundo</div>
          <div className="text-style">Tecero</div>
          <div className="text-style">Curato</div>
      </div>
        <img src={leftarrow} className="leftarrow" />
        <img src={rightarrow} className="rightarrow" />
     </div>
  );
}

export default Middle;
