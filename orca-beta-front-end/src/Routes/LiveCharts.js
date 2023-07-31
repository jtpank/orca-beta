import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ZoomLineChart from '../components/ZoomLineChart';
class LiveCharts extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Charts Page</h1>
                <ZoomLineChart></ZoomLineChart>
                <Footer></Footer>
            </main>
        );
    }
}

export default LiveCharts;