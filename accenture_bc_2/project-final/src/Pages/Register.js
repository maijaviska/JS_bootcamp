function Register() {
    return (
        <div>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100 p-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Register</h2>

                                    <form>
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                            <label className="form-label" for="form3Example1cg">Username</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                                            <label className="form-label" for="form3Example4cg">Password</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                                            <label className="form-label" for="form3Example4cdg">Repeat your password</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                            <label className="form-label" for="form3Example1cg">First Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                            <label className="form-label" for="form3Example1cg">Last Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                                            <label className="form-label" for="form3Example3cg">Your Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <select type="text" id="form3Example1cg" className="form-select form-select-md">
                                                <option select>Select Country</option>
                                                <option value="1">Latvia</option>
                                                <option value="2">Lithuania</option>
                                                <option value="3">Estonia</option>
                                            </select>
                                            <label className="form-label" for="form3Example1cg">Country</label>
                                        </div>

                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form2Example3cg"
                                            />
                                            <label className="form-check-label" for="form2Example3g">
                                                I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button" className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register