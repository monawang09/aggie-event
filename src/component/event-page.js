import "./event_page.css";
import "./cover-page.css";


import EventAdd from "./images/EventAdd.svg";
import Freshman from "./images/FRESHMAN.svg";
import Spring from "./images/SPRING.svg";
import Sort from "./images/SORT.svg";
import Filter from "./images/FILTER.svg";
import StarWar from "./images/StarWar.svg";
import Movie from "./images/Movie.svg";
import Market from "./images/Market.svg";
import Aggie from "./images/Aggie.svg";
import BPD from "./images/BPD.svg";
import circle from './images/Ellipse3.svg'; 
import hero_image from './images/Housing.svg'; 
import SearchBar from "./SearchBar.js";
import location from "./images/Location.svg"


function EventsPage() {
  return (
    <div>
      <SearchBar></SearchBar>
      <div>
         <img src={circle} className='overlay-container' />
         <img src={hero_image} className='image-container' />
      </div>
      <div className = 'GiantUpperRectangle'/>
            <div className = 'GiantLowerRectangle'/>

            <div className = 'LongBar'/>

            <div className="first_row_container">
                <img src={StarWar} className = 'Box'/>
                <img src={Movie} className = 'Box'/>
            </div>
            <div className="second_row_container">
                <img src={StarWar} className = 'Box'/>
            </div>
            <div className="third_row_container">
                <img src={Market} className = 'Box'/>
            </div>
            <div className="fourth_row_container">
                <img src={Aggie} className = 'Box'/>
            </div>

            <div className="SegundoText">Segundo </div>
            <div className="TerceroText">Tercero </div>
            <div className="MUText">Memorial Union</div>
            <div className="GreenText">The Green </div>

            <div className = "events_logo">EVENTS </div>
            <div className = "publish_logo">PUBLISH AN EVENT </div>

            <section className="button_container">
                <button className="SortButton"><img src = {Sort}/></button>
                <button className="Location"><img src = {location}/></button>
                <button className = "FilterButton"><img src = {Filter}/></button>
                <button className="EventAdd"><img src = {EventAdd}/></button>
                <button className= "BPD"><img src = {BPD}/></button>
                <button className="FreshmanButton"><img src = {Freshman}/></button>
                <button className="SpringButton"><img src = {Spring}/></button>
            </section>

            <div className="EventType">EVENT TYPE </div>
            <div className="EventTypeContainer">
                <div className="EventTypeTitle">A - H</div>
                <div className="EventTypeContent">Art & Entertainment</div>
                <div className="EventTypeContent">Athletics and Sports</div>
                <div className="EventTypeContent">Ceremonies</div>
                <div className="EventTypeContent">Conference</div>
                <div className="EventTypeContent">Environment</div>
                <div className="EventTypeContent">Family Events/All ages</div>
                <div className="EventTypeContent">Free Events</div>
                <div className="EventTypeContent">Food</div>
                <div className="EventTypeContent">Fundraisers</div>
                <div className="EventTypeContent">Health and Wellness</div>
                <div className="EventTypeTitle">I -Z</div>
                <div className="EventTypeContent">Lectures and Seminars</div>
                <div className="EventTypeContent">Outdoor Events</div>
                <div className="EventTypeContent">Receptions</div>
                <div className="EventTypeContent">Sales</div>
                <div className="EventTypeContent">Seminars</div>
                <div className="EventTypeContent">Special Event</div>
                <div className="EventTypeContent">Student Organized</div>
                <div className="EventTypeContent">Sustainablility</div>
                <div className="EventTypeContent">Tours</div>
                <div className="EventTypeContent">Welcome/Orientation</div>
                <div className="EventTypeContent">Workshop/Training</div>
            </div>
    </div>
  );
}
export default EventsPage;
