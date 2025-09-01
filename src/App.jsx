import { useState } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Editor from './Editor';
import Preview from './Preview';

function App() {
  const [signatureData, setSignatureData] = useState({
    // 🧾 Datos Personales y Corporativos
    nombreCompleto: 'Carlos Ranu',
    cargo: 'Consultor de Marketing Digital',
    empresa: 'Ranu.pro',
    slogan: 'Tecnología para evolucionar',
    telefonoDirecto: '+56912345678',
    email: 'contacto@ranu.pro',
    sitioWeb: 'www.ranu.pro',
    ubicacion: 'Santiago, Chile',

    // 🌍 Redes Sociales Profesionales
    linkedinUrl: 'https://linkedin.com/in/carlosranu',
    instagramUrl: 'https://instagram.com/ranu.pro',
    twitterUrl: '',
    facebookUrl: '',
    youtubeUrl: '',
    whatsappUrl: 'https://wa.me/56912345678?text=Hola%20%F0%9F%91%8B',
    calendlyUrl: 'https://calendly.com/ranu-pro/30min',

    // 📎 Extras Inteligentes y Diferenciales
    fotoUrl: 'https://i.imgur.com/Jq6v5v1.png', // Placeholder
    logoEmpresaUrl: '', // Placeholder
    qrCodeUrl: '', // e.g., URL to a generated QR image
    cierreCta: '¿Coordinamos una llamada?',
    disclaimer: 'Este mensaje y sus anexos son confidenciales y para uso exclusivo del destinatario.',

    // 🎨 Diseño y Tecnología
    themeColor: '#007bff', // A main theme color for links, icons, etc.
    textColor: '#333333',
    signatureBgColor: '#FFFFFF',
    darkModeTextColor: '#FFFFFF',
    darkModeBgColor: '#2d2d2d',
  });

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Generador de Firmas v2</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md={5} className="mb-3">
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
