import './calendar.css'


function Calendar() {
    return <div>
        <div className="monday"> Monday </div>
        <div className="tuesday"> Tuesday </div>
        <div className="wednesday"> Wednesday </div>
        <div className="thursday"> Thursday </div>
        <div className="friday"> Friday </div>
        <div className="saturday"> Saturday </div>
        <div className="sunday"> Sunday </div>

        <section class="grid">
            <div className="date"> 01 </div>
            <div className="date"> 02 </div>
            <div className="date"> 03 </div>
            <div className="date"> 04 </div>
            <div className="date"> 05 </div>
            <div className="date"> 06 </div>
            <div className="date"> 07 </div>
        </section>
    </div>
}

export default Calendar