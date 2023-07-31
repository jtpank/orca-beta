import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
class Nfl extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Nfl Main Page</h1>
                <Footer></Footer>
            </main>
        );
    }
}

export default Nfl;