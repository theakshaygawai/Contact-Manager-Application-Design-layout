import React from 'react';
import Heading from './Heading';
import NavBar from './NavBar';

const AboutPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Heading heading={'About Us'} color={'text-secondary'} />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-7 m-auto">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Application Name : <span className="fw-bold">{"Contact Manager App"}</span>
                            </li>
                            <li className="list-group-item">
                                Version : <span className="fw-bold">{"1.0.1"}</span>
                            </li>
                            <li className="list-group-item">
                                Developed By : <span className="fw-bold">{"React Developers"}</span>
                            </li>
                            <li className="list-group-item">
                                Tech Stack : <span className="fw-bold">{"React , Bootstrap, server, CRUD , Routing , Axios"}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutPage;
