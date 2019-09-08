import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class componentName extends Component {
    render() {

        const { name } = this.props;

        return (
            <div className="col-md-3 align-self-end">
                <Link
                    to={`/country/${name}`}
                    className="btn btn-primary">
                    Country Details
                </Link>
            </div>
        )
    }
}
