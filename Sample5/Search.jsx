import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Employee } from './Employee.jsx';
import styles from "./Search.css"


export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "<placeholder>",
            input: ""
        };
        this.setInput = this.setInput.bind(this);
        this.setName = this.setName.bind(this);
    }

    // shouldComponentUpdate(newProps, newState) {
    //     return this.state.name != newState.name;
    //  }

    render() {
        return (
            <div>
                <p className={styles["text"]}>Hello World 2 - Student List</p>
                <div>
                    <input className={styles["textbox"]} type="text" placeholder="Enter the name of Employee" onChange={this.setInput} />
                    <button className={styles["button"]} onClick={this.setName} >Load</button>
                </div>
                <Employee name={this.state.name} />
            </div>
        );
    }

    setInput(event) {
        this.setState({ input: event.target.value })
    }
    setName() {
        this.setState({ name: this.state.input })
    }

}

// export default Login;