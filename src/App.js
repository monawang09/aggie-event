import "./App.css"; 
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App({children}){
    return(
        <><Router>
            <Navbar/>
            <Routes>
                <Route path = '/'> </Route>
                <Route path = '/profile'> </Route>
                <Route path = '/events'>   </Route>
                <Route path = '/calendar'>  </Route>
                <Route path = '/connect'> </Route>
            </Routes>
        </Router>
        {children}
        </>
    ); 
}

export default App; 