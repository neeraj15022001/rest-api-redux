import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCountries} from "../countries/countriesSlice";
import Card from "./Card"
import Spinner from "../../components/Spinner/Spinner";
const Main = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector(state => state.theme);
    const countriesStatus = useSelector(state => state.countries.status);
    const countriesError = useSelector(state => state.countries.error)
    const countries = useSelector(state => state.countries);
    useEffect(() => {
        if (countriesStatus === "idle") {
            dispatch(fetchCountries())
        }
    }, [countriesStatus, dispatch]);
    let content
    if (countriesStatus === "loading") {
        content = <Spinner />
    } else if (countriesStatus === "succeeded") {
        content = countries.countries.map((country, index) => <Card country={country} key={index} />)
    } else if (countriesStatus === "failed") {
        content = countriesError
    }
    return (
        <div
            className={`h-full w-screen ${currentTheme ? `bg-very-light-grey-light text-black` : "bg-very-dark-blue-dark text-white"} p-10 overflow-auto`}>
            <div className={"flex flex-wrap justify-center"}>{content}</div>
        </div>
    );
};

export default Main;