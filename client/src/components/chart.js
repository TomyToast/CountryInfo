import React, {Fragment} from 'react';
import {BarChart} from 'react-easy-chart';

export default (props) => {
  let names = props.country.map((cntr) => cntr.alpha3Code);
  let populations = props.country.map((cntr) => cntr.population);

  let data = [],
    thing;

  for(let i = 0; i < populations.length; i++){
    thing = {};
    for(let j = 0; j < names.length; j++){
      thing['x'] = names[i];
      thing['y'] = populations[i];
    }
    data.push(thing);
  }


  return (
    <div
      className=' bg-white d-flex justify-content-center align-items-center flex-column mb-5'
      style={{display: 'inline-block'}}
    >
      <h4>Region Population</h4>
      <BarChart
        colorBars
        axes
        grid
        width = {1400}
        height = {400}
        data = {data}
        margin = {{top: 5, right: 0, bottom: 100, left: 0}}
      />
    </div>
  )
}
