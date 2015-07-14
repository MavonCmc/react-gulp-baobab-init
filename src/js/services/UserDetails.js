/**
 * User details logic taken from AppState
 */

'use strict';

import React from 'react';
import AppState from './../state/AppState.js';

//baobab cursors
let cursors = {
  welcomeBox: AppState.select('welcomeBox', 'name'),
  films: AppState.select('filmList', 'films')
};

let userDetails = {
  items() {
    return cursors.films.get();
  }
};

export {cursors, userDetails};