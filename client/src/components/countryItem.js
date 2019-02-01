import React from 'react'

export default ({ country: { name, capital, population, flag } }) => {
  return (
    <div className='card card-body bg-secondary mb-3'>
        <div className="row">
            <div className="col-md-3 d-flex justify-content-center align-items-center flex-column" 
                style={{color:'white'}}>
                <h4>{ name }</h4>
                <img src={flag} alt={name} style={{width:200}}/>
            </div>
            <div className="col-md-6 card card-body bg-primary">
                <ul className="list-group">
                    <li className="list-group-item">The Capital City: { capital }</li>
                    <li className="list-group-item">{name} Population: { population }</li>
                </ul>
            </div>
            <div className="col-md-3 align-self-end">
                <button className="btn btn-primary">Country Details</button>
            </div>
        </div>
    </div>
  )
}
