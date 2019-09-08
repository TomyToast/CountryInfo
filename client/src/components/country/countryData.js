import React, { Component } from 'react'

export default class componentName extends Component {
    render() {

        const { name, flag, nativeName, region } = this.props;

        return (
            <div className="row">
                <div className="card bg-primary col-md-12 d-flex justify-content-center align-items-center">
                    <div className="row">
                        <h2 className="display-4 mt-3">{name}</h2>
                        <img src={flag} alt={`${name}_flag`} style={{ width: 100, height: 50 }} />
                    </div>
                    <h3 className="mb-3">Origin name: {nativeName}</h3>
                    <h4>Region: {region}</h4>
                </div>
            </div>
        )
    }
}
