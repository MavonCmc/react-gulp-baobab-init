

'use strict';

import Baobab from 'baobab';

// Setup initial app state
// could be after a server call, a client side database, local storage etc
let AppState = new Baobab({
  'welcomeBox': {
    'name': 'Your name'
  },

  'filmList': {
    'films': [
      'Zombie Flesh Eaters',
      'City of the Living Dead',
      'The Beyond',
      'House by the Cemetery'
    ]
  }
});

export default AppState;