import React, { Component } from 'react';
import './App.css';

//Links Component
class Links extends Component {
    render() {
    return (
        <div className="Links">
            <h2>Steve Jobs Resources</h2>
            <p>Apple's tribute to Steve Jobs:
                <a href="https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537">
                    <br></br><br></br>Remembering Steve Jobs
                </a>
            </p>
            <p>The Steve Jobs Biography
                <a href="https://en.wikipedia.org/wiki/Steve_Jobs">
                    <br></br><br></br>Steve Jobs
                </a>
            </p>
            <p>The Steve Jobs Movie
                <a href="https://www.imdb.com/title/tt2080374/">
                    <br></br><br></br>Steve Jobs on IMDB
                </a>
            </p>
            <hr></hr>
        </div>
       );
    }
  }
  
  //Exporting Top Component
  export {Links};