import { useSelector } from "react-redux";
import SingleSearchResult from "./SingleSearchResult";
const SearchResults = () => {
  const songs = useSelector((state) => state.search.songs);
  console.log(songs);
  return (
    <div class="col-10">
      <div id="searchResults">
        <h2>Search Results</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 g-2">
          {songs &&
            songs.map((song) => (
              <SingleSearchResult key={song.id} song={song} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
