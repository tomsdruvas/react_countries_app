import React, { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CountryDetail from "../components/CountryDetail";
import CountryFavList from "../components/CountryFavList";

const CountriesBox = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favCountries, setFavCountries] = useState([]);

    useEffect(() => getCountries(), []);

    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then((result) => result.json())
            .then((countriesList) => setCountries(countriesList));
    };

    const addFavCountry = (addedFavCountry) => {
        if (favCountries.includes(addedFavCountry) === false) {
            addedFavCountry.id = Date.now();
            const updatedArray = [...favCountries, addedFavCountry];
            setFavCountries(updatedArray);
        }
    };

    const onCountryClick = function (country) {
        setSelectedCountry(country);
    };

    return (
        <>
            <Header />
            <div className="main-box">
                <CountriesList
                    addFavCountry={addFavCountry}
                    onCountryClick={onCountryClick}
                    selectedCountry={selectedCountry}
                    countries={countries}
                />
                <CountryFavList favCountries={favCountries} />
            </div>
            <Footer />
        </>
    );
};

export default CountriesBox;
