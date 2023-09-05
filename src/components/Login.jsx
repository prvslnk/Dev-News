import React from 'react'

const Login = () => {
    return (
        <div style={{ margin: '120px 25px', padding: '65px', boxShadow: "2px 2px 10px 10px silver", borderRadius: '20px' }}>
            <section class="vh-100">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 text-black">


                            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                                <form style={{ width: "23rem" }}>

                                    <h3 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }} >Log in</h3>

                                    <div class="form-outline mb-4">
                                        <input type="email" id="form2Example18" class="form-control form-control-lg" />
                                        <label class="form-label" for="form2Example18">Email address</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="form2Example28" class="form-control form-control-lg" />
                                        <label class="form-label" for="form2Example28">Password</label>
                                    </div>

                                    <div class="pt-1 mb-4">
                                        <button class="btn btn-info btn-lg btn-block" type="button">Login</button>
                                    </div>

                                    <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                                    <p>Don't have an account? <a href="/register" class="link-info">Register here</a></p>

                                </form>

                            </div>

                        </div>
                        <div class="col-sm-6 px-0 d-none d-sm-block">
                            <img src="https://i.ibb.co/ByxDYqY/unnamed.webp"
                                alt="Login_image" class="w-100 vh-100" style={{ objectFit: "cover", objectPosition: "left" }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login