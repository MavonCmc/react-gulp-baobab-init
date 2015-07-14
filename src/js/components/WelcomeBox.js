/**
 * Welcome box component
 */

'use strict';

import React from 'react';

import {cursors, filmList} from './../services/UserDetails.js';
import {errors} from './../services/Errors.js';

let WelcomeBoxComponent = React.createClass({
  getInitialState() {
    return {
      name: cursors.welcomeBox.get(),
      films: cursors.films.get(),
      errors: errors
    };
  },

  styles() {
    return {
      'errorText': {
        color: '#f00'
      }
    };
  },

  generateList(filmList) {
    if (filmList.length > 0) {
      return <ul className="film-list">
        {filmList.map(
            film => {
            return <li className="film-item">{film}</li>;
          }
        )}
      </ul>;
    }
    else {
      return this.state.errors.generate('Sorry no items in this list');
      //return <h3 style={this.styles().errorText}>Sorry no items in this list</h3>;
    }
  },

  render() {
    console.log(this.state.name);
    console.log(this.state.films);
    console.log(this.state.films.length);
    console.log(this.styles().errorText);
    console.log(this.state.errors);

    return <div className="welcome-box">
      <h1 className="title">A React, Gulp, Baobab Starter project</h1>
      <p className="para">Now you can get on with react <strong>{ this.state.name }</strong> my good person.</p>
      <h2 className="sub-title">Oh and here are some Lucio Fulci movies:</h2>
      {this.generateList(this.state.films)}
    </div>;
  }
});

export default WelcomeBoxComponent;