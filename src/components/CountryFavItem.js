import React from "react";

const CountryFavItem = ({ country }) => {
    return (
        <li>
            {country.name}, {country.population}
            <img height="20px" src={country.flag}></img>
        </li>
    );
};

export default CountryFavItem;
