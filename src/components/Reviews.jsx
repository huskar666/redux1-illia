import { useEffect, useState } from "react";
import { getMovieReviews } from "../services/api";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(r => (
        <p key={r.id}>{r.content}</p>
      ))}
    </div>
  );
}