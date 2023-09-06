import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div class="card d-flex justify-content-center align-items-center" style={{ padding: '90px' }}>
            <div class="card-body">
                <form style={{ boxShadow: "2px 2px 10px 10px silver", borderRadius: '20px', padding: "25px" }}>
                    <div class="row">
                        <h5 className='text-center'>Register</h5>
                        <hr />
                        <div class="col-md-6 mb-4">
                            <div class="form-outline">
                                <input type="text" id="form3Example1" class="form-control" />
                                <label class="form-label" for="form3Example1">First name</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="form-outline">
                                <input type="text" id="form3Example2" class="form-control" />
                                <label class="form-label" for="form3Example2">Last name</label>
                            </div>
                        </div>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="email" id="form3Example3" class="form-control" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required />
                        <label class="form-label" for="form3Example3">Email address</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="password" id="form3Example4" class="form-control" />
                        <label class="form-label" for="form3Example4">Password</label>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                        <label class="form-check-label" for="form2Example33">
                            Subscribe to our newsletter
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block mb-4">
                        Sign up
                    </button>
                    <Link to="/login">
                        <button type="button" className="btn btn-primary btn-block mb-4 mx-3">Login</button>
                    </Link>


                    <div class="text-center">
                        <p>or sign up with:</p>
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            facebook
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                            google
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register