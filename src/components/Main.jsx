import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SidebarComponent from "./SidebarComponent";
import MainContent from "./MainContent";
import Player from "./Player";
const Main = () => {
  return (
    <div>
      <Container fluid className="h-100">
        <Row>
          <SidebarComponent />
          <MainContent />
        </Row>
        <Row>
          <Col>
            <Player />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
