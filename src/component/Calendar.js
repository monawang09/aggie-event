import './calendar.css'
import "./cover-page.css";

import sort_button_icon from './images/Rectangle 222.svg'
import filter_button_icon from './images/Rectangle 333.svg'
import circle from './images/Ellipse3.svg'; 
import hero_image from './images/Calender.svg'
import SearchBar from './SearchBar.js';


function Calendar() {
    return (
        <div>
             <SearchBar> </SearchBar>
             <img src={circle} className='overlay-container' />
             <img src={hero_image} className='image-container' />
        <section>
        <div className="title">
            Calendar
        </div>
        <section className="calendar-container">
            <section className="first_row">
                <section className="day_week_month_container">
                    <div className="day_week_month_faded"> Day </div>
                    <div className="day_week_month_regular"> Week </div>
                    <div className="day_week_month_faded"> Month </div>
                </section>
                <section className="filter_and_sorter_container">
                    <button className="button_icon"> <img src={sort_button_icon}/></button>
                    <button className="button_icon"> <img src={filter_button_icon}/></button>
                </section>
            </section>

            <div className="month_font">
                APRIL 2022 >
            </div>
            <div className="row">
                <div className="date_container">
                    <div className="date_font"> 17 </div>
                    <div className="day_font">SUN </div>
                </div>
                <div className="event_container"></div>
            </div>
            <div className="row">
                <div className="date_container">
                    <div className="date_font"> 18 </div>
                    <div className="day_font">MON </div>
                </div>
                <div className="event_container"></div>
            </div>
            <div className="row">
                <div className="date_container">
                    <div className="date_font"> 19 </div>
                    <div className="day_font">TUE </div>
                </div>
                <div className="event_container"></div>
            </div>
            <div className="row">
                <div className="date_container">
                    <div className="date_font"> 20 </div>
                    <div className="day_font">WED </div>
                </div>
                <div className="event_container"></div>
            </div>
            <div className="row">
                <div className="date_container">
                    <div className="date_font"> 21 </div>
                    <div className="day_font">THR </div>
                </div>
                <div className="event_container"></div>
            </div>
            <div className="row">
                <div className="date_container">
                    <div className="date_font"> 22 </div>
                    <div className="day_font">FRI </div>
                </div>
                <div className="event_container"></div>
            </div>
            <div className="row">
                <div className="date_container">
                    <div className="date_font"> 23 </div>
                    <div className="day_font">SAT </div>
                </div>
                <div className="event_container"></div>
            </div>
        </section>

    </section>


            
    </div>
    );
       
}

export default Calendar