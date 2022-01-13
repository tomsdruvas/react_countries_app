import React from "react";

const ListItem = ({ country }) => {
    return (
        <li>
            {country.name}, {country.population}
            <img height="20px" src={country.flag}></img>
        </li>
    );
};

export default ListItem;
