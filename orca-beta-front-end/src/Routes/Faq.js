import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FaqItem from '../components/FaqItem';
class Faq extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Frequently Asked Questions</h1>
                {/* Need to separate out into a list of FaqItems */}
                <div class="accordion w-100" id="basicAccordion">
                    <FaqItem></FaqItem>
                </div>
                <Footer></Footer>
            </main>
        );
    }
}

export default Faq;