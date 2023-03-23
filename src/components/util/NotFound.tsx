import React from 'react';

const NotFound:React.FC = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <small className="fw-bold text-danger">Page not found</small>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NotFound;
