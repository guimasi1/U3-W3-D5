import { Row, Col } from "react-bootstrap";
const SingleSong = ({ track }) => {
  const convertSecondsToMinutesAndSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  };
  return (
    <Row className="d-flex justify-content-between mt-2 border rounded px-3 py-2 align-items-center ">
      <Col className="p-0"> {track.title}</Col>
      <Col className="p-0 offset-2"> {track.artist.name}</Col>
      <Col className="p-0 text-end">
        {convertSecondsToMinutesAndSeconds(track.duration)}
      </Col>
    </Row>
  );
};

export default SingleSong;
