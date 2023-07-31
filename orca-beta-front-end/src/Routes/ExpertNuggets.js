import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ExpertBlogPost from '../components/ExpertBlogPost';
class ExperNuggets extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Expert Analysis Nuggets</h1>
                {/* Need to wrap in a List as a separate component and render the posts within that List
                Then render the Main List component here instead of individual blog posts */}
                <div className="row">
                    <ExpertBlogPost></ExpertBlogPost>
                </div>
                <Footer></Footer>
            </main>
        );
    }
}

export default ExperNuggets;