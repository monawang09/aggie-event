import "./App.css"; 
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from './component/event-page.js';
import HomePage from "./component/cover-page.js";
import Calendar from "./component/Calendar.js";

function App({children}){
    return(
        <><Router>
            <Navbar/>
            <Routes>
                <Route path = '/' element={<HomePage/>}> </Route>
                {/* <Route path = '/Home'> </Route> */}
                <Route path = '/events' element={<EventsPage/>} >  </Route>
                <Route path = '/calendar' element={<Calendar/>}>  </Route>
                <Route path = '/connect'> </Route>
            </Routes>
        </Router>
        {children}
        </>
    ); 
}

export default App; 