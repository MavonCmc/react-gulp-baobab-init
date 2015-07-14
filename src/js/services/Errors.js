/**
 * Errors component
 */

'use strict';

import React from 'react';

let errors = {
  styles() {
    return {
      'errorText': {
        color: '#f00'
      }
    };
  },

  generate(text) {
    return <h3 style={this.styles().errorText}>{text}</h3>;
  }
};

export {errors};