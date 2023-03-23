import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../ui/Heading';
import NavBar from '../ui/NavBar';


const ViewContact: React.FC = () => {
    return (
        <>
            <NavBar />
            <Heading heading={'View Contact'} color={'text-warning'} />
            <section className="container mt-3">
                <div className="row align-items-center">
                    <div className="col-sm-3">
                        <img alt="" className="img-fluid rounded-circle shadow-lg" src="" />
                    </div>
                    <div className="col-sm-6">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Name : <span className="fw-bold"></span>
                            </li>
                            <li className="list-group-item">
                                Mobile : <span className="fw-bold"></span>
                            </li>
                            <li className="list-group-item">
                                Email : <span className="fw-bold"></span>
                            </li>
                            <li className="list-group-item">
                                Company : <span className="fw-bold"></span>
                            </li>
                            <li className="list-group-item">
                                Title : <span className="fw-bold"></span>
                            </li>
                            <li className="list-group-item">
                                Group : <span className="fw-bold"></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <Link className="btn btn-warning mt-2" to="/contacts/admin">
                            <i className="bi bi-arrow-left-circle"></i> Back
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ViewContact;
