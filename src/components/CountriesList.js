import React from "react";
import ListItem from "./ListItem";

const CountriesList = ({
    countries,
    onCountryClick,
    selectedCountry,
    addFavCountry,
}) => {
    const countriesNodes = countries.map((country, index) => {
        const countryObject = {
            name: country.name.common,
            population: country.population,
            flag: country.flags.svg,
            borders: country.borders,
        };

        return (
            <ListItem
                originalObject={country}
                addFavCountry={addFavCountry}
                onCountryClick={onCountryClick}
                country={countryObject}
                selectedCountry={selectedCountry}
                key={index}
            />
        );
    });

    return (
        <>
            <ul>{countriesNodes}</ul>
        </>
    );
};

export default CountriesList;
