import './calendar.css'


function Calendar() {
    return <section>
        <section className="calendar-container">
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
}

export default Calendar