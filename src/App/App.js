import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

import GoatCorral from '../components/goatCorral/goatCorral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  useGoat = (goatId) => {
    goatData.useAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
    <div className="App">
      <button className="btn btn-dark">Goats</button>
      <GoatCorral butts={this.state.goats} freeGoat={this.freeGoat} useGoat={this.useGoat} />
    </div>
    );
  }
}

export default App;
