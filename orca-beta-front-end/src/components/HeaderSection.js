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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Iusto est, ut esse a labore aliquam beatae expedita. 
                                    Blanditiis impedit numquam libero molestiae et fugit cupiditate, 
                                    quibusdam expedita, maiores eaque quisquam.
                                </p>
                                <a class="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            );
        }
}
export default HeaderSection;