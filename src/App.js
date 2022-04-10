import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./app/Navbar";
import Main from "./features/theme/Main";
import Details from "./features/theme/Details";

const App = () => {
    return (
        <section className={"h-screen"}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path={"/"} element={<Main/>}/>
                    <Route path={":countryName"} element={<Details />} />
                </Routes>
            </BrowserRouter>
        </section>

    );
};

export default App;