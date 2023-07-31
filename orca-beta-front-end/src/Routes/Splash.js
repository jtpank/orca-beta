import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Section from '../components/Section';
import HeaderSection from '../components/HeaderSection';
import TeamSection from '../components/TeamSection';
import PricingSection from '../components/PricingSection';
import ZoomLineChart from '../components/ZoomLineChart';
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
            </main>
        );
    }
}

export default Splash;