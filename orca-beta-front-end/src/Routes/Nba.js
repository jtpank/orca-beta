import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
class Nba extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Nba Main Page</h1>
                <Footer></Footer>
            </main>
        );
    }
}

export default Nba;