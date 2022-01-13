import React, { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CountriesBox = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => getCountries(), []);

    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then((result) => result.json())
            .then((countriesList) => setCountries(countriesList));
    };

    const onCountryClick = function (country) {
        setSelectedCountry(country);
        console.log(selectedCountry);
    };

    return (
        <>
            <Header />
            <CountriesList
                onCountryClick={onCountryClick}
                countries={countries}
            />
            <Footer />
        </>
    );
};

export default CountriesBox;
