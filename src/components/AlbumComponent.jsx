import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SingleTrackAlbum from "./SingleTrackAlbum";

const AlbumComponent = () => {
  const params = useParams();
  const [album, setAlbum] = useState(null);

  const getAlbum = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + params.id,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key":
            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("ok");
          return res.json();
        } else {
          throw new Error("something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
        setAlbum(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(params);
  return (
    <Container className="text-white">
      <h2 className="text-center text-white mt-3 fw-bold">Album</h2>
      {album && (
        <Row className="mt-5" xs={1} md={2}>
          <Col className="text-center">
            <div>
              <img src={album.cover_medium} alt="" />
            </div>
          </Col>
          <Col>
            <h3 className="fs-1">{album.artist.name}</h3>
            <h5 className="fs-4 mt-3">{album.title}</h5>
          </Col>
        </Row>
      )}
      {album && (
        <Row>
          <Col>
            {album.tracks.data.map((track) => {
              return <SingleTrackAlbum key={track.id} track={track} />;
            })}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AlbumComponent;
