import React from 'react';
import { Form, Card, Row, Col } from 'react-bootstrap';

function Editor({ data, setData }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Card>
      <Card.Header as="h5">Editor de Firma</Card.Header>
      <Card.Body>
        <Form>
          <Card.Title as="h6" className="mb-3">Información de Contacto</Card.Title>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control size="sm" type="text" name="name" value={data.name} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Cargo / Título</Form.Label>
                <Form.Control size="sm" type="text" name="title" value={data.title} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Empresa</Form.Label>
                <Form.Control size="sm" type="text" name="company" value={data.company} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control size="sm" type="text" name="phone" value={data.phone} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control size="sm" type="email" name="email" value={data.email} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Sitio Web</Form.Label>
                <Form.Control size="sm" type="text" name="website" value={data.website} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>URL del Logo</Form.Label>
            <Form.Control size="sm" type="text" name="logoUrl" value={data.logoUrl} onChange={handleChange} />
          </Form.Group>

          <hr />

          <Card.Title as="h6" className="mb-3">Estilos y Colores</Card.Title>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Fuente</Form.Label>
                <Form.Select size="sm" name="fontFamily" value={data.fontFamily} onChange={handleChange}>
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="Helvetica, sans-serif">Helvetica</option>
                  <option value="Verdana, sans-serif">Verdana</option>
                  <option value="Tahoma, sans-serif">Tahoma</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="Times New Roman, serif">Times New Roman</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Label>Tamaño de Fuente: {data.fontSize}px</Form.Label>
                <Form.Range
                    name="fontSize"
                    min="8"
                    max="20"
                    step="1"
                    value={data.fontSize}
                    onChange={handleChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Color del Texto</Form.Label>
                    <Form.Control type="color" name="textColor" value={data.textColor} onChange={handleChange} />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Color de los Enlaces</Form.Label>
                    <Form.Control type="color" name="linkColor" value={data.linkColor} onChange={handleChange} />
                </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Editor;
