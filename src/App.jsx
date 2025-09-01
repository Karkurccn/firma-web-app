import { useState } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Editor from './Editor';
import Preview from './Preview';

function App() {
  const [signatureData, setSignatureData] = useState({
    name: 'Juan Pérez',
    title: 'Desarrollador de Software',
    company: 'Soluciones Digitales S.L.',
    phone: '+34 600 123 456',
    email: 'juan.perez@ejemplo.com',
    website: 'www.ejemplo.com',
    logoUrl: 'https://i.imgur.com/Jq6v5v1.png', // Placeholder logo
    fontFamily: 'Arial, sans-serif',
    fontSize: 12,
    textColor: '#000000',
    linkColor: '#0000EE',
  });

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Generador de Firmas para Apple Mail</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid className="mt-4">
        <Row>
          <Col md={5}>
            <Editor data={signatureData} setData={setSignatureData} />
          </Col>
          <Col md={7}>
            <Preview data={signatureData} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;