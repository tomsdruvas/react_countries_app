import React from "react";
import CountryDetail from "./CountryDetail";

const ListItem = ({
    country,
    originalObject,
    onCountryClick,
    selectedCountry,
    addFavCountry,
}) => {
    const handleClick = () => {
        onCountryClick(country);
    };

    const renderDetail = () => {
        if (country.name === selectedCountry.name) {
            return <CountryDetail selectedCountry={country} />;
        }
    };

    const addFavourite = () => {
        addFavCountry(originalObject);
    };

    return (
        <li onClick={handleClick}>
            {country.name}, {country.population}
            <img height="20px" src={country.flag}></img>
            <button onClick={addFavourite} type="submit">
                Add
            </button>
            {selectedCountry ? renderDetail() : null}
        </li>
    );
};

export default ListItem;
