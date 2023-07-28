import React from 'react';
import Splash from './components/Splash';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Splash>

        </Splash>
      </div>
    );
  }
}

export default App;
