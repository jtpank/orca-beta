import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';
class Signup extends React.Component {
    render() {
        return (
            <main class="flex-shrink-0">
                <NavBar></NavBar>
                <h1>Signup page</h1>
                <div class="container px-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-xxl-6">
                            <div className='text-center my-5'>
                                <SignupForm></SignupForm>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </main>
        );
    }
}

export default Signup;