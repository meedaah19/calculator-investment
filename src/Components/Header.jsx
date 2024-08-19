import React from 'react';
import calLogo from '../assets/investment-calculator-logo.png';
export default function Header(){
    return(
        <header id='header'>
            <img src= {calLogo} alt="logo image"/>
            <h1>Investment Calculator</h1>
        </header>
    );
}