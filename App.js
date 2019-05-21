import React, { Component } from 'react';

import CatalogPage from '~/components/CatalogPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <CatalogPage />
      </div>
    );
  }
}

export default App;


