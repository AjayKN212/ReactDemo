import React from 'react';
import { Child2 } from './Child2.jsx';
import { Header } from './Header.jsx';
import styles from './App.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles.global}>
                <div>
                    <Header />
                </div>
                <div className={styles.container}>
                    Hello World!!!
                    <div>
                        <Child1 /> 
                        <Child2 />
                    </div>
                </div>
            </div>
        );
    }
}

class Child1 extends React.Component {
    render() {
        return (
            <div>
                Hello World from Child1 !!!
          </div>
        );
    }
}

export default App;