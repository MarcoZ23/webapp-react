import { useState, useEffect } from 'react'

export default function AppMovies() {

    const [movies, setMovies] = useState([])
    const url = 'http://localhost:3000/api/mobies'

    function fetchMovies(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error))
    }

    useEffect(() => {
        fetchMovies(url)
    }, [])


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
                    {movies.map((movie) => (
                        <div className="card mb-4 shadow-sm" key={movie.id}>
                            <img src={movie.image} className="card-img-top mx-3" alt={movie.title} />
                            <div className="card-body mx-3">
                                <h5 className="card-title">{movie.title}</h5>
                                <span><small>{movie.genre}</small></span>
                                <p className="card-text">{movie.abstract}</p>
                            </div>
                        </div>
                    ))}
                    <button type="button" className="btn btn-sm btn-primary">Read More</button>
                </div>
            </div>
        </>
    )
}