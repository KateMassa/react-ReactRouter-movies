import { useState } from "react";
import { toast } from "react-hot-toast";
import css from "./MovieSearch.module.css";

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error("Search term required!");
      return;
    }

    onSearch(query);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <input
            className={css.searchInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={css.searchButton} type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieSearch;

// import { useState } from "react";
// import axios from "axios";
// import { API_KEY } from "../config";

// const MovieSearch = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.get(
//         "https://api.themoviedb.org/3/search/movie",
//         {
//           params: {
//             api_key: API_KEY,
//             language: "en-US",
//             query: query,
//           },
//         }
//       );
//       onSearch(response.data.results);
//     } catch (error) {
//       console.error("Error searching movies:", error);
//     }
//   };

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={query} onChange={handleChange} />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default MovieSearch;
