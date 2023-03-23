import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../ui/Heading'
import NavBar from '../ui/NavBar'

const LoginPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Heading heading={'Login User'} color={'text-success'} />
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <form action="">
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Email' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Password' />
              </div>
              <div className="mb-2">
                <input type="submit" className='btn btn-success' value={"Login"} />
                <Link to='/' className='btn btn-dark ms-2'> Cancel</Link>
              </div>
            </form>
            <small>Don't have an account ?
              <Link to='/users/register' className='fw-bold text-primary text-decoration-none'> Register</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage