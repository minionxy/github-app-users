import React from 'react'

const Navgit = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
                                    <div class="container-fluid bg-info-subtle">
                                        <a class="navbar-brand" href="/">GITHUBB</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarNav">
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <a class="nav-link active" aria-current="page" href="/">Add</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/search">Search</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/delete">Delete</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/view">View</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navgit