import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" type="button" disabled>
                    <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true">
                    </span>
                    Loading...
                </button>
            </div>
        )
    }
}
