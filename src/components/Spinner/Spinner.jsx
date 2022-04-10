import React from 'react';
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className={"w-screen h-screen grid place-items-center"}>
            <div className="spin"></div>
        </div>
    );
};

export default Spinner;