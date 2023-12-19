import React from 'react';
import homeImage from './home.png';

export default function Home()
{
    return(
        <div>
        <h1>The official HRMS page of Hamon Technologies</h1>
        <img src={homeImage} alt="Home" width="850" height="500" />
        </div>
    )
}