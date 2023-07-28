import React from 'react';
class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" href="index.html">OrcaBets</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="about.html">Signup / Login</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Live Charts</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Historical Odds Database</a></li>
                            <li class="nav-item"><a class="nav-link" href="pricing.html">Analysis Tools</a></li>
                            <li class="nav-item"><a class="nav-link" href="faq.html">FAQ</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sports</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a class="dropdown-item" href="blog-home.html">NFL</a></li>
                                    <li><a class="dropdown-item" href="blog-post.html">NBA</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            );
        }
}
export default NavBar;