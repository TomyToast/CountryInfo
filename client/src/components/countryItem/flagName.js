import React, { Component } from 'react'

export default class FlagName extends Component {
    render() {

        const { name, flag } = this.props;

        return (
            <div className="col-md-3 d-flex justify-content-center align-items-center flex-column"
                style={{ color: 'white' }}>
                <h4>{name}</h4>
                <img src={flag} alt={name} style={{ width: 200, height: 100 }} />
            </div>
        )
    }
}
