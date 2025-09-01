import React from 'react';
import { Card } from 'react-bootstrap';

function Preview({ data }) {
  const signatureStyles = {
    fontFamily: data.fontFamily,
    fontSize: `${data.fontSize}px`,
    color: data.textColor,
    backgroundColor: '#FFFFFF', // White background for the preview
    padding: '15px',
    borderRadius: '8px',
  };

  const linkStyle = {
    color: data.linkColor,
    textDecoration: 'none',
  };

  const signatureHtml = `
    <table cellpadding="0" cellspacing="0" border="0" style="font-family: ${data.fontFamily}, sans-serif; font-size: ${data.fontSize}px; color: ${data.textColor};">
      <tr>
        ${data.logoUrl ? `<td width="80" style="vertical-align: top;"><img src="${data.logoUrl}" alt="Logo" width="70" style="display: block;"/></td>` : ''}
        <td style="padding-left: ${data.logoUrl ? '15px' : '0'}; border-left: ${data.logoUrl ? `2px solid ${data.linkColor}` : 'none'};">
          <p style="margin: 0; font-weight: bold;">${data.name}</p>
          <p style="margin: 2px 0;">${data.title}</p>
          <p style="margin: 2px 0; font-weight: bold;">${data.company}</p>
          <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 5px 0;" />
          <p style="margin: 2px 0;"><strong>T:</strong> ${data.phone}</p>
          <p style="margin: 2px 0;"><strong>E:</strong> <a href="mailto:${data.email}" style="color: ${data.linkColor}; text-decoration: none;">${data.email}</a></p>
          <p style="margin: 2px 0;"><strong>W:</strong> <a href="http://${data.website}" target="_blank" style="color: ${data.linkColor}; text-decoration: none;">${data.website}</a></p>
        </td>
      </tr>
    </table>
  `;

  return (
    <Card>
      <Card.Header as="h5">Vista Previa</Card.Header>
      <Card.Body>
        <div style={signatureStyles} dangerouslySetInnerHTML={{ __html: signatureHtml }} />
        <hr />
        <h5>Instrucciones</h5>
        <ol>
            <li><strong>Selecciona y Copia:</strong> Arrastra el cursor sobre la firma de arriba para seleccionarla y presiona <code>Cmd+C</code> (Mac) o <code>Ctrl+C</code> (Windows).</li>
            <li><strong>Pega en Apple Mail:</strong>
                <ul>
                    <li>Abre Mail.app y ve a <code>Mail &gt; Ajustes &gt; Firmas</code>.</li>
                    <li>Selecciona la cuenta de correo, haz clic en el botón <code>+</code> para crear una nueva firma.</li>
                    <li>Desmarca la opción "Usar siempre mi tipo de letra de mensaje por omisión".</li>
                    <li>Pega tu firma (<code>Cmd+V</code>) en el cuadro de la derecha.</li>
                    <li>¡Listo! Cierra la ventana de ajustes.</li>
                </ul>
            </li>
        </ol>
      </Card.Body>
    </Card>
  );
}

export default Preview;
