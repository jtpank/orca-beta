import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ZoomLineChart from '../components/ZoomLineChart';
import DateSelect from '../components/DateSelect';
class LiveCharts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _selected_sport: 'None',
        }
        this.handleSetSport = this.handleSetSport.bind(this);
        this.handleResetSport = this.handleResetSport.bind(this);
    }
      handleSetSport(sport) {
        this.setState({
            _selected_sport: sport,
        })
    }
      handleResetSport() {
        this.setState({
            _selected_sport: 'None',
        })
    }
    render() {
        let renderedContent = <>
                    <div class="col-md-3 col-sm-3">
                        <button type="button" 
                        class="btn btn-primary btn-block mb-4"
                        onClick={() => this.handleSetSport('NFL')}
                        >NFL</button>
                        </div>
                        <div class="col-md-3 col-sm-3">
                        <button type="button" 
                        class="btn btn-primary btn-block mb-4"
                        onClick={() => this.handleSetSport('NBA')}
                        >NBA</button>
                    </div>
                    </>
        if(this.state._selected_sport != 'None')
        {
            renderedContent = <>
                <div class="col-md-3 col-sm-3">
                    <button type="button" 
                            class="btn btn-primary btn-block mb-4"
                            onClick={this.handleResetSport}
                    >Back</button>
                </div>
                <DateSelect></DateSelect>
                <ZoomLineChart></ZoomLineChart>
            </>
        }
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Charts Page</h1>
                <div class="container px-5">
                    {renderedContent}
                </div>
                <Footer></Footer>
            </main>
        );
    }
}

export default LiveCharts;