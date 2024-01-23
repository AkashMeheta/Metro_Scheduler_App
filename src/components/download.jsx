const Download = ()=>{
    return (
        <>
             <div className="container col-xxl-8 px-4 py-5" id="download">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="img1.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Get Metro Info On-the-Go</h1>
                        <p className="lead">Download our app for instant access to schedules, real-time updates, and more</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">DOWNLOAD</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Download;