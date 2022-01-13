import React, { useState } from "react";
import CountriesList from "../components/CountriesList";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CountriesBox = () => {
    const [countries, setCountries] = useState([]);

    fetch("https://restcountries.com/v3.1/all")
        .then((result) => result.json())
        .then((countriesList) => setCountries(countriesList));

    return (
        <>
            <Header />
            <CountriesList countries={countries} />
            <Footer />
        </>
    );
};

export default CountriesBox;
