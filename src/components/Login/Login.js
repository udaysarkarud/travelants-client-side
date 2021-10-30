import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hook/useAuth';

const Login = () => {
    const { handelGoogleLogin, setIsLoading, allError, setAllError } = useAuth();

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const GoogleLogin = () => {
        handelGoogleLogin()
            .then(result => {
                setAllError('')
                history.push(redirect_url)
            }).catch((error) => {
                setAllError(error.code)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <section className="container section-gap">
            <section className="">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                                            alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <span className="h1 fw-bold mb-0"><i className="bi bi-flower2"></i> TravelAnts</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3">Sign into
                                                    your account</h5>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example17"
                                                        className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example27"
                                                        className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block"
                                                        type="button">Login</button> <button onClick={GoogleLogin}
                                                            className="btn btn-dark btn-lg btn-block" type="button">Google Login
                                                        / Singup</button>
                                                </div>

                                                <p className="mb-5 pb-lg-2" >Don't have an account?
                                                    <a href="#!" >Register here</a>
                                                </p>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    );
};

export default Login;