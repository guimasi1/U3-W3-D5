/* eslint-disable jsx-a11y/anchor-is-valid */
import shuffle from "../assets/playerbuttons/shuffle.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import prev from "../assets/playerbuttons/prev.png";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const Player = () => {
  const songToPlay = useSelector((state) => {
    return state.player.song;
  });

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          {!songToPlay && (
            <div className="row h-100 flex-column justify-content-center align-items-center">
              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex">
                  <a>
                    <img src={shuffle} alt="shuffle" />
                  </a>
                  <a>
                    <img src={prev} alt="prev" />
                  </a>
                  <a>
                    <img src={play} alt="play" />
                  </a>
                  <a>
                    <img src={next} alt="next" />
                  </a>
                  <a>
                    <img src={repeat} alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          )}
          {songToPlay && (
            <Container>
              <Row>
                <Col xs={4}>
                  <div className="text-white d-flex gap-3 ms-3 align-items-center">
                    <p>{songToPlay.artist.name}</p>
                    <p>{songToPlay.title}</p>
                    <img
                      className="rounded-pill"
                      src={songToPlay.album.cover_small}
                      style={{ width: "40px" }}
                      alt=""
                    />
                  </div>
                </Col>
                <Col className="offset-2">
                  <div className="d-flex gap-3">
                    <audio src={songToPlay.preview} autoPlay controls></audio>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
