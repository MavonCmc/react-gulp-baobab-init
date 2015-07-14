/**
 * App entry point
 * Contains the initialisation of our app
 */

'use strict';

import React from 'react';
// React components
import WelcomeBoxComponent from './components/WelcomeBox.js';

React.render(<WelcomeBoxComponent/>, document.getElementById('welcomeBox'));