function Chat() {
    return (
        <div>
            <div className="container py-5">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">

                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center p-3"
                                style={{ borderTop: "4px solid #ffa900;" }}>
                                <h5 className="mb-0">Chat messages</h5>
                                <div className="d-flex flex-row align-items-center">
                                    <span className="badge bg-warning me-3">20</span>
                                   
                                </div>
                            </div>
                            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "400px" }}>

                            
                            </div>
                            <div className="card-footer text-muted justify-content-start align-items-center p-3">
                                <ul className="mb-3">
                                    <div className="input p-3">
                                    <input type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="form-outline form-white">
                                        <textarea className="form-control" id="textAreaExample3" rows="4"></textarea>
                                        <label className="form-label" for="textAreaExample3">Message</label>
                                    </div>
                                </ul>
                                <button type="button" className="btn btn-warning btn-lg btn-rounded float-end">Send</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Chat