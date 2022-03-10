function Tabs() {
    return(
        <div className="row">
        <div className="col mb-3 mt-3">
            <h1 className="titles">About us</h1>

            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Products</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Address</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Summary</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">

                {/* /// Products tab */}

                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-products-tab">

                    <div className="row">

                        <div className="col-11">
                            
                        </div>

                        <div className="col-1 d-flex flex-column align-items-center mt-4">

                            <div className="col remove-button-space align-items-center mt-5">
                                <button className="btn btn-success address-btn mt-5" id="address-button" onClick="addAddress()">Remove</button>
                            </div>
                            <div className="col remove-button-space align-items-center mt-5">
                                <button className="btn btn-success address-btn" id="address-button" onClick="addAddress()">Remove</button>
                            </div>
                            <div className="col remove-button-space align-items-center">
                                <button className="btn btn-success address-btn" id="address-button" onClick="addAddress()">Remove</button>
                            </div>

                        </div>
                    </div>

                </div>

                {/* /// Address tab */}

                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-address-tab">

                    <div className="row mb-4 address-row">

                        <div className="col">
                            <div className="">
                                
                            </div>
                            <div className="">
                                <button className="btn btn-success address-btn" id="address-button" onClick="addAddress()">Add Address</button>
                            </div>
                        </div>

                        <div className="col">
                            <div className="">
                                
                            </div>
                            <div className="">
                                <button className="btn btn-success address-btn" id="address-button" onClick="addAddress()">Add Address</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* /// Summary tab */}
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-summary-tab">
                    <div className="row">
                        <div className="col-3">

                            <div className="row d-flex flex-column">

                                <div className="col mt-5">
                                    <h6>Shipping address</h6>
                                    Some address after user input
                                </div>

                                <div className="col mt-5">
                                    <h6>Billing address</h6>
                                    Some address after user input
                                </div>

                            </div>
                        </div>

                        <div className="col-9">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}
export default Tabs