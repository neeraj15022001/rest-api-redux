import React from 'react';
import {useSelector} from "react-redux";
import {useParams, Navigate} from "react-router-dom";
import {selectCountryByName} from "../countries/countriesSlice";
import BackButton from "../../components/BackButton/BackButton";


const Details = () => {
    let params = useParams();
    let countryName = params.countryName;
    const currentTheme = useSelector(state => state.theme)
    const countryData = useSelector(state => selectCountryByName(state, countryName))
    if (!countryData) {
        return (<Navigate to={"/"}/>)
    }
    const {coatOfArms, name, population, region, subregion, capital, tld, currencies, languages, borders} = countryData;
    return (
        <div
            className={`h-screen w-screen ${
                currentTheme ? "bg-very-light-grey-light text-black" : "bg-very-dark-blue-dark text-white"
            } px-20 pb-10 pt-24 overflow-auto transition-colors`}
        >
            <div className="flex items-center justify-start">
                <BackButton/>
            </div>
            <div className="sm:flex sm:items-center sm:justify-center">
                <div
                    className={`w-1/2 bg-center bg-cover h-96 border-8 mt-10 mr-10 mb-10 ${
                        currentTheme ? "border-grey-200" : "border-grey-400"
                    }`}
                    style={{
                        backgroundImage: `url(${coatOfArms.png})`,
                    }}
                ></div>
                <div className={`w-1/2`}>
                    <p className="mb-5 font-bold text-3xl">
                        {name && name.common || ""}
                    </p>
                    <div className="flex items-start justify-between mb-10">
                        <div>
                            <p className="capitalize mb-3">
                                <span className="capitalize">native name: </span>
                                {name && name.official || ""}
                            </p>
                            <p className="capitalize mb-3">
                                <span className="capitalize">population: </span>
                                {population && population || ""}
                            </p>
                            <p className="capitalize mb-3">
                                <span className="capitalize">region: </span>
                                {region && region || ""}
                            </p>
                            <p className="capitalize mb-3">
                                <span className="capitalize">sub region: </span>
                                {subregion && subregion || ""}
                            </p>
                            <p className="capitalize">
                                <span className="capitalize">capital: </span>
                                {capital && capital.toString() || ""}
                            </p>
                        </div>
                        <div>
                            <p className="capitalize mb-3">
                                <span className="capitalize">top level domain: </span>
                                <span>
                  {tld && tld.toString() || ""}
                </span>
                            </p>
                            <p className="capitalize mb-3">
                                <span className="capitalize">currencies: </span>
                                <span>
                  {(() => currencies && Object.values(currencies).map(currency => currency.name).toString() || "")()}
                </span>
                            </p>
                            <p className="capitalize">
                                <span className="capitalize">languages: </span>
                                {languages && Object.values(languages).toString() || ""}
                            </p>
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center sm:justify-start flex-wrap">
                        <span className="capitalize m-4r">border countries: </span>
                        {borders && borders.map(border => {
                            return (
                                <div
                                    className={`px-8 py-2 capitalize ${
                                        currentTheme ? "bg-white text-black" : "bg-dark-blue-dark text-white"
                                    } shadow-lg mr-3`}>
                                    {border}
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;