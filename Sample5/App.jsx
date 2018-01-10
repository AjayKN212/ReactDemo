import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './Home.jsx';
import { Search } from './Search.jsx';
import { About } from './About.jsx';
import { Header } from './Header.jsx';
import styles from './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div className={styles.global}>
                    <div>
                        <Header />
                    </div>
                    <div className={styles.container}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/Search' component={Search} />
                            <Route exact path='/About' component={About} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;