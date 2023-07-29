import React from 'react';
class HeaderSection extends React.Component {
    render() {
        return (
            <header class="py-5">
                <div class="container px-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-xxl-6">
                            <div class="text-center my-5">
                                <h1 class="fw-bolder mb-3">Eat the Sharks.</h1>
                                <p class="lead fw-normal text-muted mb-4">
                                We help you make better bets on every game, with our
                                unparalleld historical database, and easy to use Live
                                Odds Charts, in the NFL and NBA
                                </p>
                                <a class="btn btn-primary btn-lg" href="#scroll-target">
                                    View Live Odds
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            );
        }
}
export default HeaderSection;