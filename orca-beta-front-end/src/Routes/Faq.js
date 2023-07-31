import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
class Faq extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Frequently Asked Questions</h1>
                <Footer></Footer>
            </main>
        );
    }
}

export default Faq;