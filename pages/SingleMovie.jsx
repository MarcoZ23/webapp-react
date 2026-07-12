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

    function getStars(vote) {
        return '⭐'.repeat(vote) + '☆'.repeat(5 - vote)
    }

    const initialFormData = {
        name: '',
        vote: '',
        text: ''
    }
    const [formData, setFormData] = useState(initialFormData)

    function handleSubmit(e) {
        e.preventDefault()

        const reviewUrl = `${url}/reviews`;
        fetch(reviewUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                setFormData(initialFormData)
                fetchMovie(url)
            })
            .catch(error => {

                console.error('Error submitting review:', error)
            })
    }
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
                        <div className="mt-5">
                            <h3>Reviews</h3>
                            {movie?.reviews?.length > 0 &&
                                movie.reviews.map(review => (
                                    <div key={review.id} className="card mb-3">
                                        <div className="card-body">
                                            <h5>{review.name}</h5>
                                            <p>{review.text}</p>
                                            <span>{getStars(review.vote)}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <section id="add review form" className="container my-5">
                <div className="container">
                    <div className="card p-5">
                        <h2 className="mb-4">Add a Movie Review</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Your Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter your username" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="rating" className="form-label">Rating</label>
                                <select className="form-control" id="rating" name="rating" value={formData.vote} onChange={(e) => setFormData({ ...formData, vote: Number(e.target.value) })}>
                                    <option value="">Select a rating</option>
                                    <option value="1">1 </option>
                                    <option value="2">2 </option>
                                    <option value="3">3 </option>
                                    <option value="4">4 </option>
                                    <option value="5">5 </option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="review" className="form-label">Review</label>
                                <textarea className="form-control" id="review" rows="3" placeholder="Write your review here" value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit Review</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
