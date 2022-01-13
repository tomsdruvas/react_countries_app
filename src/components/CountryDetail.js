import React, { useEffect, useState } from "react";

const CountryDetail = ({ selectedCountry }) => {
    // useEffect(() => getBorders(), [borders]);

    const [borders, setBorders] = useState([]);

    const getBorders = (url) => {
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                setBorders([...borders, result[0].name.common]);
            });
    };

    let borderNodes = null;

    if (Array.isArray(selectedCountry.borders)) {
        selectedCountry.borders.map((countryCode, index) => {
            const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
            getBorders(url);
        });
    }

    borderNodes = borders.map((border, index) => {
        return <li key={index}>{border}</li>;
    });

    return (
        <div>
            <h3>{selectedCountry.name}</h3>
            <p>Population: {selectedCountry.population}</p>
            <p>
                Flag:
                <img height="20px" src={selectedCountry.flag}></img>
            </p>
            {borderNodes ? <ul>{borderNodes}</ul> : null}
        </div>
    );
};

export default CountryDetail;
