import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const BackButton = () => {
    const currentTheme = useSelector(state => state.theme)
    return (
        <Link to={"/"}>
            <button
                className={`flex items-center justify-center px-4 py-2 ${currentTheme ? "bg-white text-black" : "bg-dark-blue-dark text-white"} shadow rounded-md`}>
                <i className="bi bi-arrow-left mr-2"></i>
                <span className={'capitalize'}>back</span>
            </button>
        </Link>
    );
};

export default BackButton;