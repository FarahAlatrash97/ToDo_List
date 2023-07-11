import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%'; //as a text because it will be css style

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; //because we added '%' it will be a string
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }} //style wants a js obj as a value and in this obj should use a css proparty 
          //names as key namee as proparites and the values as well values 
          // note: if we have a proparty with a dash(-) like background-color we should write it between ''
          //like this => 'background-color' or => backgroundColor
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;