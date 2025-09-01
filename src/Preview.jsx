import React from 'react';
import { Card } from 'react-bootstrap';

// I had to embed the SVG strings directly because a component function scope is not available inside the template literal.
// This is a common issue when building HTML strings for email.
const phoneIconSVG = (color) => `<svg width="13" height="13" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 4px;"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" fill="${color}" /></svg>`;
const emailIconSVG = (color) => `<svg width="13" height="13" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 4px;"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" fill="${color}" /></svg>`;
const websiteIconSVG = (color) => `<svg width="13" height="13" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 4px;"><path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12,10.59L14.83,7.76C16.78,9.71 16.78,12.88 14.83,14.83C14.44,15.22 13.8,15.22 13.41,14.83L12,13.41M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" fill="${color}" /></svg>`;

function Preview({ data }) {
  const {
    name, title, company, phone, email, website,
    fontFamily, fontSize, textColor, linkColor, signatureBgColor, showIcons,
    logoUrl, logoPosition, logoWidth,
    bannerUrl, bannerPosition
  } = data;

  const iconColor = linkColor; // Use link color for icons for consistency

  const textStyles = `font-family: ${fontFamily}, sans-serif; font-size: ${fontSize}px; color: ${textColor};`;
  const linkStyles = `color: ${linkColor}; text-decoration: none;`;

  const contactInfoHTML = `
    <p style="margin: 0; font-weight: bold;">${name}</p>
    <p style="margin: 2px 0;">${title}</p>
    <p style="margin: 2px 0; font-weight: bold;">${company}</p>
    <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 8px 0;" />
    <p style="margin: 2px 0;">${showIcons ? phoneIconSVG(iconColor) : '<strong>T:</strong>'} ${phone}</p>
    <p style="margin: 2px 0;">${showIcons ? emailIconSVG(iconColor) : '<strong>E:</strong>'} <a href="mailto:${email}" style="${linkStyles}">${email}</a></p>
    <p style="margin: 2px 0;">${showIcons ? websiteIconSVG(iconColor) : '<strong>W:</strong>'} <a href="http://${website}" target="_blank" style="${linkStyles}">${website}</a></p>
  `;

  const logoCell = logoUrl ? `<td width="${logoWidth}" style="vertical-align: top;"><img src="${logoUrl}" alt="Logo" width="${logoWidth}" style="display: block;"/></td>` : '';
  const textCell = `<td style="padding-left: ${logoUrl && logoPosition === 'left' ? '15px' : '0'}; border-left: ${logoUrl && logoPosition === 'left' ? `2px solid ${linkColor}` : 'none'}; vertical-align: top;">${contactInfoHTML}</td>`;

  let signatureTable;
  if (logoPosition === 'left') {
    signatureTable = `
      <tr>
        ${logoCell}
        ${textCell}
      </tr>
    `;
  } else { // top
    signatureTable = `
      <tr><td align="center" style="padding-bottom: 10px;">${logoCell}</td></tr>
      <tr><td>${textCell}</td></tr>
    `;
  }

  const bannerHTML = bannerUrl ? `<img src="${bannerUrl}" alt="Banner" width="100%" style="display:block; margin-bottom: 10px;"/>` : '';
  
  const finalSignature = `
    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; ${textStyles}">
      ${bannerPosition === 'top' && bannerUrl ? `<tr><td>${bannerHTML}</td></tr>` : ''}
      <tr><td>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="${signatureBgColor}" style="padding: 15px; border-radius: 4px;">
          <tbody>
            ${signatureTable}
          </tbody>
        </table>
      </td></tr>
      ${bannerPosition === 'bottom' && bannerUrl ? `<tr><td style="padding-top: 10px;">${bannerHTML}</td></tr>` : ''}
    </table>
  `;

  return (
    <Card>
      <Card.Header as="h5">Vista Previa</Card.Header>
      <Card.Body>
        <div dangerouslySetInnerHTML={{ __html: finalSignature }} />
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
