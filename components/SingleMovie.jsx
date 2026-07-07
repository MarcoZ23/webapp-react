import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function SingleMovie() {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const url = `http://localhost:3000/api/mobies/${id}`

    function fetchMovie(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error('Error fetching movie:', error))
    }

    useEffect(() => {
        fetchMovie(url)
    }, [])

    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {movie && (
                            <img
                                src={`http://localhost:3000/movies_cover/${movie.image}`}
                                className="img-fluid"
                                alt={movie.title} />
                        )}
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="mb-3">{movie?.title}</h2>
                        <span><small className="badge bg-danger">{movie?.genre}</small></span>
                        <p className="mt-3">{movie?.abstract}</p>
                        <div className="mt-3">
                            <h5 className="mt-3 bg-dark text-white p-2">Directed by {movie?.director}</h5>
                            <small className="text-muted">Released on {movie?.release_year}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}