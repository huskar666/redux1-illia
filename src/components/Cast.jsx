import { useEffect, useState } from "react";
import { getMovieCredits } from "../services/api";
import { useParams } from "react-router-dom";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      {cast.map(actor => (
        <p key={actor.id}>{actor.name}</p>
      ))}
    </div>
  );
}