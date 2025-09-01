import React from 'react';
import { Form, Card, Row, Col } from 'react-bootstrap';

function Editor({ data, setData }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <Card>
      <Card.Header as="h5">Editor de Firma</Card.Header>
      <Card.Body>
        <Form>
          {/* Contact Info */}
          <Card.Title as="h6" className="mb-3">Información de Contacto</Card.Title>
          <Row>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Nombre</Form.Label><Form.Control size="sm" type="text" name="name" value={data.name} onChange={handleChange} /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Cargo / Título</Form.Label><Form.Control size="sm" type="text" name="title" value={data.title} onChange={handleChange} /></Form.Group></Col>
          </Row>
          <Row>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Empresa</Form.Label><Form.Control size="sm" type="text" name="company" value={data.company} onChange={handleChange} /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Teléfono</Form.Label><Form.Control size="sm" type="text" name="phone" value={data.phone} onChange={handleChange} /></Form.Group></Col>
          </Row>
          <Row>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Email</Form.Label><Form.Control size="sm" type="email" name="email" value={data.email} onChange={handleChange} /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Sitio Web</Form.Label><Form.Control size="sm" type="text" name="website" value={data.website} onChange={handleChange} /></Form.Group></Col>
          </Row>

          <hr />

          {/* Logo */}
          <Card.Title as="h6" className="mb-3">Logo</Card.Title>
          <Form.Group className="mb-3"><Form.Label>URL del Logo</Form.Label><Form.Control size="sm" type="text" name="logoUrl" value={data.logoUrl} onChange={handleChange} /></Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Posición del Logo</Form.Label>
                <Form.Select size="sm" name="logoPosition" value={data.logoPosition} onChange={handleChange}>
                  <option value="left">Izquierda</option>
                  <option value="top">Arriba</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Label>Ancho del Logo: {data.logoWidth}px</Form.Label>
              <Form.Range name="logoWidth" min="30" max="150" value={data.logoWidth} onChange={handleChange} />
            </Col>
          </Row>

          <hr />

          {/* Banner */}
          <Card.Title as="h6" className="mb-3">Banner Promocional</Card.Title>
          <Form.Group className="mb-3"><Form.Label>URL del Banner (imagen o GIF)</Form.Label><Form.Control size="sm" type="text" name="bannerUrl" value={data.bannerUrl} onChange={handleChange} placeholder="Dejar vacío para ocultar" /></Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Posición del Banner</Form.Label>
            <Form.Select size="sm" name="bannerPosition" value={data.bannerPosition} onChange={handleChange}>
              <option value="top">Arriba de la firma</option>
              <option value="bottom">Abajo de la firma</option>
            </Form.Select>
          </Form.Group>

          <hr />

          {/* Styling */}
          <Card.Title as="h6" className="mb-3">Estilos y Colores</Card.Title>
          <Row>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Fuente</Form.Label><Form.Select size="sm" name="fontFamily" value={data.fontFamily} onChange={handleChange}><option value="Arial, sans-serif">Arial</option><option value="Helvetica, sans-serif">Helvetica</option><option value="Verdana, sans-serif">Verdana</option><option value="Tahoma, sans-serif">Tahoma</option><option value="Georgia, serif">Georgia</option><option value="Times New Roman, serif">Times New Roman</option></Form.Select></Form.Group></Col>
            <Col md={6}><Form.Label>Tamaño de Fuente: {data.fontSize}px</Form.Label><Form.Range name="fontSize" min="8" max="20" value={data.fontSize} onChange={handleChange} /></Col>
          </Row>
          <Row>
            <Col md={4}><Form.Group className="mb-3"><Form.Label>Color Texto</Form.Label><Form.Control type="color" name="textColor" value={data.textColor} onChange={handleChange} /></Form.Group></Col>
            <Col md={4}><Form.Group className="mb-3"><Form.Label>Color Enlaces</Form.Label><Form.Control type="color" name="linkColor" value={data.linkColor} onChange={handleChange} /></Form.Group></Col>
            <Col md={4}><Form.Group className="mb-3"><Form.Label>Color Fondo</Form.Label><Form.Control type="color" name="signatureBgColor" value={data.signatureBgColor} onChange={handleChange} /></Form.Group></Col>
          </Row>
          <Form.Check type="switch" id="show-icons-switch" name="showIcons" label="Mostrar iconos de contacto" checked={data.showIcons} onChange={handleChange} />
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Editor;
