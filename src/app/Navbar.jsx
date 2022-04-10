import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "../features/theme/themeSlice";
import {Link} from "react-router-dom";

const Navbar = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector(state => state.theme);
    const toggleTheme = () => {
        dispatch(changeTheme())
    }
    return (
        <div
            className={`flex items-center justify-between px-10 py-4 ${currentTheme ? "bg-white text-black" : "bg-dark-blue-dark text-white"} drop-shadow-md border-b`}>
            <Link to={"/"}><p className="text-xl font-bold">Where in the world?</p></Link>
            <div
                className="flex items-center justify-center select-none cursor-pointer"
            >
                <button
                    className="capitalize text-sm bg-blue-500 text-white hover:bg-blue-600 py-3 px-5 rounded-lg"
                    onClick={toggleTheme}>dark
                    mode
                </button>
            </div>
        </div>
    );
};

export default Navbar;