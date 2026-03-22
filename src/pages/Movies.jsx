import { useState } from "react";
import { searchMovies } from "../services/api";
import { Link } from "react-router-dom";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = e => {
    e.preventDefault();
    searchMovies(query).then(data => setMovies(data.results));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input value={query} onChange={e => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
}