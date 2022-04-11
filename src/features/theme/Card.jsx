import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Card = ({country}) => {
    const {coatOfArms, name, population, region, capital} = country;
    const currentTheme = useSelector(state => state.theme)
    return (
        <Link
            to={`/${name.common}`}
        >
            <div
                className={`self-stretch ${
                    currentTheme ? "bg-white text-black" : "bg-dark-blue-dark text-white"
                } w-60 m-auto rounded-md cursor-pointer transition-transform transform hover:scale-110 m-5 shadow-md`}
            >
                <div
                    style={{backgroundImage: `url(${coatOfArms.png})`}}
                    className="bg-contain h-52 w-60 bg-center bg-no-repeat rounded-t-md"
                ></div>
                <div className="p-5">
                    <p className="font-bold text-lg mb-4" className="country-name">
                        {name.common}
                    </p>
                    <p className="text-sm">{`Population : ${population}`}</p>
                    <p className="text-sm">{`Region : ${region}`}</p>
                    {capital && <p className="text-sm">{`Capital : ${capital.toString()}`}</p>}
                </div>
            </div>
        </Link>
    );
};

export default Card;