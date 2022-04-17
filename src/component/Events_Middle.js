import "./Events_Middle.css";
import segundo from "./images/Rectangle 15.svg";
import tecero from "./images/Rectangle 17.svg";
import curato from "./images/Rectangle16.svg";

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
     </div>
  );
}

export default Middle;
