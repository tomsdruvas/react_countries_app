import React from "react";
import CountryFavItem from "./CountryFavItem";

const CountryFavList = ({ favCountries }) => {
    const nodesCountriesFav = favCountries.map((country) => {
        const countryObject = {
            name: country.name.common,
            population: country.population,
            flag: country.flags.svg,
            borders: country.borders,
        };

        return <CountryFavItem key={country.id} country={countryObject} />;
    });

    return <ul>{nodesCountriesFav}</ul>;
};

export default CountryFavList;
