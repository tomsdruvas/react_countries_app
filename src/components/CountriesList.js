import React from "react";
import ListItem from "./ListItem";

const CountriesList = ({ countries }) => {
    const countriesNodes = countries.map((country, index) => {
        const countryObject = {
            name: country.name.common,
            population: country.population,
            flag: country.flags.svg,
        };

        return <ListItem country={countryObject} key={index} />;
    });

    return (
        <>
            <h2>This is a countries list</h2>
            <ul>{countriesNodes}</ul>
        </>
    );
};

export default CountriesList;
