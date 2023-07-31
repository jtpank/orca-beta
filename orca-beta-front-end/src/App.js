import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Splash from './Routes/Splash';
import Signup from './Routes/Signup';
import LiveCharts from './Routes/LiveCharts';
import HistoricalOdds from './Routes/HistoricalOdds';
import ExpertNuggets from './Routes/ExpertNuggets';
import Faq from './Routes/Faq';
import Nfl from './Routes/Nfl';
import Nba from './Routes/Nba';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          </header>
            <Routes>
              <Route path="/" element={<Splash/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/live-charts" element={<LiveCharts/>}/>
              <Route path="/historical-odds-db" element={<HistoricalOdds/>}/>
              <Route path="/expert-analysis-nuggets" element={<ExpertNuggets/>}/>
              <Route path="/frequently-asked-questions" element={<Faq/>}/>
              <Route path="/nfl" element={<Nfl/>}/>
              <Route path="/nba" element={<Nba/>}/>
            </Routes> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
