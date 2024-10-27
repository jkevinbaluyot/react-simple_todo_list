import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Topbar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <img
            alt=""
            src="./logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Todo List
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export { Topbar };
