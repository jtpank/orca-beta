import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ZoomLineChart from '../components/ZoomLineChart';
import DateSelect from '../components/DateSelect';
class LiveCharts extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Charts Page</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                        <button type="button" class="btn btn-primary btn-block mb-4">NFL</button>
                        </div>
                        <div class="col-md-6 col-sm-12">
                        <button type="button" class="btn btn-primary btn-block mb-4">NBA</button>
                        </div>
                    </div>
                </div>
                {/* <DateSelect></DateSelect>
                <ZoomLineChart></ZoomLineChart> */}
                <Footer></Footer>
            </main>
        );
    }
}

export default LiveCharts;