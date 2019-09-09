import React from 'react';

import FlagName from './flagName';
import InfoCard from './infoCard';
import DetailsBtn from './detailsBtn';

const CountryItem = ({ countryList, loading }) => {
    // console.log(country);
    if (loading) {
        return <h2>Loading...</h2>
    }

    const countries = countryList.map((country, index) => {
        return (
            <div className='card card-body bg-secondary mb-3' key={index}>
                <div className="row">
                    <FlagName name={country.name} flag={country.flag} />
                    <InfoCard name={country.name} population={country.population} capital={country.capital} />
                    <DetailsBtn name={country.name} />
                </div>
            </div>)
    })

    return (
        countries
    )
}

export default CountryItem;
