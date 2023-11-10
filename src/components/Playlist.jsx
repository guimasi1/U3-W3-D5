import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleSong from "./SingleSong";
import { useNavigate } from "react-router-dom";

const Playlist = () => {
  const navigate = useNavigate();
  const playlistSongs = useSelector((state) => {
    return state.search.favouriteSongs;
  });
  const statemy = useSelector((state) => state);
  console.log(statemy, "STATOOO");
  console.log(playlistSongs);
  return (
    <Container>
      <Row>
        <Col className="text-center mt-3">
          <Button
            className="btn-secondary w-25"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
        </Col>
      </Row>

      <h1 className="text-white text-center">Playlist</h1>
      <Row className="text-white">
        <Col>
          {playlistSongs &&
            playlistSongs.map((song, i) => {
              return <SingleSong key={i} track={song} />;
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default Playlist;
