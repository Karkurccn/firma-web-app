import React from 'react';
import { Form, Card, Row, Col, Accordion } from 'react-bootstrap';

function Editor({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Card>
      <Card.Header as="h5">Editor de Firma</Card.Header>
      <Card.Body>
        <Accordion defaultActiveKey="0" alwaysOpen>
          {/* --- Datos Personales y Corporativos --- */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>🧾 Datos Personales y Corporativos</Accordion.Header>
            <Accordion.Body>
              <Row><Col md={6}><Form.Group className="mb-3"><Form.Label>Nombre completo</Form.Label><Form.Control size="sm" name="nombreCompleto" value={data.nombreCompleto} onChange={handleChange} /></Form.Group></Col><Col md={6}><Form.Group className="mb-3"><Form.Label>Cargo</Form.Label><Form.Control size="sm" name="cargo" value={data.cargo} onChange={handleChange} /></Form.Group></Col></Row>
              <Row><Col md={6}><Form.Group className="mb-3"><Form.Label>Empresa</Form.Label><Form.Control size="sm" name="empresa" value={data.empresa} onChange={handleChange} /></Form.Group></Col><Col md={6}><Form.Group className="mb-3"><Form.Label>Slogan</Form.Label><Form.Control size="sm" name="slogan" value={data.slogan} onChange={handleChange} /></Form.Group></Col></Row>
              <Row><Col md={6}><Form.Group className="mb-3"><Form.Label>Teléfono directo</Form.Label><Form.Control size="sm" name="telefonoDirecto" value={data.telefonoDirecto} onChange={handleChange} placeholder="+56912345678" /></Form.Group></Col><Col md={6}><Form.Group className="mb-3"><Form.Label>Email</Form.Label><Form.Control size="sm" type="email" name="email" value={data.email} onChange={handleChange} /></Form.Group></Col></Row>
              <Row><Col md={6}><Form.Group className="mb-3"><Form.Label>Sitio Web</Form.Label><Form.Control size="sm" name="sitioWeb" value={data.sitioWeb} onChange={handleChange} placeholder="www.ejemplo.com" /></Form.Group></Col><Col md={6}><Form.Group className="mb-3"><Form.Label>Ubicación</Form.Label><Form.Control size="sm" name="ubicacion" value={data.ubicacion} onChange={handleChange} placeholder="Ciudad, País" /></Form.Group></Col></Row>
            </Accordion.Body>
          </Accordion.Item>

          {/* --- Redes Sociales --- */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>🌍 Redes Sociales Profesionales</Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3"><Form.Label>LinkedIn</Form.Label><Form.Control size="sm" name="linkedinUrl" value={data.linkedinUrl} onChange={handleChange} placeholder="https://linkedin.com/in/usuario" /></Form.Group>
              <Form.Group className="mb-3"><Form.Label>Instagram</Form.Label><Form.Control size="sm" name="instagramUrl" value={data.instagramUrl} onChange={handleChange} placeholder="https://instagram.com/empresa" /></Form.Group>
              <Form.Group className="mb-3"><Form.Label>Twitter/X</Form.Label><Form.Control size="sm" name="twitterUrl" value={data.twitterUrl} onChange={handleChange} placeholder="https://x.com/usuario" /></Form.Group>
              <Form.Group className="mb-3"><Form.Label>Facebook</Form.Label><Form.Control size="sm" name="facebookUrl" value={data.facebookUrl} onChange={handleChange} placeholder="https://facebook.com/empresa" /></Form.Group>
              <Form.Group className="mb-3"><Form.Label>YouTube</Form.Label><Form.Control size="sm" name="youtubeUrl" value={data.youtubeUrl} onChange={handleChange} placeholder="https://youtube.com/@empresa" /></Form.Group>
              <Form.Group className="mb-3"><Form.Label>WhatsApp</Form.Label><Form.Control size="sm" name="whatsappUrl" value={data.whatsappUrl} onChange={handleChange} placeholder="https://wa.me/569..." /></Form.Group>
              <Form.Group className="mb-3"><Form.Label>Calendly / Agendador</Form.Label><Form.Control size="sm" name="calendlyUrl" value={data.calendlyUrl} onChange={handleChange} placeholder="https://calendly.com/usuario" /></Form.Group>
            </Accordion.Body>
          </Accordion.Item>

          {/* --- Extras Inteligentes --- */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>📎 Extras Inteligentes y Diferenciales</Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3"><Form.Label>URL Foto o Avatar</Form.Label><Form.Control size="sm" name="fotoUrl" value={data.fotoUrl} onChange={handleChange} /></Form.Group>
              <Form.Group className="mb-3"><Form.Label>URL Logo Empresa</Form.Label><Form.Control size="sm" name="logoEmpresaUrl" value={data.logoEmpresaUrl} onChange={handleChange} /></Form.Group>
              <Form.Group className="mb-3"><Form.Label>URL Imagen QR</Form.Label><Form.Control size="sm" name="qrCodeUrl" value={data.qrCodeUrl} onChange={handleChange} placeholder="Dejar vacío para ocultar" /></Form.Group>
              <Form.Group className="mb-3"><Form.Label>Mensaje de Cierre (CTA)</Form.Label><Form.Control as="textarea" rows={2} size="sm" name="cierreCta" value={data.cierreCta} onChange={handleChange} /></Form.Group>
              <Form.Group className="mb-3"><Form.Label>Disclaimer Legal</Form.Label><Form.Control as="textarea" rows={3} size="sm" name="disclaimer" value={data.disclaimer} onChange={handleChange} /></Form.Group>
            </Accordion.Body>
          </Accordion.Item>

          {/* --- Diseño y Tecnología --- */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>🎨 Diseño y Tecnología</Accordion.Header>
            <Accordion.Body>
              <Row>
                <Col><Form.Group className="mb-3"><Form.Label>Color Principal (Enlaces, iconos)</Form.Label><Form.Control type="color" name="themeColor" value={data.themeColor} onChange={handleChange} /></Form.Group></Col>
                <Col><Form.Group className="mb-3"><Form.Label>Color del Texto</Form.Label><Form.Control type="color" name="textColor" value={data.textColor} onChange={handleChange} /></Form.Group></Col>
                <Col><Form.Group className="mb-3"><Form.Label>Color de Fondo (Firma)</Form.Label><Form.Control type="color" name="signatureBgColor" value={data.signatureBgColor} onChange={handleChange} /></Form.Group></Col>
              </Row>
               <Row>
                <Col><Form.Group className="mb-3"><Form.Label>Texto (Modo Oscuro)</Form.Label><Form.Control type="color" name="darkModeTextColor" value={data.darkModeTextColor} onChange={handleChange} /></Form.Group></Col>
                <Col><Form.Group className="mb-3"><Form.Label>Fondo (Modo Oscuro)</Form.Label><Form.Control type="color" name="darkModeBgColor" value={data.darkModeBgColor} onChange={handleChange} /></Form.Group></Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}

export default Editor;