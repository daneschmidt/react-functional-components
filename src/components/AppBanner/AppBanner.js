// removed { Component} import
import React from 'react';
import logoSvg from './logo.svg';

function AppBanner(props) {
    return (
        <header className="appBanner">
            <img className="appLogo" src={logoSvg} alt="React Logo"/>
            <h1>{props.hdg}</h1>
            <p>{props.subHdg}</p>
        </header>
    );
}

export default AppBanner;
