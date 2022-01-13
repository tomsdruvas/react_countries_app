import React from "react";

const ListItem = ({ country, onCountryClick }) => {
    const handleClick = () => {
        onCountryClick(country);
    };
    return (
        <li onClick={handleClick}>
            {country.name}, {country.population}
            <img height="20px" src={country.flag}></img>
        </li>
    );
};

export default ListItem;
