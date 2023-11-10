import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleAlbum = ({ album }) => {
  const navigate = useNavigate();
  return (
    <Col>
      <div>
        <img
          src={album.album.cover_medium}
          alt="album-cover"
          onClick={() => {
            navigate("/album/" + album.album.id);
          }}
        />
        <p>
          {album.album.title} - {album.artist.name}
        </p>
      </div>
    </Col>
  );
};
export default SingleAlbum;
