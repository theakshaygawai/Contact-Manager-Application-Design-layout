import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../ui/Heading';
import NavBar from '../ui/NavBar';

const EditContact: React.FC = () => {
    return (
        <>
            <NavBar />
            <Heading heading={'Edit Contact'} color={'text-primary'} />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <form >
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder={'Name'} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder={'ImageUrl'} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder={'Email'} />
                            </div>
                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder={'Mobile'} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder={'Company'} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder={'Title'} />
                            </div>
                            <div className="mb-2">
                                <select className="form-control">
                                    <option value="">Select a Group</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-primary" value={'Update'} />
                                <Link to={'/contacts/admin'} className="btn btn-dark ms-2">Cancel</Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-3">
                        <img src="" alt="" className="rounded-circle img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default EditContact;
