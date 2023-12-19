import React from 'react';
import homeImage from './home.png';

export default function About()
{
    return(
        <div>
        <h1>The official portal to  handle HRMS of Hamon Technologies</h1>
        <img src={homeImage} alt="Home" width="850" height="500" />
        </div>
    )
}