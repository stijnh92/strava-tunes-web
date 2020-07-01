import React from 'react';
import ReactDOM from 'react-dom';
import StravaButton from './Strava';
import './index.css';

function Index(props) {
    return (
        <div>
            <p>Welcome to Strava Tunes! </p>
            <StravaButton />
        </div>
    )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

