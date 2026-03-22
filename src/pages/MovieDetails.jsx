import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import { useParams, Link, Outlet } from "react-router-dom";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>

      <Link to="cast">Cast</Link>
      <br />
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </div>
  );
}