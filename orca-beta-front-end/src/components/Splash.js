import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Section from './Section';
import HeaderSection from './HeaderSection';
import TeamSection from './TeamSection';
class Splash extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <HeaderSection></HeaderSection>
                <Section></Section>
                <TeamSection></TeamSection>
                <Footer></Footer>
            </main>
        );
    }
}

export default Splash;