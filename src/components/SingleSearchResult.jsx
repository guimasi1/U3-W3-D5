import { Col } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setFavouriteSongs, setSongToPLay } from "../redux/actions/actions";

const SingleSearchResult = ({ song }) => {
  const dispatch = useDispatch();
  const stateshow = useSelector((state) => {
    return state;
  });
  console.log(stateshow);
  console.log(song);
  return (
    <Col>
      <div className="position-relative">
        <img
          src={song.album.cover_medium}
          alt="album-cover "
          onClick={(e) => {
            e.stopPropagation();
            console.log(song.preview);
            dispatch(setSongToPLay(song));
            console.log(stateshow);
          }}
        />
        <Heart
          className="position-absolute  heart-icon"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setFavouriteSongs(song));
          }}
        />
      </div>
      <div
        onClick={() => {
          console.log(song.preview);
        }}
      >
        <p>
          {song.title} - {song.artist.name}
        </p>
      </div>
    </Col>
  );
};
export default SingleSearchResult;
