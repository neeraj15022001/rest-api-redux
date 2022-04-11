import React, {useEffect, useState} from 'react';
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
    const [input, setInput] = useState("")
    const [filteredArray, setFilteredArray] = useState([])
    useEffect(() => {
        if (countriesStatus === "idle") {
            dispatch(fetchCountries())
        } else if (countriesStatus === "succeeded") {
            setFilteredArray(countries.countries)
        }

    }, [countriesStatus, dispatch]);
    let content
    if (countriesStatus === "loading") {
        content = <Spinner/>
    } else if (countriesStatus === "succeeded") {
        // setFilteredArray(countries.countries)
        content = filteredArray.map((country, index) => <Card country={country} key={index}/>)
    } else if (countriesStatus === "failed") {
        content = countriesError
    }
    const handleChange = (e) => {
        setInput(() => e.target.value);
        if (countries) {
            if (e.target.value === "") {
                setFilteredArray(() => countries.countries)
            } else {
                let newContent = countries.countries.filter(item => {
                    let regex = new RegExp(input, 'i')
                    return !item.name.common.search(regex)
                })
                setFilteredArray(() => newContent)
            }
        }
    }
    const handleFilterChange = (e) => {
        if(e.target.value.toLowerCase() === "worldwide") {
            setFilteredArray(() => countries.countries)
        } else {
            let newContent = countries.countries.filter(item => {
                return item.region.toLowerCase() === e.target.value.toLowerCase();
            })
            setFilteredArray(() => newContent)
        }
    }
    return (
        <section
            className={`h-full overflow-auto w-screen ${currentTheme ? `bg-very-light-grey-light text-black` : "bg-very-dark-blue-dark text-white"} p-10`}>
            <div className={"flex items-center justify-between"}>
                {/*    Search Bar*/}
                <div>
                    <input type="text" name="search" id="search" placeholder={"Search..."} onChange={handleChange}
                           value={input}
                           className={`${currentTheme ? `bg-white text-black` : "bg-dark-blue-dark text-white"} border px-3 py-2 rounded-md outline-none`}/>
                </div>
                {/*    Filter*/}
                <div>
                    <select name="region-select" defaultValue={"Worldwide"} onChange={handleFilterChange}
                            className={`${currentTheme ? `bg-white text-black` : "bg-dark-blue-dark text-white"} px-3 py-2 outline-none`}>
                        <option value="Worldwide">Worldwide</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
            <div>
                <div className={"flex flex-wrap justify-center"}>{content}</div>
            </div>
        </section>
    );
};

export default Main;