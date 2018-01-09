import React from 'react';
// const styles = require("./Header.css")
import styles from "./Header.css"

export class Header extends React.Component {

   render() {

    const myStyle = {
        fontSize: 100,
        color: '#FF0000'
     }
      return (
         <div className={styles.topBar}>
            <h1>React Demo 1</h1>
         </div>
      );
   }
}

