import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
class ExperNuggets extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Expert Analysis Nuggets</h1>
                <Footer></Footer>
            </main>
        );
    }
}

export default ExperNuggets;