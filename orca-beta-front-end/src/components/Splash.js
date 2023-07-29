import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Section from './Section';
import HeaderSection from './HeaderSection';
import TeamSection from './TeamSection';
import PricingSection from './PricingSection';
import ZoomLineChart from './ZoomLineChart';
class Splash extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <HeaderSection></HeaderSection>
                <Section></Section>
                <PricingSection></PricingSection>
                <TeamSection></TeamSection>
                <Footer></Footer>
                <ZoomLineChart></ZoomLineChart>
            </main>
        );
    }
}

export default Splash;