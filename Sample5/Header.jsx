import React from 'react';
// const styles = require("./Header.css")
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styles from "./Header.css"

export class Header extends React.Component {

    render() {
        return (
            <div className={styles.topBar}>
                <h1>React Demo - FluX using MobX</h1>
                <div className={styles.navbar}>
                    <div><Link to={'/'}>Home</Link></div>
                    <div><Link to={'/Search'}>Search</Link></div>
                    <div><Link to={'/About'}>About</Link></div>
                </div>
            </div>
        );
    }
}

