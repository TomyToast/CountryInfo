import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

export default class InfoCard extends Component {
    render() {

        const { name, population, capital } = this.props;

        return (
            <div className="col-md-6 card card-body bg-primary">
                <ul className="list-group">
                    <li className="list-group-item">The Capital City: {capital}</li>
                    <li className="list-group-item">
                        {name} Population:
                        <NumberFormat
                            value={population}
                            displayType={'text'}
                            thousandSeparator={" "}
                            prefix={" "}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}
