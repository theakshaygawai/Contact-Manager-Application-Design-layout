import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../ui/Heading';
import NavBar from '../ui/NavBar';

const AdminContact: React.FC = () => {

    return (
        <>
            <NavBar />
            <Heading heading={'Contact Manager'} color={'text-dark'} />

            {/* search box  */}

            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-6 shadow-lg ">
                        <form action="">
                            <div className="row">
                                <div className="col-sm-7">
                                    <input type="text" className='form-control' placeholder='Search Here' />
                                </div>
                                <div className="col-sm-5">
                                    <input type="submit" className='btn btn-dark ms-2' placeholder='Search Here' value={"Search"} />
                                    <Link to={'/contacts/add'} className="btn btn-success ms-3 " >
                                        <i className='bi bi-plus-circle-fill' ></i> Add New</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

{/* card components  */}

            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card shadow-lg ">
                            <div className="card-body bg-light rounded-2 m-1">
                                <div className="row align-items-center">
                                    <div className="col-sm-3">
                                        <img src="" alt="" className='img-fluid rounded-circle shadow-lg' />
                                    </div>
                                    <div className="col-sm-8">
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                Name : <span className='fw-bold'>{ }</span>
                                            </li>
                                            <li className='list-group-item'>
                                                Mobile : <span className='fw-bold'>{ }</span>
                                            </li>
                                            <li className='list-group-item'>
                                                Email : <span className='fw-bold'>{ }</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-1 d-flex flex-column  justify-content-center align-items-center">
                                        <Link to='/contacts/view/12' className='btn btn-warning mb-1'>
                                            <i className='bi bi-eye'></i>
                                        </Link>
                                        <Link to='/contacts/edit/211' className='btn btn-primary mb-1'>
                                            <i className='bi bi-pencil'></i>
                                        </Link>
                                        <button className='btn btn-danger mb-1'>
                                            <i className='bi bi-trash'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AdminContact;
