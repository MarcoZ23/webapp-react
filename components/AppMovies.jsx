export default function AppMovies() {
    return (

        <>
            <section>
                <div className="p-5 mb-4 bg-light rounded-2">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Movies review</h1>
                        <p className="col-md-8 fs-4">We review the latest movies</p>
                    </div>
                </div>
            </section>
            <div className="container"></div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm"></div>
                    <img src="https://picsum.photos/200/300" className="card-img-top mx-3" alt="..." />
                    <div className="card-body mx-3">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm"></div>
                    <img src="https://picsum.photos/200/300" className="card-img-top mx-3" alt="..." />
                    <div className="card-body mx-3">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm"></div>
                    <img src="https://picsum.photos/200/300" className="card-img-top mx-3" alt="..." />
                    <div className="card-body mx-3">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </>
    )
}