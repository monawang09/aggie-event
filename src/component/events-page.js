import "./events-page.css"
import EventAdd from "./image/EventAdd.svg"
import Freshman from "./image/FRESHMAN.svg"
import Spring from "./image/SPRING.svg"
import Sort from "./image/SORT.svg"
import Filter from "./image/FILTER.svg"
import StarWar from "./image/StarWar.svg"
import Movie from "./image/Movie.svg"
import Market from "./image/Market.svg"
import Aggie from "./image/Aggie.svg"
import BPD from "./image/BPD.svg"
import location from "./image/Location.svg"

function EventsPage(){
    return(
        <div>
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
    )
}
export default EventsPage