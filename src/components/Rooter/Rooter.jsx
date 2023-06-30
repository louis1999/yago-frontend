import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";




function Rooter(){


    return(
        <Routes>
            <Route path="/" exact element={ <HomePage/>}/>
        </Routes>
    )
}


export default Rooter